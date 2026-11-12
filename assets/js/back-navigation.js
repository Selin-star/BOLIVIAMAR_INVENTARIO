/* Navegación atrás dentro de BOLIVIAMAR. */
(function () {
  const fallback = location.pathname.endsWith('/informe.html') ? 'index.html#inicio' : '#inicio';
  const current = location.pathname + location.search + location.hash;
  let prior = null;
  try {
    prior = sessionStorage.getItem('boliviamar_previous_route');
    sessionStorage.setItem('boliviamar_previous_route', current);
  } catch (_) {}
  document.querySelectorAll('.boli-back').forEach(btn => {
    btn.addEventListener('click', () => {
      let sameSiteReferrer = false;
      try {
        const ref = new URL(document.referrer);
        sameSiteReferrer = ref.origin === location.origin && /(?:index|informe)\.html$|\/$/.test(ref.pathname);
      } catch (_) {}
      if (history.length > 1 && (sameSiteReferrer || (prior && prior !== current))) {
        history.back();
      } else {
        location.href = fallback;
      }
    });
  });
})();
