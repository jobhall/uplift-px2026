import { useEffect, useRef, useState } from "react";
import { TCustomer } from "@/consts/customers";
import CountUp from "react-countup";

function StatBlock({ label, value, suffix, prefix }: { label: string, value: number, suffix?: string, prefix?: string }) {
  return (
    <div className="grid grid-cols-[1fr_1.6fr] p-[min(2svh,20px)] border border-white/20 rounded-md">
      <div className="flex items-center justify-center px-4">
        <span className="flex leading-none relative">
          {prefix && prefix.includes('$') && <span className="text-[min(4.5svh,45px)] font-light top-0 pt-[min(0.5svh,10px)]">{prefix}</span>}
          {prefix && !prefix.includes('$') && <span className="text-[min(7.6svh,90px)] font-light">{prefix}</span>}
          <span className="text-[min(7.6svh,90px)] font-light">
            <CountUp
              start={0}
              end={value}
              duration={2}
              delay={1.2}
            />
          </span>
          {suffix && suffix.includes('%') && <span className="text-[min(4.5svh,45px)] font-light top-0 pt-[min(0.5svh,10px)] text-[#DDFF0E]">{suffix}</span>}
          {suffix && !suffix.includes('%') && <span className="text-[min(7.6svh,90px)] font-light text-[#DDFF0E]">{suffix}</span>}
        </span>
      </div>
      <p className="font-mono uppercase text-balance text-[min(1.9svh,20px)] border-l border-white/20 pl-5 flex items-center min-h-[min(8.4svh,90px)]">{label}</p>
    </div>
  );
}

function DetailsBlock({ title, value }: { title: string, value: string }) {
  return (
    <div className="grid grid-cols-[1fr_1.6fr] p-[min(2svh,20px)] border border-white/20 rounded-md h-[min(11svh,110px)] items-center">
      <p className="text-[min(1.8svh,16px)] leading-[1.2] font-light h-full pr-[min(2svh,20px)]">{title}</p>
      <p className="font-mono uppercase text-[min(1.5svh,15px)] border-l border-white/20 pl-5 [&_span]:text-[#DDFF0E] h-full" dangerouslySetInnerHTML={{ __html: value }}></p>
    </div>
  );
}

interface ISlide1 {
  selectedCustomer: TCustomer;
  visible: boolean;
}

export default function Slide1({ selectedCustomer, visible }: ISlide1) {
  if (!selectedCustomer.slide1) return <></>;

  return (
    <div className={`flex-1 flex flex-col gap-[5svh] h-full w-full max-w-[1100px] transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className={`pl-[1.5svh] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-200' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
        <img
          src={selectedCustomer.logo}
          alt={selectedCustomer.id}
          style={{
            objectFit: "contain",
            objectPosition: "left",
            width: (selectedCustomer.wwaMaxWidth || 200) * 1.25
          }}
          className="max-h-[8svh] max-w-[200px] xl:max-w-auto"
        />
      </div>

      <div className="grid grid-cols-2 gap-[8svw] items-start">
        <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-700 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
          <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">ORGANIZATIONAL CHALLENGE</p>
          {selectedCustomer.slide1.challenge.title && <p className={`leading-[1.15] mb-[1svh] ${selectedCustomer.slide1.challenge.text ? 'text-[min(4.2svh,40px)] font-medium' : 'text-[min(2.6svh,26px)]'}`}>{selectedCustomer.slide1.challenge.title}</p>}
          {selectedCustomer.slide1.challenge.text && <p className="text-[min(2.2svh,18px)] leading-[1.3]">{selectedCustomer.slide1.challenge.text}</p>}
        </div>
        <div className={`backdrop-blur-sm rounded-md border border-white/3 bg-black/1 p-[min(1.5svh,20px)] transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1200 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
          <p className="text-[min(1.6svh,14px)] font-bold font-mono uppercase mb-[1svh] tracking-widest text-[#DDFF0E]">With BetterUp</p>
          {selectedCustomer.slide1.withBetterupText && <p className="text-[min(1.8svh,18px)] leading-[1.2] mb-[1.5svh]">{selectedCustomer.slide1.withBetterupText}</p>}
          {selectedCustomer.slide1.withBetterupStats && <div className="flex flex-col gap-4">
            {selectedCustomer.slide1.withBetterupStats.map((stat, index) =>
              <StatBlock key={index} label={stat.label} value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            )}
          </div>}
        </div>
      </div>

      <div className={`grid grid-cols-3 mt-auto transition-all duration-1000 starting:transform-[translateY(2svh)] starting:opacity-0 ${visible ? 'delay-1700 opacity-100' : 'delay-0 opacity-0 transform-[translateY(2svh)]'}`}>
        <div className="flex flex-col gap-1 items-center text-center p-[1.5svh]">
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Scale</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide1.scale}</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center border-l border-white/20 p-[1.5svh]">
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Speed to value</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide1.speedToValue}</p>
        </div>
        <div className="flex flex-col gap-1 items-center text-center border-l border-white/20 p-[1.5svh]">
          <p className="text-[min(1.6svh,14px)] font-mono font-bold uppercase tracking-widest text-[#DDFF0E]">Business impact</p>
          <p className="text-[min(1.6svh,14px)] leading-[1.2] whitespace-pre-line">{selectedCustomer.slide1.businessImpact}</p>
        </div>
      </div>
    </div>
  );
}
