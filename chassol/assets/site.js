(()=>{
  const v2=document.createElement('link');
  v2.rel='stylesheet';
  v2.href='assets/v2.css';
  document.head.appendChild(v2);

  const bar=document.querySelector('.progress-bar');
  const brand=document.querySelector('.floating-brand');
  const hasHero=!!document.querySelector('.hero');
  const mobileBreakpoint=780;
  let raf=0;

  const mix=(a,b,t)=>a+(b-a)*t;
  const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));

  const update=()=>{
    const y=window.scrollY||document.documentElement.scrollTop;
    const max=document.documentElement.scrollHeight-window.innerHeight;
    if(bar) bar.style.width=`${max>0?clamp(y/max*100,0,100):0}%`;

    if(brand&&hasHero){
      const mobile=window.innerWidth<=mobileBreakpoint;
      const startTop=mobile?82:76;
      const startLeft=mobile?18:Math.max(24,window.innerWidth*.03);
      const startWidth=mobile?Math.min(window.innerWidth*.54,230):Math.min(window.innerWidth*.26,390);
      const endTop=mobile?20:18;
      const endLeft=mobile?18:Math.max(24,window.innerWidth*.03);
      const endWidth=mobile?118:158;
      const distance=Math.max(260,window.innerHeight*.46);
      const t=clamp(y/distance,0,1);
      const eased=1-Math.pow(1-t,3);
      brand.style.setProperty('top',`${mix(startTop,endTop,eased)}px`,'important');
      brand.style.setProperty('left',`${mix(startLeft,endLeft,eased)}px`,'important');
      brand.style.setProperty('width',`${mix(startWidth,endWidth,eased)}px`,'important');
      brand.classList.toggle('is-compact',t>.94);
    }
    raf=0;
  };

  const request=()=>{if(!raf)raf=requestAnimationFrame(update)};
  update();
  window.addEventListener('scroll',request,{passive:true});
  window.addEventListener('resize',request);

  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('in');
  }),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const toggle=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('.mobile-menu');
  const close=document.querySelector('[data-menu-close]');
  if(toggle&&menu){
    const openMenu=()=>menu.classList.add('open');
    const closeMenu=()=>menu.classList.remove('open');
    toggle.addEventListener('click',openMenu);
    if(close) close.addEventListener('click',closeMenu);
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  }
})();