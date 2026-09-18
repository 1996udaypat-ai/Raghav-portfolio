import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Returns true if user prefers reduced motion.
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Custom hook for GSAP animations with automatic cleanup and reduced motion support.
 *
 * @param {Function} animationFn - Receives { el, gsap, ScrollTrigger, prefersReducedMotion }
 * @param {Array} deps - Dependency array
 */
export function useGsap(animationFn, deps = []) {
  const elRef = useRef(null);

  useEffect(() => {
    if (!elRef.current) return;

    const ctx = gsap.context(() => {
      animationFn({
        el: elRef.current,
        gsap,
        ScrollTrigger,
        prefersReducedMotion: prefersReducedMotion(),
      });
    }, elRef.current);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return elRef;
}

/**
 * Simple scroll-triggered reveal animation.
 * Returns a ref to attach to the container element.
 */
export function useScrollReveal(options = {}) {
  const {
    y = 40,
    opacity = 0,
    duration = 0.9,
    delay = 0,
    stagger = 0.1,
    ease = 'power3.out',
    start = 'top 85%',
    childSelector = null,
  } = options;

  return useGsap(({ el, gsap, ScrollTrigger, prefersReducedMotion: reduced }) => {
    if (reduced) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    gsap.from(targets, {
      y,
      opacity,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });
  });
}

export { gsap, ScrollTrigger };
