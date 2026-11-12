document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.getElementById('report-menu-toggle'),theme=document.getElementById('report-theme-toggle');
 menu?.addEventListener('click',()=>{if(window.innerWidth<=900){document.body.classList.toggle('report-mobile-open')}else{document.body.classList.toggle('report-collapsed')}});
 theme?.addEventListener('click',()=>{document.body.classList.toggle('report-light');theme.textContent=document.body.classList.contains('report-light')?'☀️':'🌙'});
 document.querySelectorAll('.report-link').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('.report-link').forEach(a=>a.classList.remove('active'));link.classList.add('active');document.body.classList.remove('report-mobile-open')}));
});
