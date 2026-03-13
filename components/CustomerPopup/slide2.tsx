import { useEffect, useRef, useState } from "react";
import { TCustomer } from "@/consts/customers";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

interface ISlide2 {
  selectedCustomer: TCustomer;
  visible: boolean;
}

export default function Slide2({ selectedCustomer, visible }: ISlide2) {
  const swiperRef = useRef<SwiperRef | null>(null);

  if (!selectedCustomer.slide2) return <></>;

  useEffect(() => {
    if (visible) {
      swiperRef.current?.swiper?.slideTo(0, 0);
      swiperRef.current?.swiper?.autoplay?.start();
    }
  }, [visible]);

  return (
    <div className={`flex-1 flex flex-col gap-[5svh] h-full w-full max-w-[1100px] transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className="grid grid-cols-2 gap-[min(16svh,136px)] pt-[3svh] items-start">
        <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-500 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
          <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">Solution</p>
          {selectedCustomer.slide2.solution.title && <p className="text-[min(4.2svh,40px)] leading-[1.15] font-medium mb-[1svh]">{selectedCustomer.slide2.solution.title}</p>}
          {selectedCustomer.slide2.solution.text && <p className="text-[min(2.2svh,18px)] leading-[1.3]">{selectedCustomer.slide2.solution.text}</p>}
        </div>
        {selectedCustomer.slide2.platformConfigurationByRole?.length ? (
          <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1000 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
            <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">Platform Configuration By Role</p>
            <div className="flex flex-col items-center">
              <div className="block w-full h-full flex-none border border-white/20 rounded-md">
                <Swiper
                  onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
                    const p = Math.abs(percentage - 1) * 100;
                    swiper.el.parentElement?.parentElement?.style.setProperty('--slide-progress', `${p.toFixed(4)}%`);
                  }}
                  onAutoplayStop={(swiper) => {
                    swiper.el.parentElement?.parentElement?.style.setProperty('--slide-progress', '100%');
                  }}
                  watchSlidesProgress={true}
                  slidesPerView={1}
                  modules={[Pagination, Autoplay]}
                  loop
                  pagination={{ el: '#swiper-pagination-platform' }}
                  autoplay={{ delay: 5000, disableOnInteraction: true }}
                  ref={swiperRef}
                >
                  {selectedCustomer.slide2.platformConfigurationByRole.map((item, itemIndex) => (
                    <SwiperSlide key={itemIndex} className="p-[min(2svh,20px)] flex! flex-col h-auto!">
                      <p className="text-[min(2.8svh,24px)] leading-[1.3] [&_span]:text-[#DDFF0E] [&_b]:font-medium flex-1 grow" dangerouslySetInnerHTML={{ __html: item.text }}></p>
                      <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase tracking-widest mt-[min(2svh,20px)]">How We Supported Them</p>
                      <div className="flex flex-col gap-2 mt-[min(1.5svh,15px)]">
                        {item.tags?.map((tag, tagIndex) => (
                          <div key={tagIndex} className="text-[min(1.6svh,14px)] font-light leading-[1.2] whitespace-pre-line px-[min(1svh,15px)] py-[min(1.2svh,12px)] border border-white/20 rounded-sm">{tag}</div>
                        ))}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div
                id="swiper-pagination-platform"
                className="w-full h-2 flex mt-[1.5svh] gap-[8px]"
                style={{
                  '--swiper-pagination-color': '#fff3',
                  '--swiper-pagination-bullet-inactive-color': '#fff3',
                  '--swiper-pagination-bullet-inactive-opacity': '1',
                  '--swiper-pagination-bullet-width': '100%',
                  '--swiper-pagination-bullet-height': '2px',
                  '--swiper-pagination-bullet-border-radius': '0px',
                } as React.CSSProperties}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={`${selectedCustomer.slide2.integrations?.length ? 'grid-cols-4' : 'grid-cols-3'} grid  mt-auto transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1500 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
        {selectedCustomer.slide2.integrations?.length ? (
          <div className="flex flex-col gap-1 items-center text-center p-[1.5svh]">
            <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Integrations</p>
            <div className="flex gap-[min(2svh,20px)] mt-[min(1.5svh,15px)] text-center">
              {selectedCustomer.slide2.integrations.map((integration, integrationIndex) => (
                <div key={integrationIndex} className="flex-1 flex items-center justify-center">
                  <img src={integration} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className={`flex flex-col gap-1 items-center text-center p-[1.5svh] ${selectedCustomer.slide2.integrations?.length ? 'border-l border-white/20' : ''}`}>
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Approach</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide2.approach}</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center border-l border-white/20 p-[1.5svh]">
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Cultural shift</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide2.culturalShift}</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center border-l border-white/20 p-[1.5svh]">
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Adoption model</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide2.adoptionModel}</p>
        </div>
      </div>
    </div>
  );
}
