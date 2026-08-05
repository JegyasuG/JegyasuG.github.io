/* ===== gallery =====
   Reads gallery.json and lays the photographs out in a grid. Clicking one
   opens it full size. To add a photo, upload the file and add a block to
   gallery.json -- nothing here needs changing.                          */
(function(){
  var grid = document.getElementById('gallery');
  if(!grid) return;

  function esc(s){
    return String(s == null ? '' : s).replace(/[&<>"]/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; });
  }

  var items = [];

  function tile(n, i){
    return '<figure class="shot" data-i="' + i + '" tabindex="0" role="button" '
         + 'aria-label="View larger: ' + esc(n.caption) + '">'
         + '<img src="' + esc(n.src) + '" alt="' + esc(n.alt || n.caption) + '" loading="lazy"'
         + (n.focus ? ' style="object-position:' + esc(n.focus) + '"' : '') + '>'
         + '<figcaption>' + esc(n.caption) + '</figcaption>'
         + '</figure>';
  }

  /* ---- lightbox ---- */
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role','dialog');
  box.setAttribute('aria-modal','true');
  box.innerHTML = '<button class="lb-close" aria-label="Close">&times;</button>'
                + '<button class="lb-prev" aria-label="Previous">&#8249;</button>'
                + '<figure><img alt=""><figcaption></figcaption></figure>'
                + '<button class="lb-next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(box);
  var lbImg = box.querySelector('img'),
      lbCap = box.querySelector('figcaption'),
      cur = 0, opener = null;

  function open(i){
    cur = (i + items.length) % items.length;
    lbImg.src = items[cur].src;
    lbImg.alt = items[cur].alt || items[cur].caption || '';
    lbCap.textContent = items[cur].caption || '';
    box.classList.add('on');
    document.body.style.overflow = 'hidden';
    box.querySelector('.lb-close').focus();
  }
  function close(){
    box.classList.remove('on');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
    if(opener) opener.focus();
  }

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function(e){ e.stopPropagation(); open(cur-1); });
  box.querySelector('.lb-next').addEventListener('click', function(e){ e.stopPropagation(); open(cur+1); });
  box.addEventListener('click', function(e){ if(e.target === box) close(); });
  document.addEventListener('keydown', function(e){
    if(!box.classList.contains('on')) return;
    if(e.key === 'Escape') close();
    else if(e.key === 'ArrowRight') open(cur+1);
    else if(e.key === 'ArrowLeft')  open(cur-1);
  });

  grid.addEventListener('click', function(e){
    var f = e.target.closest('.shot');
    if(f){ opener = f; open(+f.dataset.i); }
  });
  grid.addEventListener('keydown', function(e){
    var f = e.target.closest('.shot');
    if(f && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); opener = f; open(+f.dataset.i); }
  });

  fetch('gallery.json', {cache:'no-cache'})
    .then(function(r){ if(!r.ok) throw 0; return r.json(); })
    .then(function(d){
      items = d.items || [];
      if(!items.length) throw 0;
      grid.innerHTML = items.map(tile).join('');
    })
    .catch(function(){
      grid.innerHTML = '<p class="empty">Photographs could not be loaded just now.</p>';
    });
})();
