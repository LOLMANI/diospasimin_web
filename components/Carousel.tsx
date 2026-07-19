'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselSlide {
  src: string;
  alt: string;
}

const slides: CarouselSlide[] = [
  { src: '/carousel/img1.jpg', alt: 'Amanecer en las montañas - Diospasimin' },
  { src: '/carousel/img2.jpg', alt: 'La Palabra de Dios iluminada - Diospasimin' },
  { src: '/carousel/img3.jpg', alt: 'Cosecha bajo el atardecer - Diospasimin' }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden group">
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image 
              src={slide.src} 
              alt={slide.alt} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-dios-dark/50 bg-gradient-to-t from-dios-dark/80 via-transparent to-dios-dark/40" />
          </div>
        ))}
      </div>

      {/* Floating Identity Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <p className="text-xs md:text-sm tracking-[0.3em] font-bold text-dios-gold mb-4 uppercase drop-shadow-lg">
          Iñiypa Yachay Wasin
        </p>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-widest text-white mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
          DIOSPASIMIN
        </h1>
        <p className="text-base md:text-xl italic font-light text-white/90 max-w-2xl drop-shadow-md">
          &quot;Jesuspa Dios kasqanmanta hinaspa rurayninkunamanta yachanapaq&quot;
        </p>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full shadow-sm ${
              index === currentIndex 
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
