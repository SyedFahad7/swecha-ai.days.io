'use client';
import { motion, useAnimationControls } from 'framer-motion';
import SpeakerCard from '@/components/SpeakerCard';
import { speakers } from '@/data/speakers';
import { useRef, useState, useLayoutEffect, useCallback, useMemo } from 'react';

export default function SpeakersCarousel() {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [displayCount, setDisplayCount] = useState(3);

  const displayedSpeakers = useMemo(() => {
    const repeatedSpeakers = Array(displayCount).fill(speakers).flat();
    return repeatedSpeakers.slice(0, Math.max(speakers.length * 5, repeatedSpeakers.length));
  }, [displayCount]);

  const appendSpeakers = useCallback(() => {
    setDisplayCount(prevCount => prevCount + 1);
  }, []);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollWidth - (scrollLeft + clientWidth) < clientWidth * 3) {
        appendSpeakers();
      }
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
  }, [appendSpeakers]);

  useLayoutEffect(() => {
    const autoScroll = setInterval(() => {
      if (containerRef.current && !isDragging) {
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
  }, [isDragging]);

  const handleScroll = (e: React.WheelEvent) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].pageX : e.pageX);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide cursor-grab active:cursor-grabbing"
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      onWheel={handleScroll}
      onMouseDown={handleDragStart}
      onMouseLeave={handleDragEnd}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDragMove}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onTouchMove={handleDragMove}
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', userSelect: 'none' }}
    >
      {displayedSpeakers.map((speaker, index) => (
        <motion.div
          key={`${speaker.name}-${index}`}
          className="w-full sm:w-1/3 lg:w-1/4 flex-shrink-0 px-4"
          style={{ touchAction: 'pan-y' }}
        >
          <SpeakerCard speaker={speaker} hideDescription={true} />
        </motion.div>
      ))}
    </motion.div>
  );
}
