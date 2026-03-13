'use client'

import { useEffect, useState } from "react";
import { GLASS_CLASSES_BORDER_SOFT } from "@/consts/classes";

interface Props {
  length: number;
  current: number;
  onNext: () => void;
  onPrev: () => void;
  onStartPrevClick?: () => void;
  onEndNextClick?: () => void;
  locked?: boolean;
}

export default function SlidePagination({ length, current, onNext, onPrev, onStartPrevClick, onEndNextClick, locked }: Props) {
  const [isLocalLocked, setIsLocalLocked] = useState(false);

  const [hidePrevBtn, setHidePrevBtn] = useState(false);
  const [hideNextBtn, setHideNextBtn] = useState(false);

  useEffect(() => {
    setHidePrevBtn(current <= 1 && typeof onStartPrevClick === 'undefined');
    setHideNextBtn(current >= length && typeof onEndNextClick === 'undefined');
  }, [current, length]);

  const handlePrev = () => {
    if (isLocalLocked || locked) return;
    if (current <= 1 && typeof onStartPrevClick === 'function') {
      onStartPrevClick();
      return;
    }
    setIsLocalLocked(true);
    onPrev();
    setTimeout(() => setIsLocalLocked(false), 100);
  };

  const handleNext = () => {
    if (isLocalLocked || locked) return;
    if (current >= length && typeof onEndNextClick === 'function') {
      onEndNextClick();
      return;
    }
    setIsLocalLocked(true);
    onNext();
    setTimeout(() => setIsLocalLocked(false), 100);
  };

  return (
    <div className="flex items-center gap-4 h-12">
        <button
          onClick={handlePrev}
          className={`flex items-center justify-center size-12 transition-all duration-500 rounded-full cursor-pointer ${GLASS_CLASSES_BORDER_SOFT} ${hidePrevBtn ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className={`flex h-12 items-center gap-4 px-5 backdrop-blur-lg transition-all duration-500 rounded-full ${GLASS_CLASSES_BORDER_SOFT}`}>
          {Array.from({ length }, (_, i) => (
            <button key={i} className={`size-3 rounded-full bg-white/20 ${current === i + 1 ? 'bg-white/100' : ''}`}></button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className={`flex items-center justify-center size-12 transition-all duration-500 rounded-full cursor-pointer ${GLASS_CLASSES_BORDER_SOFT} ${hideNextBtn ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="rotate-180">
            <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
    </div>
  )
}
