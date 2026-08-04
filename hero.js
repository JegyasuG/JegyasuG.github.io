/* ============ 1. Hero backdrop: B-field of a surface loop coil ============
   Field lines of a magnetic dipole, r = R0*sin^2(theta). The coil sits at the
   right edge; the field weakens as it reaches across the panel. That falloff
   is the problem the research exists to solve, so it is drawn honestly. */
(function(){
  const svg = document.getElementById('lattice');
  if(!svg) return;
  const W = 1400, H = 620;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  const NS = 'http://www.w3.org/2000/svg';

  const cx = W*0.86, cy = H*0.50;       // coil position
  const RMAX = 1500;

  function fieldLine(R0){
    let d = '', started = false;
    for(let i = 1; i < 220; i++){
      const th = (i/220)*Math.PI*2;
      const r  = R0*Math.sin(th)*Math.sin(th);
      const x  = cx - r*Math.cos(th);      // dipole axis points left
      const y  = cy + r*Math.sin(th);
      if(!isFinite(x) || !isFinite(y)) continue;
      d += (started ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
      started = true;
    }
    return d + 'Z';
  }

  // 22 nested lines; near ones are hot, far ones fade to slate
  for(let i = 0; i < 22; i++){
    const f  = i/21;                                   // 0 = innermost
    const R0 = 46 + Math.pow(f, 1.55)*RMAX;
    const p  = document.createElementNS(NS,'path');
    p.setAttribute('d', fieldLine(R0));
    p.setAttribute('fill','none');
    p.setAttribute('stroke', f < 0.12 ? '#E8A600' : f < 0.34 ? '#1CA79E' : '#2A4356');
    p.setAttribute('stroke-width', (1.5 - f*0.7).toFixed(2));
    p.setAttribute('opacity', (0.85 - f*0.55).toFixed(2));
    p.setAttribute('stroke-linejoin','round');
    svg.appendChild(p);
  }

  // depth markers: the reach of the field, in centimetres
  const axis = document.createElementNS(NS,'line');
  axis.setAttribute('x1', 40); axis.setAttribute('x2', cx);
  axis.setAttribute('y1', cy); axis.setAttribute('y2', cy);
  axis.setAttribute('stroke','#1C2E3D'); axis.setAttribute('stroke-width','1');
  axis.setAttribute('stroke-dasharray','3 7');
  svg.appendChild(axis);

  // the coil itself, seen edge-on
  const coil = document.createElementNS(NS,'ellipse');
  coil.setAttribute('cx', cx); coil.setAttribute('cy', cy);
  coil.setAttribute('rx', 7); coil.setAttribute('ry', 62);
  coil.setAttribute('fill','none');
  coil.setAttribute('stroke','#E8A600'); coil.setAttribute('stroke-width','3');
  svg.appendChild(coil);
})();
