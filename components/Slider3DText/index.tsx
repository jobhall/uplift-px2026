'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import { TCustomer } from '@/consts/customers';

interface Props {
  items: string[];
  onCardClick?: (id: string) => void;
  visible?: boolean;
  autoRotate?: boolean;
  delay?: number;
}

export default function Slider3DText({ items, onCardClick, visible = true, autoRotate = true, delay = 0 }: Props) {
  const [loadedScreen, setLoadedScreen] = useState(false);

  const targetRotationRef = useRef(0);
  const visualRotationRef = useRef(0);
  const [displayRotation, setDisplayRotation] = useState(0);

  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startRotationRef = useRef(0);

  const velocityRef = useRef(0);
  const lastDragXRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const autoRotateTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoRotateResumeRef = useRef<NodeJS.Timeout | null>(null);
  const autoRotateEnabledRef = useRef(autoRotate);
  const autoRotatePausedByDrag = useRef(false);

  const animFrameRef = useRef<number | null>(null);

  const DRAG_SPEED = 0.3;
  const LERP_FACTOR = 0.12;
  const MOMENTUM_DECAY = 0.75;
  const MOMENTUM_MIN = 0.05;
  const AUTO_ROTATE_SPEED = 2000;

  const itemCount = items.length;
  const theta = 360 / itemCount;

  const [svw, setSVW] = useState(0);
  const [svh, setSVH] = useState(0);

  const radius = (svh * 5) * itemCount || 66 * itemCount;

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
      setTimeout(() => {
        startAutoRotate();
      }, delay);
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
        if (velocityRef.current !== 0) {
          velocityRef.current = 0;
          targetRotationRef.current = Math.round(targetRotationRef.current / theta) * theta;
        }
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

  const handleDragStart = (pageX: number) => {
    clearAutoRotate();
    isDraggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    startXRef.current = pageX;
    lastDragXRef.current = pageX;
    lastDragTimeRef.current = performance.now();
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
    if (isDragging) return;
    onCardClick?.(id);
  };

  if (svw === 0) return <div></div>;

  return (
    <>
      <div
        className={`relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${visible && loadedScreen ? '' : 'pointer-events-none'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="relative w-[30svh] h-[10svh]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) rotateY(${displayRotation}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemRotation = index * theta;
            return (
              <div
                key={item}
                className="absolute inset-0 w-full h-full select-none cursor-pointer"
                style={{
                  transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)`,
                  transformStyle: 'preserve-3d',
                }}
                onClick={() => handleCardClick(item)}
              >
                <div
                  className={`transition-all absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 bg-white/10 backdrop-blur-md starting:opacity-0 starting:scale-60 ${visible && loadedScreen  ? 'duration-1000' : 'duration-300 opacity-0 scale-60'}`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative w-full h-full overflow-hidden p-5 pointer-events-none flex items-center justify-center text-[min(3svh,40px)] leading-[1.1] text-center">
                    {item}
                  </div>
                </div>

                <div
                  className={`transition-all absolute flex items-center justify-center inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md starting:opacity-0 starting:scale-60 ${visible && loadedScreen ? 'duration-1000' : 'duration-300 opacity-0 scale-60'}`}
                  style={{
                    transform: 'rotateY(180deg)',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div
                    className={`transition-opacity duration-500 relative w-full h-full overflow-hidden p-5 pointer-events-none blur-sm max-w-[250px] max-h-[200px] ${visible ? 'opacity-80' : 'opacity-0'}`}
                    style={{
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex items-center justify-center text-[min(3svh,40px)] leading-[1.1] text-center">
                      {item}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
