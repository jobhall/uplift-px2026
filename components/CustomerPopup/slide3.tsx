import { useEffect, useRef, useState } from "react";
import { TCustomer } from "@/consts/customers";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

interface ISlide3 {
  selectedCustomer: TCustomer;
  visible: boolean;
}

export default function Slide3({ selectedCustomer, visible }: ISlide3) {
  const swiperRef = useRef<SwiperRef | null>(null);

  if (!selectedCustomer.slide3) return <></>;

  useEffect(() => {
    if (visible) {
      swiperRef.current?.swiper?.slideTo(0, 10);
      swiperRef.current?.swiper?.autoplay?.start();
    }
  }, [visible]);

  return (
    <div className={`flex-1 flex flex-col gap-[5svh] h-full w-full max-w-[1100px] transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className="grid grid-cols-2 gap-[min(15svh,126px)] pt-[6svh] items-start">
        <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-500 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
          <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">IMPACT</p>
          {selectedCustomer.slide3.organizationalImpact.title && <p className="text-[min(4.2svh,40px)] leading-[1.15] font-medium mb-[1svh] pr-[min(0.5svh,10px)]">{selectedCustomer.slide3.organizationalImpact.title}</p>}
          {selectedCustomer.slide3.organizationalImpact.text && <p className="text-[min(2.2svh,18px)] leading-[1.3]">{selectedCustomer.slide3.organizationalImpact.text}</p>}
        </div>

        {selectedCustomer.slide3.theTransformation?.length ? (
          <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1000 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
            <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">The transformation</p>
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-full h-full flex-none p-[min(2svh,18px)] border border-white/20 rounded-sm gap-[min(1.8svh,20px)]">
                {selectedCustomer.slide3.theTransformation?.map((item, itemIndex) => (
                  <div key={itemIndex} className={`inline gap-1 ${itemIndex === 0 ? '' : 'border-t border-white/20 pt-[min(1.5svh,16px)]'}`}>
                    <span className="text-[min(2.8svh,24px)] leading-[1.3] [&_span]:text-[#DDFF0E]">{item.from} <span >→</span> </span>
                    <span className={`text-[min(2.8svh,24px)] leading-[1.3] font-medium text-[#DDFF0E] ${item.isToInline ? '' : 'block'}`}>{item.to}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        {selectedCustomer.slide3.theTransformationGraph?.length ? (
          <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1000 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
            <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">The transformation</p>
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
                  pagination={{ el: '#swiper-pagination-transformation' }}
                  autoplay={{ delay: 5000, disableOnInteraction: true }}
                  ref={swiperRef}
                >
                  {selectedCustomer.slide3.theTransformationGraph.map((item, itemIndex) => (
                    <SwiperSlide key={itemIndex} className="p-[min(2svh,20px)] flex! flex-col h-auto!">
                      <p className="text-[min(2.2svh,20px)] leading-[1.3] font-mono tracking-widest text-center uppercase">{item.title}</p>
                      {item.description && <p className="text-[min(1.4svh,12px)] font-light uppercase tracking-widest text-center opacity-50 mt-2">{item.description}</p>}
                      <div className="flex flex-col gap-2 mt-[min(1.5svh,15px)] flex-1 justify-end">
                        <div className="flex flex-col">
                          <div className="flex items-end justify-center gap-8">
                            <div className="w-full max-w-[min(10svw,140px)] flex-none">
                              <div className="w-full h-full min-h-[min(20svh,220px)] flex items-end relative">
                                <div
                                  data-graph-bar
                                  className="w-full h-full bg-[#DDFF0E] absolute overflow-hidden transition-all ease-out duration-750 delay-100"
                                  style={{
                                    maxHeight: `${item.beforePercentage}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="w-full max-w-[min(10svw,140px)] flex-none">
                              <div className="w-full h-full min-h-[min(20svh,220px)] flex items-end relative">
                                <div
                                  data-graph-bar
                                  className="w-full h-full bg-[#FF006D] pt-1 text-center text-[min(4.0svh,36px)] font-light absolute overflow-hidden transition-all ease-out duration-750 delay-100"
                                  style={{
                                    maxHeight: `${item.afterPercentage}%`,
                                  }}
                                >
                                  {item.afterValueInsideGraph}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="border-b-2 border-white"></div>
                          <div className="flex items-start justify-center gap-8 pt-3 uppercase text-center tracking-widest font-mono text-[min(1.4svh,13px)] leading-[1.2]">
                            <div className="w-full max-w-[min(10svw,140px)] flex-none [&_span]:text-[min(2.1svh,20px)]" dangerouslySetInnerHTML={{ __html: item.beforeLabel }}>
                            </div>
                            <div className="w-full max-w-[min(10svw,140px)] flex-none font-semibold [&_span]:text-[min(2.1svh,20px)]" dangerouslySetInnerHTML={{ __html: item.afterLabel }}>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div
                id="swiper-pagination-transformation"
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

      <div className={`grid grid-cols-3 mt-auto transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1500 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
        {selectedCustomer.slide3.bottomBlocks?.map((block, blockIndex) => (
          <div key={blockIndex} className={`flex flex-col gap-1 items-center text-center p-[1.5svh] ${blockIndex !== 0 ? 'border-l border-white/20' : ''}`}>
            <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">{block.title}</p>
            <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{block.text}</p>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-slide:not(.swiper-slide-active) [data-graph-bar] {
          max-height: 0% !important;
          padding: 0 !important;
          opacity: 0.5 !important;
        }
      `}} />
    </div>
  );
}
