/**
 * =========================================================================
 * MAIN JAVASCRIPT CONTROLLER
 * =========================================================================
 * Handles UI interactions, data binding from portfolio-data.js,
 * navigation scroll spy, mobile drawer, accessible gallery lightbox,
 * contact form handling with mailto dispatch, and toast notifications.
 */

(function () {
  'use strict';

  // -----------------------------------------------------------------------
  // 1. DATA BINDING & DOM INITIALIZATION
  // -----------------------------------------------------------------------
  function initDataBinding() {
    const data = window.PORTFOLIO_DATA;
    if (!data) return;

    // Update Page Title if placeholder or custom
    if (data.student && data.student.fullName) {
      const displayTitle = `${data.student.fullName} | Science Undergraduate & Aspiring Pharmacist`;
      document.title = displayTitle;

      // Update meta tags
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', `Explore the academic background, laboratory learning, scientific interests, and pharmacy career goals of ${data.student.fullName}, science undergraduate at the University of Sri Jayewardenepura, Sri Lanka.`);
      }
    }

    // Bind all elements with data-bind
    const bindElements = document.querySelectorAll('[data-bind]');
    bindElements.forEach(el => {
      const path = el.getAttribute('data-bind');
      const val = getNestedValue(data, path);
      if (val !== undefined && val !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.value = val;
        } else if (el.hasAttribute('href')) {
          el.setAttribute('href', val);
        } else if (el.tagName === 'IMG') {
          el.setAttribute('src', val);
        } else {
          el.textContent = val;
        }
      }
    });

    // Update dynamic year
    const yearElements = document.querySelectorAll('.current-year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
      el.textContent = currentYear;
    });

    // Render Gallery items if enabled
    renderGallery(data);
  }

  function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  }

  // -----------------------------------------------------------------------
  // 2. STICKY NAVBAR & SCROLL SPY
  // -----------------------------------------------------------------------
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Header scroll background
    function handleScroll() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Scroll Spy using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => observer.observe(sec));

    // Smooth scroll with offset for sticky header
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            // Close mobile menu if open
            closeMobileMenu();

            const headerOffset = header.offsetHeight + 16;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Set focus for accessibility
            targetSection.setAttribute('tabindex', '-1');
            targetSection.focus({ preventScroll: true });
          }
        }
      });
    });

    // Mobile Toggle
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      // Close on backdrop or outside click
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') &&
            !navMenu.contains(e.target) &&
            !mobileToggle.contains(e.target)) {
          closeMobileMenu();
        }
      });

      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
          closeMobileMenu();
          mobileToggle.focus();
        }
      });
    }

    function openMobileMenu() {
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.classList.add('is-active');
      navMenu.classList.add('open');
      document.body.classList.add('menu-open');
    }

    function closeMobileMenu() {
      if (!mobileToggle || !navMenu) return;
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.classList.remove('is-active');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    }
  }

  // -----------------------------------------------------------------------
  // 3. GALLERY RENDERING & LIGHTBOX
  // -----------------------------------------------------------------------
  function renderGallery(data) {
    const galleryGrid = document.getElementById('gallery-grid');
    if (!galleryGrid) return;

    if (!data.gallery || !data.gallery.enabled || !data.gallery.items) {
      const gallerySection = document.getElementById('gallery');
      if (gallerySection) gallerySection.style.display = 'none';
      return;
    }

    galleryGrid.innerHTML = '';

    data.gallery.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'gallery-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View image: ${item.title}`);

      card.innerHTML = `
        <div class="gallery-image-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy" class="gallery-img">
          <div class="gallery-overlay">
            <span class="gallery-category-pill">${item.category}</span>
            <span class="gallery-expand-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </span>
          </div>
        </div>
        <div class="gallery-info">
          <h4 class="gallery-title">${item.title}</h4>
          <p class="gallery-caption">${item.caption}</p>
        </div>
      `;

      // Open in lightbox on click or Enter
      const openModal = () => openLightbox(item);
      card.addEventListener('click', openModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal();
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  function openLightbox(item) {
    let modal = document.getElementById('lightbox-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'lightbox-modal';
      modal.className = 'lightbox-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Image preview');

      modal.innerHTML = `
        <div class="lightbox-backdrop"></div>
        <div class="lightbox-dialog">
          <button type="button" class="lightbox-close" aria-label="Close modal">&times;</button>
          <div class="lightbox-body">
            <img class="lightbox-img" src="" alt="">
            <div class="lightbox-details">
              <span class="lightbox-cat"></span>
              <h3 class="lightbox-title"></h3>
              <p class="lightbox-desc"></p>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      // Event listeners for closing
      modal.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
      modal.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
      modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
      });
    }

    const img = modal.querySelector('.lightbox-img');
    const cat = modal.querySelector('.lightbox-cat');
    const title = modal.querySelector('.lightbox-title');
    const desc = modal.querySelector('.lightbox-desc');

    img.src = item.image;
    img.alt = item.title;
    cat.textContent = item.category;
    title.textContent = item.title;
    desc.textContent = item.caption;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // -----------------------------------------------------------------------
  // 4. CONTACT FORM & MAILTO DISPATCH
  // -----------------------------------------------------------------------
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const feedbackBox = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('sender-name');
      const emailInput = document.getElementById('sender-email');
      const subjectInput = document.getElementById('sender-subject');
      const messageInput = document.getElementById('sender-message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : 'Inquiry regarding Scientific / Internship Opportunity';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showFormFeedback('Please fill out all required fields (Name, Email, and Message).', 'error');
        return;
      }

      // Basic email syntax check
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showFormFeedback('Please enter a valid email address.', 'error');
        return;
      }

      // Construct mailto link
      const studentEmail = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.student && window.PORTFOLIO_DATA.student.email && !window.PORTFOLIO_DATA.student.email.includes('['))
        ? window.PORTFOLIO_DATA.student.email
        : 'example@student.sjp.ac.lk';

      const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
      const mailtoBody = encodeURIComponent(`Hello,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n--\nSent via Portfolio Contact Form`);
      const mailtoUrl = `mailto:${studentEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

      // Show friendly confirmation
      showFormFeedback(`
        <strong>Thank you, ${name}!</strong><br>
        Your message has been validated. As this is a static academic website, click below to open your preferred email client and dispatch your message directly:
        <div style="margin-top: 12px;">
          <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="display:inline-flex; align-items:center; gap:8px;">
            <span>Send Email via Mail Client</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      `, 'success');

      // Clear input fields
      form.reset();
    });

    function showFormFeedback(msg, type) {
      if (!feedbackBox) return;
      feedbackBox.className = `form-feedback ${type}`;
      feedbackBox.innerHTML = msg;
      feedbackBox.style.display = 'block';
      feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // -----------------------------------------------------------------------
  // 5. COPY TO CLIPBOARD HELPER
  // -----------------------------------------------------------------------
  function initClipboardButtons() {
    const copyButtons = document.querySelectorAll('.btn-copy-info');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          // Fallback prompt
          window.prompt('Copy to clipboard: Ctrl+C, Enter', textToCopy);
        });
      });
    });
  }

  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'site-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // -----------------------------------------------------------------------
  // 6. SCROLL REVEAL (SUBTLE ENTRANCE)
  // -----------------------------------------------------------------------
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // -----------------------------------------------------------------------
  // RUN ON DOM READY
  // -----------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initDataBinding();
    initNavigation();
    initContactForm();
    initClipboardButtons();
    initScrollReveal();
  });

})();
