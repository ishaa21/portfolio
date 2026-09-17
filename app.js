// ── MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

function closeMobile() {
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
  }
}

// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Stagger siblings
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, Math.max(0, idx) * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

// Also observe section children for scroll reveal
function observeSections() {
  const targets = document.querySelectorAll(
    '.about-grid > *, .projects-grid > *, .skills-grid > *, .timeline-item, .cert-card, .edu-card, .achievement-card'
  );
  targets.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}
observeSections();

// ── NAV SCROLL EFFECT (CLASS-BASED FOR CLEAN LIGHT THEME) ──
const nav = document.getElementById('nav');
if (nav) {
  const handleNavScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();
}

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--text)';
          link.style.fontWeight = '600';
        } else {
          link.style.color = '';
          link.style.fontWeight = '';
        }
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── CONTACT FORM ──
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      if (note) {
        note.style.color = '#dc2626';
        note.textContent = 'Please fill all required fields.';
      }
      return;
    }

    // mailto fallback — opens email client
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ishazalavadia@gmail.com?subject=${subject}&body=${body}`;

    if (note) {
      note.style.color = 'var(--accent)';
      note.textContent = '✓ Opening your email client to send message...';
      form.reset();
      setTimeout(() => { note.textContent = ''; }, 4500);
    }
  });
}

// ── SMOOTH ANCHOR OFFSET (for fixed nav) ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 75;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
