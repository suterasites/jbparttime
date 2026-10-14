/* JB Parttime - script.js */
(function () {
  document.documentElement.classList.remove('no-js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* header: blur past 20px, hide on scroll down, return on scroll up */
  var header = document.getElementById('site-header');
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 20);
    if (!document.body.classList.contains('nav-open')) {
      if (y > 400 && y - lastY > 6) header.classList.add('is-hidden');
      else if (lastY - y > 6 || y < 400) header.classList.remove('is-hidden');
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* mobile nav */
  var toggle = document.getElementById('nav-toggle');
  var panel = document.getElementById('mobile-nav');
  function setNav(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.hidden = !open;
    document.body.classList.toggle('nav-open', open);
  }
  toggle.addEventListener('click', function () { setNav(panel.hidden); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { setNav(false); toggle.focus(); } });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', function (m) { if (m.matches) setNav(false); });

  /* service "quote this" links preselect the form */
  var select = document.getElementById('f-service');
  document.querySelectorAll('[data-service]').forEach(function (a) {
    a.addEventListener('click', function () { select.value = a.getAttribute('data-service'); });
  });

  /* reveal on scroll, staggered within a parent */
  var items = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var siblings = Array.prototype.filter.call(el.parentNode.children, function (c) { return c.classList.contains('reveal'); });
        el.style.transitionDelay = (siblings.indexOf(el) * 0.08) + 's';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* count-up stats */
  var nums = document.querySelectorAll('[data-count]');
  function countUp(el) {
    var to = +el.getAttribute('data-count');
    var from = +(el.getAttribute('data-from') || 0);
    var start = null, dur = 1600;
    function step(t) {
      if (!start) start = t;
      var p = Math.min((t - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if (!reduced && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { countUp(entry.target); so.unobserve(entry.target); }
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { so.observe(el); });
  }

  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
