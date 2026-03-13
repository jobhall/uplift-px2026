'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { TCustomer } from '@/consts/customers';

interface Props {
  items: TCustomer[];
  onCardClick?: (id: string) => void;
  visible?: boolean;
  autoRotate?: boolean;
}

export default function Slider3D({ items, onCardClick, visible = true, autoRotate = true }: Props) {
  const [loadedScreen, setLoadedScreen] = useState(false);

  const targetRotationRef = useRef(0);
  const visualRotationRef = useRef(0);
  const [displayRotation, setDisplayRotation] = useState(0);

  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const velocityRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoRotateResumeRef = useRef<NodeJS.Timeout | null>(null);
  const autoRotateEnabledRef = useRef(autoRotate);
  const autoRotatePausedByDrag = useRef(false);

  const animFrameRef = useRef<number | null>(null);

  const DRAG_SPEED = 0.1;
  const LERP_FACTOR = 0.12;
  const MOMENTUM_DECAY = 0.75;
  const MOMENTUM_MIN = 0.05;
  const AUTO_ROTATE_SPEED = 2000;

  const itemCount = items.length;
  const theta = 360 / itemCount;

  const [svw, setSVW] = useState(0);
  const [svh, setSVH] = useState(0);

  const radius = (svh * 6) * itemCount || 66 * itemCount;

  useEffect(() => {
    setSVW(window.innerWidth / 100);
    setSVH(window.innerHeight / 100);
    const handleResize = () => {
      setSVW(window.innerWidth / 100);
      setSVH(window.innerHeight / 100);
    };

    window.setTimeout(() => {
      setLoadedScreen(true);
    }, 700);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    autoRotateEnabledRef.current = autoRotate;
    if (autoRotate) {
      startAutoRotate();
    } else {
      clearAutoRotate();
    }
  }, [autoRotate]);

  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current && Math.abs(velocityRef.current) > MOMENTUM_MIN) {
        targetRotationRef.current += velocityRef.current;
        velocityRef.current *= MOMENTUM_DECAY;
      } else if (!isDraggingRef.current && Math.abs(velocityRef.current) <= MOMENTUM_MIN) {
        velocityRef.current = 0;
        targetRotationRef.current = Math.round(targetRotationRef.current / theta) * theta;
      }

      const diff = targetRotationRef.current - visualRotationRef.current;
      if (Math.abs(diff) > 0.01) {
        visualRotationRef.current += diff * LERP_FACTOR;
      } else {
        visualRotationRef.current = targetRotationRef.current;
      }
      setDisplayRotation(visualRotationRef.current);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [theta]);

  const clearAutoRotate = useCallback(() => {
    if (autoRotateTimerRef.current) {
      clearInterval(autoRotateTimerRef.current);
      autoRotateTimerRef.current = null;
    }
    if (autoRotateResumeRef.current) {
      clearTimeout(autoRotateResumeRef.current);
      autoRotateResumeRef.current = null;
    }
  }, []);

  const startAutoRotate = useCallback(() => {
    clearAutoRotate();
    if (!autoRotateEnabledRef.current) return;
    autoRotateTimerRef.current = setInterval(() => {
      if (!isDraggingRef.current && autoRotateEnabledRef.current) {
        targetRotationRef.current -= theta;
      }
    }, AUTO_ROTATE_SPEED);
  }, [theta, clearAutoRotate]);

  const pauseAutoRotateWithResume = useCallback(() => {
    clearAutoRotate();
    autoRotatePausedByDrag.current = true;
    autoRotateResumeRef.current = setTimeout(() => {
      autoRotatePausedByDrag.current = false;
      if (autoRotateEnabledRef.current) {
        startAutoRotate();
      }
    }, 3000);
  }, [clearAutoRotate, startAutoRotate]);

  useEffect(() => {
    if (autoRotateEnabledRef.current) {
      startAutoRotate();
    }
    return () => clearAutoRotate();
  }, [startAutoRotate, clearAutoRotate]);

  const rotateNext = () => {
    if (isDraggingRef.current) return;
    velocityRef.current = 0;
    targetRotationRef.current = Math.round(targetRotationRef.current / theta) * theta - theta;
    pauseAutoRotateWithResume();
  };

  const rotatePrev = () => {
    if (isDraggingRef.current) return;
    velocityRef.current = 0;
    targetRotationRef.current = Math.round(targetRotationRef.current / theta) * theta + theta;
    pauseAutoRotateWithResume();
  };

  const handleDragStart = (pageX: number) => {
    clearAutoRotate();
    hasDraggedRef.current = false;
    isDraggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    startXRef.current = pageX;
    lastDragXRef.current = pageX;
    lastDragTimeRef.current = performance.now();
    targetRotationRef.current = visualRotationRef.current;
    startRotationRef.current = targetRotationRef.current;
  };

  const handleDragMove = (pageX: number) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = now - lastDragTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (pageX - lastDragXRef.current) * DRAG_SPEED * 0.6;
    }
    lastDragXRef.current = pageX;
    lastDragTimeRef.current = now;

    const x = pageX - startXRef.current;
    if (Math.abs(x) > 5) hasDraggedRef.current = true;
    targetRotationRef.current = startRotationRef.current + x * DRAG_SPEED;
  };

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    pauseAutoRotateWithResume();
  };

  const handleMouseDown = (e: React.MouseEvent) => handleDragStart(e.pageX);
  const handleMouseMove = (e: React.MouseEvent) => handleDragMove(e.pageX);
  const handleMouseUp = () => handleDragEnd();

  const handleTouchStart = (e: React.TouchEvent) => handleDragStart(e.touches[0].pageX);
  const handleTouchMove = (e: React.TouchEvent) => handleDragMove(e.touches[0].pageX);

  const handleCardClick = (id: string) => {
    if (isDragging || hasDraggedRef.current) return;
    onCardClick?.(id);
  };

  if (svw === 0) return <div></div>;

  return (
    <>
      <button
        onClick={rotatePrev}
        className={`hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute left-10 bottom-[-60px] cursor-pointer ${visible ? '' : 'pointer-events-none opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        className={`relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${visible && loadedScreen ? '' : 'pointer-events-none'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{ perspective: '1800px' }}
      >
        <div
          className="relative w-[30svh] h-[30svh]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${displayRotation}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemRotation = index * theta;
            return (
              <div
                key={item.id}
                className='absolute inset-0 w-full h-full select-none cursor-pointer'
                style={{
                  transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => handleCardClick(item.id)}
              >
                <div
                  className={`transition-all absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl  border-2 border-white/20 bg-white/5 backdrop-blur-xl starting:opacity-0 starting:rotate-x-70 ${visible && loadedScreen  ? 'duration-700' : 'duration-700 opacity-0 rotate-x-70'}`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full h-full overflow-hidden p-5 pointer-events-none max-w-[17svw] max-h-[17svh]">
                    <img
                      src={item.logo}
                      alt={item.id}
                      className="w-full h-full object-contain transition-transform duration-700 select-none"
                    />
                  </div>
                </div>

                <div
                  className={`transition-all absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl rotate-y-180 starting:opacity-0 starting:rotate-x-70 ${visible && loadedScreen ? 'rotate-x-0 duration-700' : 'duration-700 opacity-0 rotate-x-70'}`}
                  style={{
                    // transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className={`transition-opacity duration-500 relative w-full h-full overflow-hidden p-5 pointer-events-none blur-md max-w-[250px] max-h-[200px] ${visible ? 'opacity-50' : 'opacity-0'}`}
                    style={{
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <img
                      src={item.logo}
                      alt={item.id}
                      className="w-full h-full object-contain transition-transform duration-700 select-none"
                    />
                  </div>
                </div>

                {item.slide1?.bgImage && <link rel="preload" as="image" href={item.slide1.bgImage}></link>}
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={rotateNext}
        className={`hidden 2xl:flex items-center justify-center bg-white/6 border border-white/4 rounded-full size-12 absolute right-10 bottom-[-60px] cursor-pointer ${visible ? '' : 'pointer-events-none opacity-0'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='rotate-180'>
          <path d="M9.56982 5.92999L3.49982 12L9.56982 18.07" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 12H3.67" stroke="#FEF9F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  )
}
