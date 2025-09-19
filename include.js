(function () {
  async function inject(selector) {
    const nodes = document.querySelectorAll(selector);
    for (const el of nodes) {
      const url = el.getAttribute('data-include');
      if (!url) continue;
      try {
        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        const html = await res.text();
        el.outerHTML = html; // replace placeholder with fetched HTML
      } catch (err) {
        console.error('[include] failed', url, err);
        el.innerHTML = '<!-- include failed: ' + url + ' -->';
      }
    }
  }
  document.addEventListener('DOMContentLoaded', () => inject('[data-include]'));
})();
