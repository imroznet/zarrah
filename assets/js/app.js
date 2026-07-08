/* ============================================================
   Zarrah Foundation — App JavaScript
   Version: 1.0.0
   Pure Vanilla JS — No frameworks, no dependencies
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Mobile Navigation Toggle
     ---------------------------------------------------------- */
  function initNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('nav--open');
    });

    // Close mobile nav when a link is clicked
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
        toggle.focus();
      }
    });
  }

  /* ----------------------------------------------------------
     Intersection Observer — Reveal Animations
     ---------------------------------------------------------- */
  function initRevealAnimations() {
    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     Active Navigation Highlighting
     ---------------------------------------------------------- */
  function initActiveNav() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ----------------------------------------------------------
     Smooth scroll for internal links
     ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  /* ----------------------------------------------------------
     Lazy loading images (native with fallback)
     ---------------------------------------------------------- */
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) return;

    var images = document.querySelectorAll('img[loading="lazy"]');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.dataset.src || img.src;
          observer.unobserve(img);
        }
      });
    });

    images.forEach(function (img) {
      observer.observe(img);
    });
  }

  /* ----------------------------------------------------------
     Initialize
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initRevealAnimations();
    initActiveNav();
    initSmoothScroll();
    initLazyLoading();
  });
})();
