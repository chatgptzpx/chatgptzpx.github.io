(function(){
  var root = document.getElementById('boot');
  if(!root) return;
  var out = document.getElementById('bootOutput');
  var bar = root.querySelector('.progress .bar');
  var scan = root.querySelector('.scanline');

  var prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var DURATION = prefersReduce ? 1500 : 3000; // ~3s

  var steps = [
    'Booting visor OS v1.3.7',
    'Linking optic channels <span class="ok">OK</span>',
    'Loading shaders & particles <span class="ok">OK</span>',
    'Connecting @ zpx.xyz <span class="ok">OK</span>',
    'Compiling scene…',
    '<span class="ok">READY</span>'
  ];

  var checkpoints = [0, .22, .46, .68, .86, 1];
  var timers = [];

  function start(){
    if(bar){
      bar.style.transition = 'width ' + DURATION + 'ms cubic-bezier(.22,.61,.36,1)';
      bar.style.width = '0%';
      requestAnimationFrame(function(){ bar.style.width = '100%'; });
    }
    if(prefersReduce && scan){ scan.style.display = 'none'; }

    for(var i=0; i<steps.length; i++){
      (function(i){
        var when = Math.max(0, Math.floor(checkpoints[i] * DURATION));
        timers.push(setTimeout(function(){ set(steps[i]); }, when));
      })(i);
    }
    timers.push(setTimeout(finish, DURATION));
  }

  function set(msg){
    out.innerHTML = msg;
    out.scrollTop = out.scrollHeight;
  }

  function finish(){
    root.classList.add('hidden');
    clearAll();
  }

  function clearAll(){
    while(timers.length){ clearTimeout(timers.pop()); }
  }

  function skip(){
    clearAll();
    finish();
  }

  window.addEventListener('keydown', function(e){ if(e.key === 'Escape'){ skip(); }});
  root.addEventListener('click', skip);

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
