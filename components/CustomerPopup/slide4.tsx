import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Vimeo from '@u-wave/react-vimeo';

import { TCustomer } from "@/consts/customers";

import 'swiper/css';
import { TransitionLink } from "../TransitionLink";

interface ISlide4 {
  selectedCustomer: TCustomer;
  visible: boolean;
}

export default function Slide4({ selectedCustomer, visible }: ISlide4) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isVideoPopupClosing, setIsVideoPopupClosing] = useState(false);
  const [videoWidth, setVideoWidth] = useState(0);
  const [videoHeight, setVideoHeight] = useState(0);
  const [videoId, setVideoId] = useState('');

  const [player, setPlayer] = useState<any>(undefined);

  if (!selectedCustomer.slide4) return <></>;

  useEffect(() => {
    if (visible) {
      swiperRef.current?.swiper?.slideTo(0, 0);
      swiperRef.current?.swiper?.autoplay?.start();
    }
  }, [visible]);

  useEffect(() => {
    const handleResize = () => {
      setVideoWidth(window.innerWidth - 60);
      setVideoHeight(window.innerHeight - 60);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (player) {
      try {
        player.on('ended', () => {
          handleCloseVideoPopup()
        })
      } catch (e) {
        console.log('fail to load player event e:', e)
      }
    }
  }, [player, isVideoPopupOpen])

  const handleOpenVideoPopup = (videoId: string) => {
    setIsVideoPopupOpen(true);
    setIsVideoPopupClosing(false);
    setVideoId(videoId);
  };

  const handleCloseVideoPopup = () => {
    setIsVideoPopupClosing(true);
    setTimeout(() => {
      setIsVideoPopupOpen(false);
      setIsVideoPopupClosing(false);
    }, 500);
  };

  return (
    <div className={`flex-1 flex flex-col gap-[5svh] h-full w-full max-w-[1140px] transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className="grid grid-cols-[1fr_0.8fr] gap-[min(15svh,126px)] pt-[6svh] items-start">
        <div className={`block w-full overflow-hidden backdrop-blur-sm rounded-md border border-white/3 bg-black/1 transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-500 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
          <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 7000, disableOnInteraction: true }}
            ref={swiperRef}
            onAutoplayTimeLeft={(swiper, timeLeft, percentage) => {
              const p = Math.abs(percentage - 1) * 100;
              swiper.el.parentElement?.parentElement?.style.setProperty('--slide-progress', `${p.toFixed(4)}%`);
            }}
            onAutoplayStop={(swiper) => {
              swiper.el.parentElement?.parentElement?.style.setProperty('--slide-progress', '100%');
            }}
            pagination={{
              el: '#swiper-pagination-testimonials',
              clickable: false,
            }}
          >
            {selectedCustomer.slide4.testimonials.map((testimonial, testimonialIndex) => (
              <SwiperSlide key={testimonialIndex} className=" p-[min(3svh,30px)] h-auto! flex! flex-col">
                <div className={`flex flex-col gap-1 border-b border-white/20 pb-[min(5svh,40px)] mb-[min(3svh,35px)] flex-1 justify-start`}>
                  <p className="text-[min(3.9svh,40px)] leading-[1.15] font-medium">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-[min(1.5svh,20px)]">
                  <img src={testimonial.image} alt={testimonial.author} className="rounded-full size-[min(9.5svh,96px)]" />
                  <div className="flex flex-col gap-[min(0.4svh,4px)] text-[min(1.6svh,16px)] leading-[1.3] tracking-wide">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="font-light" dangerouslySetInnerHTML={{ __html: testimonial.position }} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="swiper-pagination-testimonials"
            className="w-full h-2 flex px-[min(3svh,30px)] pb-[min(2svh,20px)] gap-[4px]"
            style={{
              '--swiper-pagination-color': '#FFF3',
              '--swiper-pagination-bullet-inactive-color': '#FFF3',
              '--swiper-pagination-bullet-inactive-opacity': '1',
              '--swiper-pagination-bullet-width': '30px',
              '--swiper-pagination-bullet-height': '2px',
              '--swiper-pagination-bullet-border-radius': '0px',
            } as React.CSSProperties}
          />
        </div>
        <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1000 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col w-full h-full flex-none gap-[min(1svh,10px)]">
                {selectedCustomer.slide4.mediaBlock.map((mediaBlock, index) => (
                  <div key={index}>
                    {mediaBlock.vimeoId && (
                      <div
                        className="flex-1 flex items-center justify-center cursor-pointer"
                        onClick={() => handleOpenVideoPopup(mediaBlock.vimeoId || '')}
                        >
                        <svg className="absolute pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="48" height="52" viewBox="0 0 48 52" fill="none">
                          <path opacity="0.86" d="M24 51.9178C30.3662 51.9178 36.4703 49.1815 40.9701 44.3141C45.47 39.4467 48 32.8443 48 25.9589C48 19.0735 45.4702 12.4708 40.9701 7.60366C36.47 2.73651 30.3658 0 24 0C17.6342 0 11.5297 2.73627 7.02988 7.60366C2.53001 12.4711 0 19.0735 0 25.9589C0.00892887 32.8415 2.54167 39.4371 7.03879 44.3051C11.5388 49.1692 17.6365 51.9081 24 51.9178ZM17.9821 20.1898C17.9791 19.6168 18.2529 19.0824 18.7023 18.7799C19.1517 18.4773 19.7172 18.4515 20.1904 18.7059L30.8572 24.4906C31.3751 24.7675 31.7025 25.334 31.7025 25.9585C31.7025 26.583 31.3751 27.1496 30.8572 27.4264L20.1904 33.2112C19.7172 33.4655 19.1517 33.4398 18.7023 33.1372C18.2529 32.8346 17.9791 32.3002 17.9821 31.7272V20.1898Z" fill="white"/>
                        </svg>
                        <video autoPlay loop muted className="pointer-events-none">
                          <source src={mediaBlock.videoLoop} />
                        </video>
                      </div>
                    )}

                    {mediaBlock.imgLarge && (
                      <img src={mediaBlock.imgLarge} />
                    )}

                    {mediaBlock.imgSmall1 && mediaBlock.imgSmall2 && (
                      <div className="flex gap-[min(1svh,10px)]">
                        <div className="flex-1">
                          <img src={mediaBlock.imgSmall1} />
                        </div>
                        <div className="flex-1">
                          <img src={mediaBlock.imgSmall2} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>
      </div>

      {isVideoPopupOpen && videoId && (
        createPortal(
          <div className="fixed inset-0 z-110 flex items-center justify-center">
            <div
              className={`absolute inset-0 bg-black/80 backdrop-blur-sm starting:opacity-0 ${isVideoPopupClosing ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}
              onClick={handleCloseVideoPopup}
            />
            <div className="absolute top-10 left-10 z-20">
              <button
                onClick={handleCloseVideoPopup}
                className={`flex items-center justify-center size-13 xl:size-16 rounded-full bg-[#8E8E93]/20 cursor-pointer starting:opacity-0 ${isVideoPopupClosing ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}
              >
                <div className={`bg-white w-4 xl:w-6 h-0.5 absolute rotate-45`}></div>
                <div className={`bg-white w-4 xl:w-6 h-0.5 absolute -rotate-45`}></div>
              </button>
            </div>
            { /*
            <div className="absolute top-15 z-20">
              <TransitionLink href="/">
                <img src="/betterup.svg" alt="BetterUp" />
              </TransitionLink>
            </div>
            */ }
            <div className={`relative z-10 starting:opacity-0 ${isVideoPopupClosing ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}>
              <Vimeo
                video={videoId}
                autoplay
                muted
                textTrack="en"
                controls={false}
                width={videoWidth}
                // height={videoHeight}
                pip={false}
                onReady={setPlayer}
              />
            </div>
          </div>
        , document.body)
      )}
    </div>
  );
}
