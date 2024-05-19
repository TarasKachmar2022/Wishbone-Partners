(() => {
  const mobileMenu = document.querySelector('[data-menu]');
  const openMenuBtn = document.querySelector('[data-menu-btn]');
  const body = document.querySelector('[data-page]');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.classList.toggle('active');

    body.classList.toggle('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('active');
    body.classList.remove('no-scroll');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
