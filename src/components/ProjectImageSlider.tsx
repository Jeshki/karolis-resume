'use client';

import { useRef, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';

export type ProjectSlide = {
  src: string;
  alt: string;
};

type ProjectImageSliderProps = {
  slides: ProjectSlide[];
  className?: string;
  imageClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  sizes?: string;
  onIndexChange?: (index: number) => void;
  persistentArrows?: boolean;
};

export function ProjectImageSlider({
  slides,
  className = 'relative h-48',
  imageClassName = 'object-cover',
  showDots = true,
  showArrows = true,
  sizes = '(max-width: 768px) 100vw, 33vw',
  onIndexChange,
  persistentArrows = false,
}: ProjectImageSliderProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (!slides.length) return null;

  const setSlideIndex = (next: number) => {
    setIndex(next);
    onIndexChange?.(next);
  };

  const go = (direction: -1 | 1) => {
    setSlideIndex((index + direction + slides.length) % slides.length);
  };

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;
    if (start == null || end == null) return;
    const delta = end - start;
    if (Math.abs(delta) < 40) return;
    go(delta > 0 ? -1 : 1);
  };

  return (
    <div
      className={`${className} overflow-hidden group/slider`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          quality={90}
          sizes={sizes}
          className={`${imageClassName} transition-opacity duration-300 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {showArrows && slides.length > 1 ? (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center transition ${
              persistentArrows ? 'opacity-90' : 'opacity-0 group-hover/slider:opacity-100'
            }`}
            aria-label="Previous slide"
          >
            <IconChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center transition ${
              persistentArrows ? 'opacity-90' : 'opacity-0 group-hover/slider:opacity-100'
            }`}
            aria-label="Next slide"
          >
            <IconChevronRight size={18} />
          </button>
        </>
      ) : null}

      {showDots && slides.length > 1 ? (
        <div className="absolute bottom-2 left-0 right-0 z-10 flex justify-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setSlideIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
