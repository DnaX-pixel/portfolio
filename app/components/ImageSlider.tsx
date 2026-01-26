"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-play after 5 seconds of inactivity
    setTimeout(() => setIsPaused(false), 5000);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1 || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [images.length, isPaused]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full mt-6 flex justify-center">
      <div
        ref={sliderRef}
        className="relative w-full max-w-sm md:max-w-md aspect-[3/4] bg-navy-light rounded-lg overflow-hidden shadow-xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              className="object-cover object-center"
              quality={85}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrow Buttons - Desktop Only */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark/90 text-teal p-3 rounded-full transition-all z-10 items-center justify-center backdrop-blur-sm border border-teal/20"
              aria-label="Previous image"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-dark/70 hover:bg-dark/90 text-teal p-3 rounded-full transition-all z-10 items-center justify-center backdrop-blur-sm border border-teal/20"
              aria-label="Next image"
            >
              <FaChevronRight size={20} />
            </button>
          </>
        )}

        {/* Image Indicators/Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(index);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-teal"
                  : "w-2 bg-slate/50 hover:bg-slate/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
            ))}
          </div>
        )}
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-dark/70 text-slate text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-teal/20 z-10">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

