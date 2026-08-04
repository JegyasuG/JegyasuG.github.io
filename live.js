/* ===== live numbers =====
   Scholar metrics come from metrics.json, refreshed daily by the GitHub Action
   in .github/workflows/scholar.yml. If that ever stops working you can simply
   edit metrics.json by hand and the site picks it up.

   Visitor count uses a free, no-signup counter service. If it is unreachable
   the counter hides itself rather than showing a broken value.            */

/* ---- Scholar metrics ---- */
(function(){
  var cit = document.getElementById('m-citations');
  if(!cit) return;                        // only the home page has the strip
  var h   = document.getElementById('m-hindex');
  var i10 = document.getElementById('m-i10');
  var note= document.getElementById('m-updated');

  function tick(el, target){              // count up, so the number reads as live
    if(!el) return;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      el.textContent = target; return;
    }
    var start = 0, t0 = null, dur = 900;
    function step(ts){
      if(t0 === null) t0 = ts;
      var p = Math.min((ts - t0)/dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(start + (target - start)*e);
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  fetch('metrics.json', {cache:'no-cache'})
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      tick(cit, d.citations);
      tick(h,   d.h_index);
      if(i10) i10.textContent = d.i10_index;
      if(note && d.updated){
        var dt = new Date(d.updated + 'T00:00:00');
        note.textContent = 'Google Scholar, updated ' +
          dt.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
      }
    })
    .catch(function(){ /* markup already holds the last published values */ });
})();

/* ---- Visitor counter ---- */
(function(){
  var out = document.getElementById('visits');
  if(!out) return;
  var wrap = out.closest('.visits');
  var KEY  = 'jegyasu-github-io';
  var BASE = 'https://countapi.mileshilliard.com/api/v1/';

  // count each browser session once, not every page navigation
  var seen = false;
  try { seen = sessionStorage.getItem('v_counted') === '1'; } catch(e){}
  var url = BASE + (seen ? 'get/' : 'hit/') + KEY;

  fetch(url)
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      var n = parseInt(d.value, 10);
      if(!isFinite(n)) throw 0;
      out.textContent = n.toLocaleString('en-GB');
      if(wrap) wrap.classList.add('ready');
      if(!seen){ try { sessionStorage.setItem('v_counted','1'); } catch(e){} }
    })
    .catch(function(){ if(wrap) wrap.remove(); });
})();
