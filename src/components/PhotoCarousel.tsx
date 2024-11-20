import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    caption: 'Tournament Action Shot'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583318-19ff99197f73?auto=format&fit=crop&q=80&w=800',
    caption: 'Practice Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1608215707625-3888c9fd9f23?auto=format&fit=crop&q=80&w=800',
    caption: 'Medal Ceremony'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583629-faa32b4ac56e?auto=format&fit=crop&q=80&w=800',
    caption: 'Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=800',
    caption: 'Championship Match'
  },
  {
    url: 'https://images.unsplash.com/photo-1626224583318-19ff99197f73?auto=format&fit=crop&q=80&w=800',
    caption: 'Team Practice'
  }
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Photo Gallery</h2>
      
      <div className="relative overflow-hidden rounded-xl aspect-[16/9] bg-gray-100">
        {/* Main Image */}
        <div 
          className={`relative w-full h-full transition-transform duration-500 ease-out ${
            isTransitioning ? 'opacity-90' : ''
          }`}
        >
          <img
            src={photos[currentIndex].url}
            alt={photos[currentIndex].caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <p className="text-white p-6 text-lg font-medium">{photos[currentIndex].caption}</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-2">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Preview */}
      <div className="mt-4 grid grid-cols-6 gap-2 overflow-x-auto pb-2">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}