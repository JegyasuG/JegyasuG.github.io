/* shared: copy-to-clipboard + footer year */
(function(){
  var btn = document.getElementById('copybtn');
  if(btn) btn.addEventListener('click', function(){
    var email = 'jegyasu@mdc-berlin.de';
    var done = function(){ btn.textContent = 'Copied'; setTimeout(function(){ btn.textContent = 'Copy'; }, 1600); };
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(email).then(done).catch(function(){ btn.textContent = 'Select manually'; });
    } else { btn.textContent = 'Select manually'; }
  });
  var y = document.getElementById('yr');
  if(y) y.textContent = new Date().getFullYear();
})();
