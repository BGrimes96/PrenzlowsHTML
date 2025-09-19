<!-- include.js -->
<script>
(function () {
  async function inject(selector) {
    const nodes = document.querySelectorAll(selector);
    for (const el of nodes) {
      const url = el.getAttribute('data-include');
      if (!url) continue;
      const res = await fetch(url, { cache: 'no-store' });
      el.outerHTML = await res.text();
    }
  }
  document.addEventListener('DOMContentLoaded', () => inject('[data-include]'));
})();
</script>
