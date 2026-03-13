"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function InactivityTimer() {
  const router = useRouter();
  const pathname = usePathname();

  const POPUP_DELAY = 5 * 60 * 1000;
  const REDIRECT_DELAY = 1 * 60 * 1000;

  const [showPopup, setShowPopup] = useState(false);
  const popupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startRedirectTimer = () => {
    if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
    redirectTimerRef.current = setTimeout(() => {
      setShowPopup(false);
      router.push("/");
    }, REDIRECT_DELAY);
  };

  const startInactivityTimer = () => {
    if (pathname === "/") return;
    if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    popupTimerRef.current = setTimeout(() => {
      setShowPopup(true);
      startRedirectTimer();
    }, POPUP_DELAY);
  };

  useEffect(() => {
    if (showPopup) return;
    startInactivityTimer();
    const handleInteraction = () => {
      if (!showPopup) startInactivityTimer();
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click', 'wheel'];

    events.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, [showPopup, pathname]);

  const onBtnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    startInactivityTimer();
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-500 flex items-center justify-center bg-black/50 backdrop-blur-sm starting:opacity-0 transition-all duration-500">
      <div
        onClick={onBtnClick}
        className="inset-0 absolute bg-black/50"
      ></div>
      <div className="absolute bg-[#f0ece1] text-black w-full max-w-sm rounded-xl p-8 flex flex-col items-center justify-center shadow-2xl space-y-8 pointer-events-auto">
        <h2 className="text-3xl text-center" style={{ fontFamily: 'var(--font-ivar-headline)' }}>Are you still there?</h2>
        <button
          onClick={onBtnClick}
          className="bg-black text-[#f0ece1] text-xl font-medium w-full py-4 rounded-full transition-transform hover:scale-105 active:scale-95"
          style={{ fontFamily: 'var(--font-soehne-web)' }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}
