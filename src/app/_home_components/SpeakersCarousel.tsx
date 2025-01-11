'use client';
import { motion, useAnimationControls } from 'framer-motion';
import SpeakerCard from '@/components/SpeakerCard';
import { speakers } from '@/data/speakers';
import { useRef, useState, useLayoutEffect } from 'react';

export default function SpeakersCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useLayoutEffect(() => {
    const autoScroll = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1;
        if (
          containerRef.current.scrollLeft >=
          containerRef.current.scrollWidth - containerRef.current.clientWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }
    }, 50);

    return () => clearInterval(autoScroll);
  }, []);

  const handleScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex overflow-x-scroll scrollbar-hide"
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      onWheel={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {[...speakers, ...speakers].map((speaker, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <SpeakerCard speaker={speaker} hideDescription={true} />
        </motion.div>
      ))}
    </motion.div>
  );
}
