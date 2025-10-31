'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroGlow = () => {
  const [isMounted, setIsMounted] = useState(false);

  const opacity = useMotionValue(0);
  const size = useMotionValue(0);

  const backgroundImage = useTransform(
    [opacity, size],
    ([latestOpacity, latestSize]: [number, number]) => {
      // Using primary color from theme - adjusting for dark mode primary
      // Primary in dark mode is typically a lighter color, using hsl or oklch equivalent
      return `radial-gradient(ellipse ${latestSize}% 60% at 50% -10%, rgba(147, 197, 253, ${latestOpacity * 0.6}), transparent 80%)`;
    }
  );

  useEffect(() => {
    setIsMounted(true);
    
    // Animate to the final state
    animate(opacity, 0.2, {
      duration: 1.5, 
      ease: [0.2, 0.8, 0.2, 1] 
    });
    animate(size, 100, {
      duration: 1.5, 
      ease: [0.2, 0.8, 0.2, 1] 
    });
  }, [opacity, size]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="absolute inset-0 -z-20"
      style={{
        backgroundImage,
      }}
    />
  );
};

