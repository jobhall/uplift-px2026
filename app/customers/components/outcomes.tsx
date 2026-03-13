import { useEffect, useState, useRef } from "react";
import { customersOutcomesDescription } from "@/consts/customers";


interface OutcomesProps {
  visible: boolean;
  outcomesList: string[];
  onOutcomeSelect: (outcome: string) => void;
}

export default function Outcomes({
  visible,
  outcomesList,
  onOutcomeSelect,
}: OutcomesProps) {
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
        <div className="grid grid-cols-4 gap-3 mt-[3svh]">
          {outcomesList.map((outcome, i) => (
            <div
              key={outcome}
              className={`flex flex-col justify-between text-white starting:opacity-0 starting:scale-120 transition-all duration-500 w-[22svw] max-w-[273px] h-[40svh] max-h-[320px] rounded-lg p-6 pt-5 border border-white/40 bg-black/2 backdrop-blur-xl cursor-pointer delay-${i * 100} ${visible ? '' : 'opacity-0 scale-120'}`}
              style={!visible ? { transitionDelay: `0ms` } : {}}
              onClick={() => onOutcomeSelect(outcome)}
            >
              <div className="text-[min(3.1svh,32px)]">{outcome}</div>
              <div className="text-[min(1.8svh,14px)] font-light tracking-wide">
                {customersOutcomesDescription[outcome].map((item, i) => (
                  <div key={i} className={`mt-2.5 pt-2.5 ${i !== 0 ? 'border-t border-white/20' : ''}`}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
