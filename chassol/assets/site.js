(()=>{
  const patchContent=()=>{
    const style=document.createElement('style');
    style.textContent=`
      .screen-card.has-image .screen-bg img{filter:none!important;transform:scale(1)!important;opacity:1!important}
      .screen-card.has-image::after{background:linear-gradient(180deg,rgba(8,10,15,.02) 0%,rgba(8,10,15,.12) 58%,rgba(8,10,15,.72) 100%)!important}
      .date-row{grid-template-columns:112px minmax(130px,.8fr) minmax(180px,1.4fr) 92px!important;align-items:baseline}
      .date-row strong{font-family:"Lemon Milk",Arial,sans-serif;font-size:13px;font-weight:500;letter-spacing:.02em;text-transform:uppercase}
      .live-actions{margin-top:20px}
      .collab-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 clamp(28px,5vw,72px);border-top:1px solid var(--line)}
      .collab-item{padding:26px 0 30px;border-bottom:1px solid var(--line)}
      .collab-item .kicker{margin-bottom:11px}
      .collab-item .title-md{margin-bottom:10px}
      .collab-item .copy{max-width:58ch}
      @media(max-width:900px){
        .collab-grid{grid-template-columns:1fr}
        .date-row{grid-template-columns:96px 1fr!important;gap:8px 16px}
        .date-row>span:nth-child(3),.date-row .country{grid-column:2}
      }
    `;
    document.head.appendChild(style);

    const live=document.querySelector('#live');
    if(live){
      const headCopy=live.querySelector('.section-head .copy');
      if(headCopy) headCopy.textContent='Upcoming performances and current tour dates. The list below is updated from Chassol’s public artist pages.';
      const kicker=live.querySelector('.live-panel .kicker');
      const liveTitle=live.querySelector('.live-panel .lemon-title');
      const lead=live.querySelector('.live-panel .lead');
      if(kicker) kicker.textContent='Upcoming';
      if(liveTitle) liveTitle.textContent='Live dates';
      if(lead) lead.textContent='Funny How? and other current live formats, from Paris to Milan, Lyon, Massy and Metz.';
      const dates=live.querySelector('.dates');
      if(dates){
        dates.innerHTML=`
          <div class="date-row"><span>30 Sep 2026</span><strong>Paris</strong><span>L'Olympia · Prix Joséphine</span><span class="country">France</span></div>
          <div class="date-row"><span>01 Oct 2026</span><strong>Rennes</strong><span>Le Diapason</span><span class="country">France</span></div>
          <div class="date-row"><span>17 Oct 2026</span><strong>Le Creusot</strong><span>L'Arc Scène Nationale</span><span class="country">France</span></div>
          <div class="date-row"><span>30 Oct 2026</span><strong>Cittadella</strong><span>Teatro Sociale di Cittadella</span><span class="country">Italy</span></div>
          <div class="date-row"><span>01 Nov 2026</span><strong>Nyon</strong><span>Usine à Gaz</span><span class="country">Switzerland</span></div>
          <div class="date-row"><span>14 Nov 2026</span><strong>Cenon</strong><span>Le Rocher de Palmer</span><span class="country">France</span></div>
          <div class="date-row"><span>30 Nov 2026</span><strong>Paris</strong><span>Folies Bergère</span><span class="country">France</span></div>
          <div class="date-row"><span>10 Dec 2026</span><strong>Évreux</strong><span>Théâtre Legendre · Le Tangram</span><span class="country">France</span></div>
          <div class="date-row"><span>12 Dec 2026</span><strong>Milan</strong><span>Triennale di Milano</span><span class="country">Italy</span></div>
          <div class="date-row"><span>15 Dec 2026</span><strong>La Riche</strong><span>La Pléiade</span><span class="country">France</span></div>
          <div class="date-row"><span>02 Jan 2027</span><strong>Lyon</strong><span>Opéra de Lyon</span><span class="country">France</span></div>
          <div class="date-row"><span>04 Feb 2027</span><strong>Massy</strong><span>Paul B</span><span class="country">France</span></div>
          <div class="date-row"><span>06 Feb 2027</span><strong>Annecy</strong><span>Bonlieu Scène Nationale</span><span class="country">France</span></div>
          <div class="date-row"><span>11 Feb 2027</span><strong>Metz</strong><span>Cité Musicale de Metz</span><span class="country">France</span></div>`;
        if(!live.querySelector('.live-actions')){
          const actions=document.createElement('div');
          actions.className='actions live-actions';
          actions.innerHTML='<a class="film-cta" href="https://chassol.bandcamp.com/music" target="_blank">Official dates <span>↗</span></a>';
          dates.insertAdjacentElement('afterend',actions);
        }
      }
    }

    const screenCopy=document.querySelector('#screen .section-head .copy');
    if(screenCopy) screenCopy.textContent='Three selected screen credits, using the original film imagery directly and keeping the layout deliberately minimal.';

    const collab=document.querySelector('#collaborations');
    if(collab){
      const title=collab.querySelector('.section-head .lemon-title');
      const copy=collab.querySelector('.section-head .copy');
      if(title) title.textContent='Alongside other artists';
      if(copy) copy.textContent='Chassol has worked as pianist, arranger, composer, musical director and collaborator across pop, soul, electronic music and contemporary art.';
      const old=collab.querySelector('.twocol');
      if(old){
        const grid=document.createElement('div');
        grid.className='collab-grid reveal in';
        grid.innerHTML=`
          <article class="collab-item"><p class="kicker">International</p><h3 class="lemon-title title-md">Frank Ocean</h3><p class="copy">Piano on “U-N-I-T-Y” for <em>Endless</em>, recorded at Abbey Road in 2016.</p></article>
          <article class="collab-item"><p class="kicker">International</p><h3 class="lemon-title title-md">Solange</h3><p class="copy">Collaboration as composer and arranger, cited throughout Chassol’s official artist biographies.</p></article>
          <article class="collab-item"><p class="kicker">France / international</p><h3 class="lemon-title title-md">Phoenix</h3><p class="copy">Piano, keyboards, arrangements and touring work, including an international tour in the 2000s.</p></article>
          <article class="collab-item"><p class="kicker">France</p><h3 class="lemon-title title-md">Sébastien Tellier</h3><p class="copy">Work on <em>Politics</em> and <em>Sexuality</em>, including the string arrangement for “Broadway”.</p></article>
          <article class="collab-item"><p class="kicker">West Africa / France</p><h3 class="lemon-title title-md">Salif Keita</h3><p class="copy">Synthesizer on “Da” and string arrangements on the album <em>Talé</em>.</p></article>
          <article class="collab-item"><p class="kicker">France</p><h3 class="lemon-title title-md">Owlle</h3><p class="copy">Piano on “Free” and “Silence” from the album <em>France</em>.</p></article>
          <article class="collab-item"><p class="kicker">France</p><h3 class="lemon-title title-md">Acid Washed</h3><p class="copy">Co-composition and synthesizers on an electronic collaboration released through Record Makers.</p></article>
          <article class="collab-item"><p class="kicker">Contemporary art</p><h3 class="lemon-title title-md">Xavier Veilhan</h3><p class="copy">Installation and performance collaborations, including Versailles, Studio Venezia and stage work.</p></article>
          <article class="collab-item"><p class="kicker">Contemporary art</p><h3 class="lemon-title title-md">Sophie Calle</h3><p class="copy">Invited Chassol to the Venice Biennale in 2007, part of his recurring dialogue with contemporary visual art.</p></article>
          <article class="collab-item"><p class="kicker">US</p><h3 class="lemon-title title-md">Jon Batiste</h3><p class="copy">Listed among Chassol’s international collaborators in his current artist biography.</p></article>
          <article class="collab-item"><p class="kicker">France</p><h3 class="lemon-title title-md">Jocelyn Mienniel</h3><p class="copy">Co-composition and live creation on <em>Dress Code</em>, with Mathieu Edouard, Mike Ladd and Xavier Veilhan.</p></article>
          <article class="collab-item"><p class="kicker">Funny How?</p><h3 class="lemon-title title-md">ALA.NI</h3><p class="copy">Featured on <em>Funny How?</em> and part of the live version of the project.</p></article>`;
        old.replaceWith(grid);
      }
    }
  };

  patchContent();

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

  const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const toggle=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('.mobile-menu');
  const close=document.querySelector('[data-menu-close]');
  if(toggle&&menu){
    const openMenu=()=>menu.classList.add('open');
    const closeMenu=()=>menu.classList.remove('open');
    toggle.addEventListener('click',openMenu);
    if(close)close.addEventListener('click',closeMenu);
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  }
})();