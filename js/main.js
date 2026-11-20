(function(){
  // Mobile menu
  var btn=document.querySelector('.menu-btn'), list=document.querySelector('.nav ul');
  if(btn&&list){
    btn.addEventListener('click',function(){
      var o=list.classList.toggle('open'); btn.setAttribute('aria-expanded',o);
    });
  }
  // Reveal on scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
    },{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  } else { els.forEach(function(el){el.classList.add('in')}); }

  // Lightbox
  var items=[].slice.call(document.querySelectorAll('.gallery button'));
  var lb=document.querySelector('.lightbox');
  if(lb&&items.length){
    var img=lb.querySelector('img'), cap=lb.querySelector('p'), cur=0;
    function show(i){
      cur=(i+items.length)%items.length;
      var s=items[cur].querySelector('img');
      img.src=s.getAttribute('data-full')||s.src; img.alt=s.alt; cap.textContent=s.alt;
    }
    items.forEach(function(b,i){b.addEventListener('click',function(){show(i);lb.classList.add('open');lb.focus();});});
    function close(){lb.classList.remove('open');}
    lb.querySelector('.x').addEventListener('click',close);
    lb.querySelector('.prev').addEventListener('click',function(e){e.stopPropagation();show(cur-1)});
    lb.querySelector('.next').addEventListener('click',function(e){e.stopPropagation();show(cur+1)});
    lb.addEventListener('click',function(e){if(e.target===lb)close()});
    document.addEventListener('keydown',function(e){
      if(!lb.classList.contains('open'))return;
      if(e.key==='Escape')close();
      if(e.key==='ArrowLeft')show(cur-1);
      if(e.key==='ArrowRight')show(cur+1);
    });
  }
})();
