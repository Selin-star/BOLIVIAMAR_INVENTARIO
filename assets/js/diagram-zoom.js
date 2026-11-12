
(function(){
 'use strict';
 let scale=1,baseWidth=900,lastFocus=null,originalSvg=null,placeholder=null;
 const modal=document.getElementById('diagram-zoom-modal');
 const viewport=document.getElementById('diagram-zoom-viewport');
 const content=document.getElementById('diagram-zoom-content');
 const title=document.getElementById('diagram-zoom-title');
 const level=document.getElementById('diagram-zoom-level');
 const closeButton=document.getElementById('diagram-zoom-close');
 if(!modal)return;
 function update(){
  const svg=content.querySelector('svg');
  if(svg){svg.style.width=Math.round(baseWidth*scale)+'px';svg.style.height='auto';}
  level.textContent=Math.round(scale*100)+'%';
 }
 function setScale(next){scale=Math.max(.25,Math.min(4,next));update();}
 function close(){modal.hidden=true;document.body.classList.remove('diagram-zoom-open');if(originalSvg&&placeholder){originalSvg.style.width='';originalSvg.style.height='';placeholder.replaceWith(originalSvg);}content.replaceChildren();originalSvg=null;placeholder=null;lastFocus?.focus?.();}
 window.zoomDiagram=function(id,label){
  const container=document.getElementById(id);
  if(!container){alert('No se encontró el diagrama solicitado.');return;}
  const svg=container.querySelector('svg');
  if(!svg){alert('El diagrama todavía no se ha cargado. Comprueba tu conexión a internet y espera unos segundos.');return;}
  lastFocus=document.activeElement;
  // Move the actual Mermaid SVG instead of cloning it. Cloning and removing IDs
  // breaks marker-end URL references and produces giant black arrowheads.
  // Keeping the original also preserves its internal styles, defs and geometry.
  placeholder=document.createComment('Mermaid SVG original position');
  svg.replaceWith(placeholder);
  originalSvg=svg;
  const vb=svg.viewBox && svg.viewBox.baseVal;
  baseWidth=(vb && vb.width)||parseFloat(svg.getAttribute('width'))||900;
  baseWidth=Math.max(250,baseWidth);
  content.replaceChildren(svg);
  svg.setAttribute('aria-label',label||'Diagrama ampliado');
  title.textContent=label||'Ampliar diagrama';
  modal.hidden=false;document.body.classList.add('diagram-zoom-open');
  scale=Math.min(1,Math.max(.25,(viewport.clientWidth-70)/baseWidth));
  update();viewport.scrollTo(0,0);closeButton.focus();
 };
 document.getElementById('diagram-zoom-in').addEventListener('click',()=>setScale(scale*1.25));
 document.getElementById('diagram-zoom-out').addEventListener('click',()=>setScale(scale/1.25));
 document.getElementById('diagram-zoom-reset').addEventListener('click',()=>setScale(1));
 closeButton.addEventListener('click',close);
 modal.addEventListener('click',e=>{if(e.target===modal)close();});
 document.addEventListener('keydown',e=>{if(!modal.hidden&&e.key==='Escape')close();});
 viewport.addEventListener('wheel',e=>{if(!modal.hidden&&e.ctrlKey){e.preventDefault();setScale(scale*(e.deltaY<0?1.1:1/1.1));}},{passive:false});
})();
