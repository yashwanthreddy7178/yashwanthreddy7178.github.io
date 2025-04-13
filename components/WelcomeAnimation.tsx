'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FaDatabase, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';

const techIcons = [
  { icon: FaReact, color: '#61DAFB' },
  { icon: FaJs, color: '#F7DF1E' },
  { icon: FaPython, color: '#3776AB' },
  { icon: FaNodeJs, color: '#339933' },
  { icon: FaDatabase, color: '#4479A1' },
  { icon: SiTypescript, color: '#3178C6' },
  { icon: SiNextdotjs, color: '#000000' },
  { icon: SiTailwindcss, color: '#06B6D4' },
];

const binaryChars = ['0', '1'];
const matrixChars = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F'];

// Predefined positions to avoid random values during SSR
const predefinedPositions = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  x: (i * 2) % 100,
  y: (i * 3) % 100,
  delay: (i * 0.1) % 2,
}));

export default function WelcomeAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Hide all other content while animation is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isVisible]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          {/* Binary Rain */}
          {predefinedPositions.map((pos) => (
            <motion.div
              key={pos.id}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: '100vh', opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: pos.delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute text-green-500 text-sm"
              style={{ left: `${pos.x}%` }}
            >
              {binaryChars[pos.id % binaryChars.length]}
            </motion.div>
          ))}

          {/* Matrix Rain */}
          {predefinedPositions.slice(0, 30).map((pos) => (
            <motion.div
              key={`matrix-${pos.id}`}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: '100vh', opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: pos.delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute text-blue-500 text-sm"
              style={{ left: `${(pos.x + 30) % 100}%` }}
            >
              {matrixChars[pos.id % matrixChars.length]}
            </motion.div>
          ))}

          {/* Circuit Board Lines */}
          {predefinedPositions.slice(0, 20).map((pos) => (
            <motion.div
              key={`circuit-${pos.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                delay: pos.delay,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: '20%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00ff00, transparent)',
                transform: `rotate(${(pos.id * 18) % 360}deg)`,
              }}
            />
          ))}

          {/* Tech Icons Orbit */}
          {techIcons.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: [
                    0,
                    Math.cos((index * Math.PI * 2) / techIcons.length) * 200,
                    Math.cos((index * Math.PI * 2) / techIcons.length) * 400,
                  ],
                  y: [
                    0,
                    Math.sin((index * Math.PI * 2) / techIcons.length) * 200,
                    Math.sin((index * Math.PI * 2) / techIcons.length) * 400,
                  ],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="absolute"
              >
                <Icon size={24} color={tech.color} />
              </motion.div>
            );
          })}

          {/* Cursor Trail */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-blue-500 opacity-50"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />

          {/* Main Text Container */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="text-center relative z-10"
            style={{ pointerEvents: 'none' }}
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              Welcome to my
            </motion.h1>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
            >
              Tech World
            </motion.h2>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 