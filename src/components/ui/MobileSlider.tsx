import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileSliderProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export function MobileSlider({ items, autoPlay = true, interval = 5000 }: MobileSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, autoPlay, interval]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className="relative">
      <div 
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % items.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
        {items.map((_, index) => (
          <div
            key={index}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: index === currentIndex ? '20px' : '8px',
              backgroundColor: index === currentIndex ? '#000' : '#ccc'
            }}
          />
        ))}
      </div>
    </div>
  );
}