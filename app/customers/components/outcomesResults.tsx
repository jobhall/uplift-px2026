import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { customersOutcomesPageTexts, TCustomer } from "@/consts/customers";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./classes";

import "swiper/css";
import "swiper/css/pagination";


const staticCardClasses = 'flex h-full min-h-[280px] xl:min-h-[320px] bg-linear-to-b from-black/3 to-black/5 cursor-pointer p-[35px] pt-[50px] pb-[30px] xl:p-10 border-white/40 duration-500 starting:opacity-0 starting:scale-120 border border-white/20 rounded-lg backdrop-blur-lg transition-all';


interface OutcomesProps {
  visible: boolean;
  outcomeName: string | undefined;
  customers: TCustomer[];
  onCardClick: (id: string) => void;
}

export default function OutcomesResults({
  visible,
  outcomeName,
  customers,
  onCardClick,
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

  if (!outcomeName) return <></>;

  const texts = customersOutcomesPageTexts[outcomeName];

  return (
    <div className={`z-1 pt-0! w-full ${display} flex-col items-center justify-center transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className={`absolute flex flex-col items-center justify-center ${visible ? '' : 'pointer-events-none'}`}>

        <h4 className={`${HEADLINE_CLASSES} ${customersTextAnimClasses} ${customersTextAnimOffClasses}`}>{texts.title }</h4>
        <h1 className={`text-balance text-[min(4.5svh,42px)] leading-[1.1] w-[90svw] mb-0 xl:mb-4 ${customersTextAnimClasses} text-center xl:max-w-[1400px] ${customersTextAnimOffClasses}`}>{texts.description}</h1>


        <div className="block w-full mt-[3svh] max-w-[min(1140px,94svw)]">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={16}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: "#swiper-next",
              prevEl: "#swiper-prev",
            }}
            pagination={{
              el: "#swiper-pagination",
              clickable: false,
            }}
            style={{
              overflow: 'visible',
            }}
          >
            {customers.map((customer, i) => (
              <SwiperSlide key={customer.id} className="">
                <div
                  className={`${staticCardClasses} delay-${i * 100} ${visible ? '' : 'opacity-0'}`}
                  style={!visible ? { transitionDelay: `0ms` } : {}}
                  onClick={() => onCardClick(customer.id)}
                >
                  <div className="relative flex-1 flex flex-col items-start justify-between w-full">
                    <div className="flex items-center justify-start h-[60px]">
                      <img
                        src={customer.logo}
                        alt={customer.id}
                        style={{ width: `${customer.wwaMaxWidth}px` }}
                        className="max-w-[140px] max-h-[60px]"
                      />
                    </div>
                    <div className="text-white font-mono text-[14px] tracking-wider uppercase">
                      {customer.outcomeTitle}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          id="swiper-pagination"
          className={`flex! justify-center min-w-[10px]! h-[10px]! mt-3 xl:mt-6 transition-opacity duration-500 starting:opacity-0 ${visible ? '' : 'opacity-0'}`}
          style={{
            // @ts-ignore
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullet-inactive-color': '#fff',
            '--swiper-pagination-bullet-inactive-opacity': '0.2',
            '--swiper-pagination-bullet-size': '8px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          }}
        />
      </div>
    </div>
  );
}
