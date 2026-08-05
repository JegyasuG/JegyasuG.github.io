/* ===== news feed =====
   Reads news.json. On the home page it renders the newest few into #news-home;
   on news.html it renders everything into #news-all. To post an update, edit
   news.json only -- nothing here needs changing.                          */
(function(){
  var home = document.getElementById('news-home');
  var all  = document.getElementById('news-all');
  if(!home && !all) return;

  function esc(s){
    return String(s == null ? '' : s).replace(/[&<>]/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c]; });
  }
  function fmt(d){
    var dt = new Date(d + 'T00:00:00');
    if(isNaN(dt)) return esc(d);
    return dt.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
  }
  function item(n){
    var head = n.link
      ? '<a href="' + esc(n.link) + '" target="_blank" rel="noopener">' + esc(n.title) + '</a>'
      : esc(n.title);
    return '<article class="news">'
         + '<div class="news-meta"><time>' + fmt(n.date) + '</time>'
         + (n.tag ? '<span class="tag">' + esc(n.tag) + '</span>' : '') + '</div>'
         + '<h3>' + head + '</h3>'
         + (n.body ? '<p>' + esc(n.body) + '</p>' : '')
         + '</article>';
  }

  fetch('news.json', {cache:'no-cache'})
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      var items = (d.items || []).slice().sort(function(a,b){
        return String(b.date).localeCompare(String(a.date));
      });
      if(!items.length) throw 0;
      if(home) home.innerHTML = items.slice(0,3).map(item).join('');
      if(all)  all.innerHTML  = items.map(item).join('');
    })
    .catch(function(){
      var msg = '<p class="empty">News could not be loaded just now.</p>';
      if(home) home.innerHTML = msg;
      if(all)  all.innerHTML  = msg;
    });
})();
