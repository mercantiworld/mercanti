document.addEventListener('DOMContentLoaded', function() {
  // Navbar toggle functionality
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMenu = document.getElementById('navbarMenu');
  
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth < 992) {
          navbarMenu.classList.remove('show');
        }
      });
    });
  }
  
  // Modal open/close
  const modal = document.getElementById('ctaModal');
  const closeBtn = document.getElementById('closeCta');
  const cancelBtn = document.getElementById('cancelBtn');
  const videoModal = document.getElementById('videoModal');
  const closeVideoBtn = document.getElementById('closeVideo');

  // Navbar modal triggers
  document.getElementById('openCtaNav')?.addEventListener('click', function(e) {
    e.preventDefault();
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => document.getElementById('name').focus(), 50);
    document.body.style.overflow = 'hidden';
    document.querySelector('.contact-section')?.classList.add('modal-open');
  });
  document.getElementById('demoLinkNav')?.addEventListener('click', function(e) {
    e.preventDefault();
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  // Section CTA links (Services & About)
  document.getElementById('openCtaServices')?.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
  });
  document.getElementById('openCtaAbout')?.addEventListener('click', function(e) {
    e.preventDefault();
    openModal();
  });

  function openModal() {
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => document.getElementById('name').focus(), 50);
    document.body.style.overflow = 'hidden';
    document.querySelector('.contact-section')?.classList.add('modal-open');
  }
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.querySelector('.contact-section')?.classList.remove('modal-open');
  }
  function openVideoModal() {
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeVideoModal() {
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  // Video modal events
  if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideoModal);
  if (videoModal) videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideoModal(); });
  // UTM passthrough
  const params = new URLSearchParams(window.location.search);
  ['utm_source','utm_medium','utm_campaign'].forEach(k => {
    const el = document.getElementById(k);
    if (el && params.get(k)) el.value = params.get(k);
  });
  // Formsubmit: let the browser handle the form POST natively (no JS interception)
});
