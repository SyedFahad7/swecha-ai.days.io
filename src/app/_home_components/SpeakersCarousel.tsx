'use client';
import { motion, useAnimationControls } from 'framer-motion';
import SpeakerCard from '@/components/SpeakerCard';
import { speakers } from '@/data/speakers';
import { useRef, useEffect } from 'react';

export default function SpeakersCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start({ x: '-100%' });
  }, [controls]);

  const handleScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({ x: '-100%' });
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex"
      animate={controls}
      transition={{ repeat: Infinity, duration: 100, ease: 'linear' }}
      onWheel={handleScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {[...speakers, ...speakers].map((speaker, index) => (
        <div key={index} className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 px-4">
          <SpeakerCard speaker={speaker} hideDescription={true} />
        </div>
      ))}
    </motion.div>
  );
}
