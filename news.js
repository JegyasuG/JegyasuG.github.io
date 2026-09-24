/* ===== news feed =====
   Reads news.json. On the home page it renders the newest few into #news-home;
   on news.html it renders everything into #news-all. To post an update, edit
   news.json only -- nothing here needs changing. An item with an "image"
   shows a small thumbnail that opens the full picture when clicked. An item
   with "hide_home": true appears on news.html only.                      */
(function(){
  var home = document.getElementById('news-home');
  var all  = document.getElementById('news-all');
  if(!home && !all) return;

  function esc(s){
    return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; });
  }
  function fmt(d){
    var dt = new Date(d + 'T00:00:00');
    if(isNaN(dt)) return esc(d);
    return dt.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
  }
  function item(n, onHome){
    var head = n.link
      ? '<a href="' + esc(n.link) + '" target="_blank" rel="noopener">' + esc(n.title) + '</a>'
      : esc(n.title);
    var text = '<div class="news-meta"><time>' + fmt(n.date) + '</time>'
         + (n.tag ? '<span class="tag">' + esc(n.tag) + '</span>' : '') + '</div>'
         + '<h3>' + head + '</h3>'
         + (n.body ? '<p>' + esc(n.body) + '</p>' : '');
    var homeOnly = onHome && n.home_image;  // a picture shown on the home page only
    var full = homeOnly ? n.home_image : n.image;
    if(!full) return '<article class="news">' + text + '</article>';
    var alt = (homeOnly ? n.home_image_alt : n.image_alt) || n.title;
    var banner = onHome && n.home_thumb && !n.home_image;  // e.g. a banner in place of the thumbnail
    var thumb = homeOnly ? (n.home_thumb || full) : banner ? n.home_thumb : (n.thumb || full);
    var wide = banner || (homeOnly ? n.home_image_wide : n.image_wide);  // landscape: wider column
    return '<article class="news has-img' + (wide ? ' wide' : '') + '"><div>' + text + '</div>'
         + '<button type="button" class="news-thumb" data-src="' + esc(full) + '"'
         + ' data-alt="' + esc(alt) + '" aria-label="View larger: ' + esc(alt) + '">'
         + '<img src="' + esc(thumb) + '" alt="" loading="lazy">'
         + '<span>' + (banner ? 'View poster' : 'Click to enlarge') + '</span></button>'
         + '</article>';
  }

  /* ---- zoom view for news images ---- */
  var box = null, opener = null;
  function zoom(btn){
    if(!box){
      box = document.createElement('div');
      box.className = 'lightbox tall';
      box.setAttribute('role','dialog');
      box.setAttribute('aria-modal','true');
      box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button>'
                    + '<figure><img alt=""><figcaption></figcaption></figure>';
      document.body.appendChild(box);
      box.querySelector('.lb-close').addEventListener('click', unzoom);
      box.addEventListener('click', function(e){
        if(e.target === box || e.target.tagName === 'FIGURE') unzoom(); });
      document.addEventListener('keydown', function(e){
        if(e.key === 'Escape' && box.classList.contains('on')) unzoom(); });
    }
    opener = btn;
    var img = box.querySelector('img');
    img.src = btn.dataset.src;
    img.alt = btn.dataset.alt;
    box.querySelector('figcaption').textContent = btn.dataset.alt;
    box.classList.add('on');
    box.querySelector('figure').scrollTop = 0;
    document.body.style.overflow = 'hidden';
    box.querySelector('.lb-close').focus();
  }
  function unzoom(){
    box.classList.remove('on');
    box.querySelector('img').removeAttribute('src');
    document.body.style.overflow = '';
    if(opener) opener.focus();
  }
  [home, all].forEach(function(el){
    if(el) el.addEventListener('click', function(e){
      var b = e.target.closest('.news-thumb');
      if(b) zoom(b);
    });
  });

  fetch('news.json', {cache:'no-cache'})
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      var items = (d.items || []).slice().sort(function(a,b){
        return String(b.date).localeCompare(String(a.date));
      });
      if(!items.length) throw 0;
      if(home) home.innerHTML = items.filter(function(n){ return !n.hide_home; }).slice(0,3).map(function(n){ return item(n, true); }).join('');
      if(all)  all.innerHTML  = items.map(function(n){ return item(n, false); }).join('');
    })
    .catch(function(){
      var msg = '<p class="empty">News could not be loaded just now.</p>';
      if(home) home.innerHTML = msg;
      if(all)  all.innerHTML  = msg;
    });
})();
