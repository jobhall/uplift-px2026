import { useEffect, useRef, useState } from "react";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./classes";


interface IndustryProps {
  visible: boolean;
  industryList: string[];
  onIndustrySelect: (industry: string) => void;
}

export default function IndustryGrid({
  visible,
  industryList,
  onIndustrySelect,
}: IndustryProps) {
  const [display, setDisplay] = useState<'flex' | 'hidden'>('hidden');
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  useEffect(() => {
    if (visible) {
      setDisplay('flex');
    } else {
      window.setTimeout(() => {
        if (!visibleRef.current) setDisplay('hidden');
      }, 1000);
    }
  }, [visible]);

  return (
    <div className={`z-1 w-full ${display} flex-col items-center justify-center transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className={`flex flex-col items-center justify-center`}>
        <div className="grid grid-cols-4 gap-3 mt-[6svh]">
          {industryList.map((industry, i) => (
            <div
              key={industry}
              className={` text-white starting:opacity-0 starting:translate-y-10 transition-all duration-500 text-xl w-[280px] max-w-[22svw] h-[86px] max-h-[9svh] rounded-md text-center flex items-center justify-center border border-white/40 bg-black/5 backdrop-blur-xl cursor-pointer ${visible ? '' : 'opacity-0 translate-y-10'}`}
              style={!visible ? { transitionDelay: `0ms` } : { transitionDelay: `${i * 25}ms` }}
              onClick={() => onIndustrySelect(industry)}
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
