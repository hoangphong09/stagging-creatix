import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  const handleScroll = useCallback(() => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollPosition;
}

export function useScrollThreshold(threshold: number): boolean {
  const [isAboveThreshold, setIsAboveThreshold] = useState(false);
  const { y } = useScrollPosition();

  useEffect(() => {
    setIsAboveThreshold(y > threshold);
  }, [y, threshold]);

  return isAboveThreshold;
}
