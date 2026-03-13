import { useEffect, useRef, useState } from "react";
import { TCustomer } from "@/consts/customers";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./classes";

const staticCardClasses = 'flex items-center justify-center flex-none w-[270px] h-full min-h-[150px] xl:min-h-[min(260px,20svh)] bg-linear-to-b from-black/3 to-black/5 cursor-pointer border-white/40 duration-500 starting:opacity-0 starting:scale-120 border border-white/20 rounded-lg backdrop-blur-lg transition-all';

interface IndustryProps {
  visible: boolean;
  industryName: string;
  customers: TCustomer[];
  onCardClick: (id: string) => void;
}

export default function IndustryResults({
  visible,
  industryName,
  customers,
  onCardClick,
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
    <div className={`z-1 pt-0! w-full ${display} flex-col items-center justify-center transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className={`absolute flex flex-col items-center justify-center w-full max-w-[min(1140px,94svw)] ${visible ? '' : 'pointer-events-none'}`}>

        <h4 className={`${HEADLINE_CLASSES} ${customersTextAnimClasses} ${customersTextAnimOffClasses}`}>OUR CUSTOMERS</h4>
        <h1 className={`${TITLE_CLASSES} ${customersTextAnimClasses} text-center px-10 xl:px-40 xl:max-w-[1400px] ${customersTextAnimOffClasses}`}>{industryName}</h1>


        <div className="flex flex-wrap items-center justify-center gap-4 mt-[3svh] w-full">
          {customers.map((customer, i) => (
            <div
              key={customer.id}
              className={`${staticCardClasses} delay-${i * 100} ${visible ? '' : 'opacity-0'}`}
              style={!visible ? { transitionDelay: `0ms` } : {}}
              onClick={() => onCardClick(customer.id)}
            >
              <div className="relative flex items-center justify-center w-full h-full max-w-[170px]">
                <img
                  src={customer.logo}
                  alt={customer.id}
                  style={{ width: `${customer.wwaMaxWidth}px` }}
                  className="max-w-[170px]"
                />
              </div>
            </div>
          ))}
          {!customers.length && (
            <div className={`text-white text-center starting:opacity-0 transition-opacity duration-500 h-[100px] ${visible ? '' : 'opacity-0'}`}>No customers found</div>
          )}
        </div>
      </div>
    </div>
  );
}
