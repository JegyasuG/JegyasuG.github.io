/* ============ Hero backdrop: birdcage coil, axial view ============
   A birdcage volume coil seen down its bore. The rungs carry a sinusoidal
   current distribution -- I(n) = I0 * cos(2*pi*n/N) -- which is what makes
   the coil produce a homogeneous transverse field. Rungs are drawn hot where
   the current is strongest, so the pattern is physical, not decorative.
   Concentric rings behind it mark the field reaching outward from the bore. */
(function(){
  var svg = document.getElementById('lattice');
  if(!svg) return;
  var W = 1400, H = 620;
  svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
  var NS = 'http://www.w3.org/2000/svg';

  var cx = W * 0.795, cy = H * 0.50;
  var R  = H * 0.30;          // end-ring radius
  var Ri = R - H * 0.068;     // inner ring
  var N  = 16;                // number of rungs

  function el(name, attrs){
    var e = document.createElementNS(NS, name);
    for(var k in attrs) e.setAttribute(k, attrs[k]);
    svg.appendChild(e);
    return e;
  }

  // field reaching out from the bore, fading with distance
  for(var m = 6; m >= 1; m--){
    el('circle', {cx:cx, cy:cy, r:(R + m * R * 0.46).toFixed(1), fill:'none',
                  stroke:'#22384A', 'stroke-width':'1',
                  opacity:(0.46 - m * 0.055).toFixed(2)});
  }

  // end rings
  el('circle', {cx:cx, cy:cy, r:R.toFixed(1), fill:'none',
                stroke:'#1CA79E', 'stroke-width':'2', opacity:'0.85'});
  el('circle', {cx:cx, cy:cy, r:Ri.toFixed(1), fill:'none',
                stroke:'#2A4356', 'stroke-width':'1.5', opacity:'0.9'});

  // rungs, weighted by the cosine current distribution
  for(var n = 0; n < N; n++){
    var a = n / N * Math.PI * 2;
    var I = Math.abs(Math.cos(a));           // normalised rung current
    var hot = Math.pow(I, 2.2);
    var col = hot > 0.55 ? '#E8A600' : hot > 0.16 ? '#1CA79E' : '#2A4356';
    var x1 = cx + Math.cos(a) * Ri, y1 = cy + Math.sin(a) * Ri;
    var x2 = cx + Math.cos(a) * R,  y2 = cy + Math.sin(a) * R;

    el('line', {x1:x1.toFixed(1), y1:y1.toFixed(1), x2:x2.toFixed(1), y2:y2.toFixed(1),
                stroke:col, 'stroke-width':(2.2 + hot * 3.4).toFixed(1),
                'stroke-linecap':'round', opacity:(0.55 + hot * 0.45).toFixed(2)});

    // capacitor node on each leg
    el('circle', {cx:x2.toFixed(1), cy:y2.toFixed(1), r:(3 + hot * 3).toFixed(1),
                  fill:col, opacity:(0.6 + hot * 0.4).toFixed(2)});
  }

  // bore axis, running back toward the text
  el('line', {x1:'40', y1:cy, x2:(cx - R - 24).toFixed(1), y2:cy,
              stroke:'#1C2E3D', 'stroke-width':'1', 'stroke-dasharray':'3 8'});
})();
