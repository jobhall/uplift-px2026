import { useEffect, useState } from "react";
import { TCustomer } from "@/consts/customers";
import SlidePagination from "../SlidePagination";

import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slide4 from "./slide4";

interface ICustomerPopup {
  selectedCustomer: TCustomer | undefined;
  closing: boolean;
  onClickLastNextBtn?: () => void;
}

export default function CustomerPopup({
  selectedCustomer,
  closing,
  onClickLastNextBtn
}: ICustomerPopup) {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideQty, setSlideQty] = useState(1);
  const [slideMapping, setSlideMapping] = useState<{ [key: string]: number }>({ slide1: 1 });

  useEffect(() => {
    if (selectedCustomer) {
      let slideQty = 1;
      const newMapping = { ...slideMapping };

      if (selectedCustomer.slide2) {
        const newIndex = slideQty + 1;
        slideQty = newIndex;
        newMapping.slide2 = newIndex;
      }
      if (selectedCustomer.slide3) {
        const newIndex = slideQty + 1;
        slideQty = newIndex;
        newMapping.slide3 = newIndex;
      }
      if (selectedCustomer.slide4) {
        const newIndex = slideQty + 1;
        slideQty = newIndex;
        newMapping.slide4 = newIndex;
      }
      setSlideMapping(newMapping);
      setSlideQty(slideQty);
    }
  }, [selectedCustomer]);

  const onNext = () => {
    if (slideIndex < slideQty) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const onPrev = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  if (!selectedCustomer) return <></>;

  /* -- OLD LAYOUT
  if (!selectedCustomer.hasSlides) {
    return (
      <div className={`fixed bg-black/50 bg-cover bg-center inset-0 z-50 px-10 pt-24 xl:pt-35 pb-2 gap-10 flex flex-col items-center justify-center backdrop-blur-2xl transition-all duration-500 starting:opacity-0 w-full h-full starting:scale-120 ${closing ? 'opacity-0 scale-120' : 'opacity-100'}`}>
        <div className="flex items-center justify-center relative w-full h-full [&>div]:absolute [&>div]:w-full [&>div]:h-full ">
          <DefaultSlide selectedCustomer={selectedCustomer} visible={slideIndex === 1} />
        </div>
        <div className="h-20"></div>
      </div>
    );
  }
  */

  return (
    <div
      className={`fixed bg-[url(/images/bgs/bg-customers-popup.webp)] bg-cover bg-center inset-0 z-50 px-10 pt-24 xl:pt-35 pb-2 gap-10 flex flex-col items-center justify-center transition-all duration-500 starting:opacity-0 w-full h-full starting:scale-120 ${closing ? 'opacity-0 scale-120' : 'opacity-100'}`}
    >
      <div className="flex items-center justify-center relative w-full h-full [&>div]:absolute [&>div]:w-full [&>div]:h-full ">
        <Slide1 selectedCustomer={selectedCustomer} visible={slideIndex === 1} />
        {selectedCustomer.slide2 && <Slide2 selectedCustomer={selectedCustomer} visible={slideIndex === slideMapping.slide2} />}
        {selectedCustomer.slide3 && <Slide3 selectedCustomer={selectedCustomer} visible={slideIndex === slideMapping.slide3} />}
        {selectedCustomer.slide4 && <Slide4 selectedCustomer={selectedCustomer} visible={slideIndex === slideMapping.slide4} />}
      </div>
      <div className="flex items-center justify-center gap-3 w-full h-20">
        {(selectedCustomer.slide2 || selectedCustomer.slide3 || selectedCustomer.slide4) && (
          <SlidePagination length={slideQty} current={slideIndex} onNext={onNext} onPrev={onPrev} onEndNextClick={onClickLastNextBtn} />
        )}
      </div>
      <div className="absolute inset-0 pointer-events-none -z-1">
        {selectedCustomer.slide1?.bgImage && <div
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-500 ease-in ${slideIndex === slideMapping.slide1 ? 'opacity-100' : 'delay-500 opacity-0'}`}
          style={{ backgroundImage: `url('${selectedCustomer.slide1.bgImage}')` }}
        ></div>}
        {selectedCustomer.slide2?.bgImage && <div
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-500 ease-in ${slideIndex === slideMapping.slide2 ? 'opacity-100' : 'delay-500 opacity-0'}`}
          style={{ backgroundImage: `url('${selectedCustomer.slide2.bgImage}')` }}
        ></div>}
        {selectedCustomer.slide3?.bgImage && <div
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-500 ease-in ${slideIndex === slideMapping.slide3 ? 'opacity-100' : 'delay-500 opacity-0'}`}
          style={{ backgroundImage: `url('${selectedCustomer.slide3.bgImage}')` }}
        ></div>}
        {selectedCustomer.slide4?.bgImage && <div
          className={`absolute inset-0 bg-cover bg-top transition-opacity duration-500 ease-in ${slideIndex === slideMapping.slide4 ? 'opacity-100' : 'delay-500 opacity-0'}`}
          style={{ backgroundImage: `url('${selectedCustomer.slide4.bgImage}')` }}
        ></div>}
      </div>

      {selectedCustomer.slide2 && <link rel="preload" as="image" href={selectedCustomer.slide2.bgImage}></link>}
      {selectedCustomer.slide3 && <link rel="preload" as="image" href={selectedCustomer.slide3.bgImage}></link>}
      {selectedCustomer.slide4 && <link rel="preload" as="image" href={selectedCustomer.slide4.bgImage}></link>}


      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-pagination-bullet {
          position: relative;
        }
        .swiper-pagination-bullet::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
        }
        .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
          width: var(--slide-progress);
          background-color: #DDFF0E;
        }
      ` }} />
    </div>
  );
}
