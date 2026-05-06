// Year injection
document.getElementById('year').textContent = new Date().getFullYear();



// Optional: close mobile collapse when clicking a mobile nav link (Bootstrap collapse instance)
document.querySelectorAll('#mobile-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapseEl = document.getElementById('mobile-nav');
    if (collapseEl && bootstrap) {
      const bs = bootstrap.Collapse.getInstance(collapseEl) || new bootstrap.Collapse(collapseEl, {toggle:false});
      bs.hide();
    }
  });
});
