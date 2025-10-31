'use client';
import { motion, useAnimation } from 'framer-motion';
import { FlaskConical, Microscope, Users, Trophy, BrainCircuit, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const elements = [
  { content: 'GYNT', type: 'text' }, 
  { content: <FlaskConical />, type: 'icon' },
  { content: '2024', type: 'text' }, 
  { content: <Microscope />, type: 'icon' },
  { content: '6×1', type: 'text' }, 
  { content: <Users />, type: 'icon' },
  { content: '500+', type: 'text' }, 
  { content: <Trophy />, type: 'icon' },
  { content: 'Research', type: 'text' }, 
  { content: <BrainCircuit />, type: 'icon' },
  { content: 'Debate', type: 'text' },
  { content: <Zap />, type: 'icon' },
];

// This component manages the animation for a single element.
const FloatingElement = ({ item }: { item: typeof elements[0] }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animateElement = async () => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;

            // This loop runs forever.
            while (true) {
                // 1. Pick a random starting edge (top, right, bottom, left)
                const startSide = Math.floor(Math.random() * 4);
                let startX, startY;

                if (startSide === 0) { // Top edge
                    startX = Math.random() * vw;
                    startY = -100;
                } else if (startSide === 1) { // Right edge
                    startX = vw + 100;
                    startY = Math.random() * vh;
                } else if (startSide === 2) { // Bottom edge
                    startX = Math.random() * vw;
                    startY = vh + 100;
                } else { // Left edge
                    startX = -100;
                    startY = Math.random() * vh;
                }

                // Instantly move the element to its new starting position off-screen
                controls.set({ x: startX, y: startY });

                // 2. Animate to the opposite side of the screen to exit
                let endX = vw - startX;
                let endY = vh - startY;
                
                // Add some randomness to the exit point
                endX += (Math.random() - 0.5) * (vw / 2);
                endY += (Math.random() - 0.5) * (vh / 2);

                const duration = Math.random() * 10 + 15; // Each journey has a random speed

                // 3. Start the animation
                await controls.start({
                    x: endX,
                    y: endY,
                    transition: { duration, ease: "linear" }
                });
                // The loop will now restart, generating a new random path.
            }
        };

        animateElement();
    }, [controls]);

    return (
        <motion.div
            className="absolute flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm"
            animate={controls}
        >
            <span className="text-white/40 font-mono text-lg">{item.content}</span>
        </motion.div>
    );
};

// The main component now simply renders a list of these animated elements.
export const AnimatedHeroBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {elements.map((item, index) => (
        <FloatingElement key={index} item={item} />
      ))}
    </div>
  );
};


