// site.js - mobile menu and small helpers for the multi-page site.
(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var scrim = document.querySelector('.nav-scrim');
  var menu = document.getElementById('nav-menu');

  function setOpen(open) {
    body.classList.toggle('nav-open', open);
    if (toggle) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!body.classList.contains('nav-open'));
    });
  }
  if (scrim) scrim.addEventListener('click', function () { setOpen(false); });
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) setOpen(false);
  });

  // Footer year
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Contact form: show a thank-you message after FormSubmit redirects back
  if (/[?&]sent=1/.test(window.location.search)) {
    var note = document.querySelector('[data-form-status]');
    if (note) {
      note.textContent = 'Thanks, your message was sent. I usually reply within 24 hours.';
      note.style.color = 'var(--green)';
    }
  }
})();
