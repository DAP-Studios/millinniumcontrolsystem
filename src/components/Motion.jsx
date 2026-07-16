import { useEffect, useRef, useState } from 'react';

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(() => (
    prefersReducedMotion() || (typeof window !== 'undefined' && !('IntersectionObserver' in window))
  ));

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -48px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`rb-reveal rb-reveal--${direction} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function AnimatedNumber({ value, suffix = '', duration = 1100 }) {
  const valueRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(() => (prefersReducedMotion() ? value : 0));

  useEffect(() => {
    const element = valueRef.current;
    if (!element) return undefined;

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    let frameId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [duration, value]);

  return (
    <span ref={valueRef}>
      {displayValue}
      {suffix}
    </span>
  );
}
