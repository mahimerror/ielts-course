"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../shared/Container";

interface Category {
  icon: string;
  name: string;
}

const TabSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

  const checkScroll = () => {
    const slider = sliderRef.current;
    if (slider) {
      setCanScrollLeft(slider.scrollLeft > 0);
      setCanScrollRight(
        slider.scrollWidth > slider.scrollLeft + slider.clientWidth
      );
    }
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -500, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 500, behavior: "smooth" });
    setTimeout(checkScroll, 300);
  };

  useEffect(() => {
    checkScroll();
    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("scroll", checkScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkScroll);
      }
    };
  }, []);

  const categories: Category[] = [
    { icon: "🎢", name: "Theme Parks" },
    { icon: "🏛️", name: "Museums" },
    { icon: "🚢", name: "Cruises" },
    { icon: "🏞️", name: "Guided Tours" },
    { icon: "🏯", name: "Landmarks" },
    { icon: "🍽️", name: "Dinner Cruises" },
    { icon: "🎭", name: "Cabarets" },
    { icon: "🚍", name: "Hop On Hop Off" },
    { icon: "🏞️", name: "Theme Parks" },
  ];

  return (
    <Container as="section">
      <div className="relative md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide space-x-4 py-3 border-b border-gray-200"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-2 px-4 border rounded-lg shadow-sm hover:shadow-md whitespace-nowrap"
            >
              <span className="text-2xl mr-2">{category.icon}</span>
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-1.5 rounded-full shadow-lg z-10"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.66364 8.4506L10.4198 14.2048C10.6724 14.4568 11.0816 14.4568 11.3348 14.2048C11.5874 13.9529 11.5874 13.5437 11.3348 13.2917L6.03521 7.99409L11.3341 2.69643C11.5867 2.44449 11.5867 2.03528 11.3341 1.7827C11.0816 1.53077 10.6717 1.53077 10.4191 1.7827L4.663 7.53688C4.41431 7.78621 4.41431 8.20185 4.66364 8.4506Z"
                fill="#1E1D30"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-1.5 rounded-full shadow-lg z-10"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M11.3364 8.4506L5.58022 14.2048C5.32764 14.4568 4.91843 14.4568 4.66522 14.2048C4.41264 13.9529 4.41264 13.5437 4.66522 13.2917L9.96479 7.99409L4.66586 2.69643C4.41328 2.44449 4.41328 2.03528 4.66586 1.7827C4.91843 1.53077 5.32828 1.53077 5.58086 1.7827L11.337 7.53688C11.5857 7.78621 11.5857 8.20185 11.3364 8.4506Z"
                fill="#1E1D30"
              />
            </svg>
          </button>
        )}
      </div>
    </Container>
  );
};

export default TabSlider;
