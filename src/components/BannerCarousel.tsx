import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { BannerSlide } from '../types';
import { INITIAL_BANNERS } from '../data/patuakhaliData';

interface BannerCarouselProps {
  onOpenCategory: (categoryId: string) => void;
  banners?: BannerSlide[];
  isAdminAuthenticated?: boolean;
  onOpenAdmin?: () => void;
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({
  onOpenCategory,
  banners = INITIAL_BANNERS,
  isAdminAuthenticated = false,
  onOpenAdmin
}) => {
  const activeBanners = banners.filter((b) => b.active !== false);
  const slides = activeBanners.length > 0 ? activeBanners : INITIAL_BANNERS;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  // Keep index within bounds if slides change
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [slides.length, currentSlide]);

  const slide = slides[currentSlide];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/70 mb-4 sm:mb-6 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Container with dynamic background picture */}
      <div className="relative h-[220px] sm:h-[290px] md:h-[350px] lg:h-[400px] w-full overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:p-8 text-white">
        {/* Background Image with smooth fade transition */}
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Gentle bottom gradient for readability while keeping the photo bright & clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/10" />
          </div>
        ))}

        {/* Top Bar: Minimal Badge */}
        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold backdrop-blur-md bg-black/40 text-white/95 border border-white/20 shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{slide.badge}</span>
          </span>

          {isAdminAuthenticated && onOpenAdmin && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenAdmin();
              }}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/50 hover:bg-black/70 backdrop-blur-md text-emerald-300 border border-emerald-500/30 transition"
              title="ব্যানার ছবি এডিট করুন"
            >
              <span>এডমিন এডিট</span>
            </button>
          )}
        </div>

        {/* Center/Bottom Content: Short Title & Subtitle Only */}
        <div className="z-10 mt-auto mb-2 sm:mb-4 max-w-2xl">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-md font-['Hind_Siliguri',sans-serif] leading-tight">
            {slide.title}
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-emerald-200/95 font-medium drop-shadow-sm mt-1 sm:mt-2">
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom Bar: Sleek CTA & Controls */}
        <div className="flex items-center justify-between z-10 pt-1">
          {/* Action CTA Button */}
          <button
            onClick={() => onOpenCategory(slide.targetCategory)}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full text-xs sm:text-sm transition active:scale-95 cursor-pointer shadow-lg hover:shadow-emerald-900/30 border border-emerald-400/30"
          >
            <span>{slide.actionText}</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          {/* Controls: Prev, Next & Dots */}
          <div className="flex items-center gap-2">
            {/* Arrow Navigation */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="w-6 h-6 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition active:scale-90"
                aria-label="আগের ব্যানার"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-6 h-6 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition active:scale-90"
                aria-label="পরের ব্যানার"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1 ml-0.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-4 bg-emerald-400 shadow-xs' : 'w-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`স্লাইড ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
