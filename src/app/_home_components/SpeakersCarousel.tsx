'use client';
import { motion, useAnimationControls } from 'framer-motion';
import SpeakerCard from '@/components/SpeakerCard';
import { speakers } from '@/data/speakers';
import { useRef, useState, useLayoutEffect, useCallback, useMemo, useEffect } from 'react';

export default function SpeakersCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);
  const [visibleSpeakers, setVisibleSpeakers] = useState<number[]>([]);

  const displayedSpeakers = useMemo(() => {
    const repeatedSpeakers = Array(displayCount).fill(speakers).flat();
    return repeatedSpeakers.slice(0, Math.max(speakers.length * 5, repeatedSpeakers.length));
  }, [displayCount]);

  const appendSpeakers = useCallback(() => {
    setDisplayCount(prevCount => prevCount + 1);
  }, []);

  const updateVisibleSpeakers = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const { scrollLeft, clientWidth } = container;
    const startIndex = Math.floor(scrollLeft / (clientWidth / 4));
    const endIndex = Math.ceil((scrollLeft + clientWidth) / (clientWidth / 4));
    setVisibleSpeakers(Array.from({ length: endIndex - startIndex }, (_, i) => startIndex + i));
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollWidth - (scrollLeft + clientWidth) < clientWidth * 3) {
        appendSpeakers();
      }
      updateVisibleSpeakers();
    };

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          appendSpeakers();
        }
      },
      { root: container, threshold: 0.1 }
    );

    const lastElement = container.lastElementChild;
    if (lastElement) {
      observer.observe(lastElement);
    }

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [appendSpeakers, updateVisibleSpeakers]);

  useEffect(() => {
    updateVisibleSpeakers();
  }, [updateVisibleSpeakers]);

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
        updateVisibleSpeakers();
      }
    }, 50);

    return () => clearInterval(autoScroll);
  }, [updateVisibleSpeakers]);

  const handleScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
      updateVisibleSpeakers();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current!.scrollLeft = scrollLeft - walk;
    updateVisibleSpeakers();
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      onWheel={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', userSelect: 'none' }}
    >
      {displayedSpeakers.map((speaker, index) => (
        <motion.div
          key={`${speaker.name}-${index}`}
          className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 px-4 max-h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: visibleSpeakers.includes(index) ? 1 : 0,
            y: visibleSpeakers.includes(index) ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-full">
            {visibleSpeakers.includes(index) && (
              <SpeakerCard speaker={speaker} hideDescription={true} />
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
