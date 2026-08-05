/* ===== live data =====
   1. Site last-updated date from the GitHub API.
   2. Berlin local time on the contact page.
   3. Visitor counter.
   Every block degrades quietly: if a service is unreachable the page keeps
   whatever is already written into the HTML, or hides that element.        */

/* ---- 1. site last updated, from the GitHub API ---- */
(function(){
  var out = document.getElementById('updated');
  if(!out) return;
  var wrap = out.closest('.updated');
  fetch('https://api.github.com/repos/JegyasuG/JegyasuG.github.io/commits?per_page=1')
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(j){
      var d = j && j[0] && j[0].commit && (j[0].commit.committer || j[0].commit.author);
      if(!d || !d.date) throw 0;
      out.textContent = new Date(d.date)
        .toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
      if(wrap) wrap.classList.add('ready');
    })
    .catch(function(){ if(wrap) wrap.remove(); });
})();

/* ---- 2. Berlin local time ---- */
(function(){
  var out = document.getElementById('berlin-time');
  if(!out) return;
  function paint(){
    try {
      var now = new Date();
      var t = now.toLocaleTimeString('en-GB', {timeZone:'Europe/Berlin', hour:'2-digit', minute:'2-digit'});
      var z = new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Berlin', timeZoneName:'short'})
                .formatToParts(now).filter(function(p){ return p.type === 'timeZoneName'; });
      out.textContent = t + (z.length ? ' ' + z[0].value : '');
    } catch(e){ var l = out.closest('.ct-line'); if(l) l.remove(); }
  }
  paint();
  setInterval(paint, 30000);
})();

/* ---- 3. visitor counter ---- */
(function(){
  var out = document.getElementById('visits');
  if(!out) return;
  var wrap = out.closest('.visits'), KEY = 'jegyasu-github-io';
  var seen = false;
  try { seen = sessionStorage.getItem('v_counted') === '1'; } catch(e){}

  var backends = [
    {hit:'https://countapi.mileshilliard.com/api/v1/hit/' + KEY,
     get:'https://countapi.mileshilliard.com/api/v1/get/' + KEY},
    {hit:'https://api.counterapi.dev/v1/' + KEY + '/visits/up',
     get:'https://api.counterapi.dev/v1/' + KEY + '/visits/'}
  ];
  function pick(d){
    if(d == null) return NaN;
    var k = ['value','count','Count','val','views'];
    for(var i=0;i<k.length;i++){
      var v = d[k[i]];
      if(typeof v === 'number') return v;
      if(typeof v === 'string' && v.trim() !== '' && isFinite(+v)) return +v;
    }
    return NaN;
  }
  function attempt(i){
    if(i >= backends.length){ if(wrap) wrap.remove(); return; }
    var ctl = ('AbortController' in window) ? new AbortController() : null;
    var timer = setTimeout(function(){ if(ctl) ctl.abort(); }, 6000);
    fetch(seen ? backends[i].get : backends[i].hit, ctl ? {signal:ctl.signal} : undefined)
      .then(function(r){ if(!r.ok) throw 0; return r.json(); })
      .then(function(d){
        clearTimeout(timer);
        var n = pick(d);
        if(!isFinite(n)) throw 0;
        out.textContent = n.toLocaleString('en-GB');
        if(wrap) wrap.classList.add('ready');
        if(!seen){ try { sessionStorage.setItem('v_counted','1'); } catch(e){} }
      })
      .catch(function(){ clearTimeout(timer); attempt(i+1); });
  }
  attempt(0);
})();

/* ---- footer year + copy-to-clipboard ---- */
(function(){
  var y = document.getElementById('yr');
  if(y) y.textContent = new Date().getFullYear();
})();
