import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.gs-reveal');
  reveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Left slide reveals
  const leftReveals = document.querySelectorAll('.gs-reveal-left');
  leftReveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Right slide reveals
  const rightReveals = document.querySelectorAll('.gs-reveal-right');
  rightReveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Scale reveals
  const scaleReveals = document.querySelectorAll('.gs-reveal-scale');
  scaleReveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // Stagger children animations
  const staggerGroups = document.querySelectorAll('.gs-stagger');
  staggerGroups.forEach((group) => {
    const children = group.children;
    gsap.fromTo(
      children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // Parallax effect for elements with .gs-parallax
  const parallaxElements = document.querySelectorAll('.gs-parallax');
  parallaxElements.forEach((el) => {
    gsap.to(el, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  // Counter animation for stats
  const counters = document.querySelectorAll('.gs-counter');
  counters.forEach((el) => {
    const target = parseInt(el.getAttribute('data-target') || '0', 10);
    gsap.fromTo(
      el,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    );
  });

  // Hero text reveal
  const heroText = document.querySelector('.hero-text-reveal');
  if (heroText) {
    const lines = heroText.querySelectorAll('.hero-line');
    gsap.fromTo(
      lines,
      { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0 0 0)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3,
      }
    );
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        if (self.direction === 1) {
          navbar.classList.add('navbar-scrolled');
        }
        if (self.scroll() < 80) {
          navbar.classList.remove('navbar-scrolled');
        }
      },
    });
  }
}
