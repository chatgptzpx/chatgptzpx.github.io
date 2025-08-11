(function(){
  function showToast(message){
    var toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(function(){
      toast.classList.remove('show');
    }, 1800);
  }

  function copyToClipboard(text){
    if(navigator.clipboard && navigator.clipboard.writeText){
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function(resolve, reject){
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly',''); ta.style.position='fixed'; ta.style.opacity='0';
      document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); resolve(); }
      catch(e){ reject(e); }
      finally{ document.body.removeChild(ta); }
    });
  }

  function bindCopyButton(el){
    if(!el) return;
    el.addEventListener('click', function(){
      var value = el.getAttribute('data-copy') || el.textContent.trim();
      copyToClipboard(value)
        .then(function(){ showToast('Copied: ' + value); })
        .catch(function(){ showToast('Unable to copy'); });
    });
  }

  document.querySelectorAll('[data-copy]').forEach(bindCopyButton);
})();


