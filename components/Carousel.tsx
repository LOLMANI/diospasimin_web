'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  src: string;
  alt: string;
  bgColor: string;
}

const slides: CarouselSlide[] = [
  { src: '/carousel/Mesa%20de%20trabajo%201.png', alt: 'Diospa simin - Imagen 1', bgColor: 'bg-orange-950' },
  { src: '/carousel/Mesa%20de%20trabajo%202.png', alt: 'Diospa simin - Imagen 2', bgColor: 'bg-red-950' },
  { src: '/carousel/Mesa%20de%20trabajo%203.png', alt: 'Diospa simin - Imagen 3', bgColor: 'bg-amber-900' },
  { src: '/carousel/Mesa%20de%20trabajo%204.png', alt: 'Diospa simin - Imagen 4', bgColor: 'bg-[#1a1a1a]' },
  { src: '/carousel/iphone.png', alt: 'Diospa simin - Móvil', bgColor: 'bg-[#121212]' },
  { src: '/carousel/Mesa%20de%20trabajo%205.png', alt: 'Diospa simin - Imagen 5', bgColor: 'bg-orange-900' },
  { src: '/carousel/Mesa%20de%20trabajo%206.png', alt: 'Diospa simin - Imagen 6', bgColor: 'bg-red-900' },
  { src: '/carousel/Mesa%20de%20trabajo%208.png', alt: 'Diospa simin - Imagen 8', bgColor: 'bg-amber-950' },
  { src: '/carousel/Laptop.png', alt: 'Diospa simin - Laptop', bgColor: 'bg-[#121212]' }
];

interface CarouselProps {
  variant?: 'blur' | 'solid' | 'cover' | 'dynamic';
}

export default function Carousel({ variant = 'blur' }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    // Limpieza agresiva para evitar "intervalos fantasma" del Fast Refresh de Next.js
    if (typeof window !== 'undefined') {
      const w = window as any;
      if (w.carouselGhostTimer) {
        clearInterval(w.carouselGhostTimer);
        clearTimeout(w.carouselGhostTimer);
      }

      const timer = setTimeout(() => {
        nextSlide();
      }, 5000);

      w.carouselGhostTimer = timer;

      return () => {
        clearTimeout(timer);
      };
    }
  }, [nextSlide, currentIndex]);

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setTouchEnd(null);
    if ('targetTouches' in e) {
      setTouchStart(e.targetTouches[0].clientX);
    } else {
      setTouchStart((e as React.MouseEvent).clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if ('targetTouches' in e) {
      setTouchEnd(e.targetTouches[0].clientX);
    } else if (touchStart !== null) {
      setTouchEnd((e as React.MouseEvent).clientX);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden group cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onTouchStart}
      onMouseMove={onTouchMove}
      onMouseUp={onTouchEnd}
      onMouseLeave={() => {
        if (touchStart !== null) onTouchEnd();
      }}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full h-full flex-shrink-0 relative overflow-hidden transition-colors duration-1000 ${variant === 'dynamic' ? slide.bgColor : 'bg-[#151515]'
              }`}
          >
            {/* Blurred Background Layer */}
            {variant === 'blur' && (
              <Image
                src={slide.src}
                alt={`${slide.alt} fondo`}
                fill
                className="object-cover blur-xl opacity-60 scale-110 pointer-events-none select-none"
                priority={index === 0}
                draggable={false}
              />
            )}

            {/* Main Contained Image */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className={`${variant === 'cover' ? 'object-cover' : 'object-contain'} relative z-10 pointer-events-none select-none`}
              priority={index === 0}
              draggable={false}
            />
          </div>
        ))}
      </div>



      {/* Navigation Controls */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 z-30"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100 z-30"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
            className={`transition-all duration-300 rounded-full shadow-sm ${index === currentIndex
              ? 'w-8 h-2 bg-dios-orange'
              : 'w-2 h-2 bg-white/60 hover:bg-white'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
