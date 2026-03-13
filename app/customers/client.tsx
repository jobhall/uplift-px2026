'use client'

import { CSSProperties, useEffect, useState } from "react";
import Header from "@/components/Header";
import { customers, customersIndustries, customersOutcomes, customersOutcomesPageTexts, TCustomer } from "@/consts/customers";
import { logEvent } from "@/lib/gtag";
import CustomerPopup from "@/components/CustomerPopup";
import IndustryGrid from "./components/industryGrid";
import IndustryResults from "./components/industryResults";
import OutcomesResults from "./components/outcomesResults";
import Outcomes from "./components/outcomes";
import Organizations from "./components/organizations";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./components/classes";

const btnClasses = 'w-45 text-center cursor-pointer rounded-full py-4.5 text-md leading-2 tracking-wider transition-all duration-500 border';

export default function CustomersClient() {
  const [selectedCustomer, setSelectedCustomer] = useState<TCustomer | undefined>(undefined);
  const [closing, setClosing] = useState(false);
  const [currentTab, setCurrentTab] = useState<'organization' | 'outcomes' | 'industry'>('organization');
  const [currentOutcome, setCurrentOutcome] = useState<string | undefined>(undefined);
  const [hasActiveOutcome, setHasActiveOutcome] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState<string | undefined>(undefined);
  const [hasActiveIndustry, setHasActiveIndustry] = useState(false);

  const [loadingClasses, setLoadingClasses] = useState<CSSProperties>({ opacity: '0', transitionDelay: '700ms' });
  useEffect(() => {
    setTimeout(() => {
      setLoadingClasses({});
    }, 700);

    const searchParams = new URLSearchParams(window.location.search);
    const customerId = searchParams.get('c');
    if (customerId) setSelectedCustomer(customers.find((customer) => customer.id === customerId));
  }, []);

  const handleResetOutcome = (setActiveTab: boolean = false) => {
    setHasActiveOutcome(false);
    if (setActiveTab) setCurrentTab('outcomes');
    window.setTimeout(() => { setCurrentOutcome(undefined); }, 500);
  }

  const handleResetIndustry = (setActiveTab: boolean = false) => {
    setHasActiveIndustry(false);
    if (setActiveTab) setCurrentTab('industry');
    window.setTimeout(() => { setCurrentIndustry(undefined); }, 500);
  }

  useEffect(() => {
    handleResetOutcome();
    handleResetIndustry();
  }, [currentTab]);

  const handleSetOutcome = (outcome: string) => {
    setCurrentOutcome(outcome);
    setHasActiveOutcome(true);
  }

  const handleSetIndustry = (industry: string) => {
    setCurrentIndustry(industry);
    setHasActiveIndustry(true);
  }

  const handleOnCardClick = (id: string) => {
    setSelectedCustomer(customers.find((customer) => customer.id === id));
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (selectedCustomer) {
      const updatedSearchParams = new URLSearchParams(searchParams.toString())
      updatedSearchParams.set("c", selectedCustomer.id)
      window.history.pushState(null, "", "?" + updatedSearchParams.toString())
    } else {
      window.history.pushState(null, "", "?")
    }
  }, [selectedCustomer]);

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setSelectedCustomer(undefined);
        setClosing(false);
      }, 500);
    }
  }, [closing]);

  useEffect(() => {
    if (selectedCustomer) {
      logEvent({ action: 'view', category: 'customers', label: selectedCustomer.id });
    }
  }, [selectedCustomer]);

  const closeBtn = (
    <button
      onClick={() => setClosing(true)}
      className="flex flex-col items-center justify-center relative size-13 xl:size-16 rounded-full bg-[#8E8E93]/20 cursor-pointer"
    >
      <div className={`bg-white w-4 xl:w-6 h-0.5 absolute rotate-45`}></div>
      <div className={`bg-white w-4 xl:w-6 h-0.5 absolute -rotate-45`}></div>
    </button>
  );

  return (
    <div className="overflow-hidden select-none h-svh flex flex-col items-center justify-center bg-zinc-50 font-sans bg-[url('/images/bgs/bg-customers.webp')] bg-cover bg-center overflow-hidden">
      <Header leftSide={selectedCustomer ? closeBtn : undefined} />

      <div className="relative w-full h-full flex flex-col items-center justify-center [&>div]:absolute [&>div]:pt-[min(10svh,100px)]">

        <div className="relative pointer-events-none flex flex-col items-center justify-center top-[min(18svh,180px)] 2xl:top-[240px] z-10 pt-0!">
          <h4
            style={loadingClasses}
            className={`${HEADLINE_CLASSES} ${customersTextAnimClasses} ${!hasActiveOutcome && !hasActiveIndustry ? '' : customersTextAnimOffClasses}`}>
            Our Customers
          </h4>
          <h1
            style={loadingClasses}
            className={`${TITLE_CLASSES} ${customersTextAnimClasses} text-center px-10 xl:px-40 xl:max-w-[1400px] ${!hasActiveOutcome && !hasActiveIndustry ? '' : customersTextAnimOffClasses}`}>
            The world’s leading companies trust us to<br />drive business outcomes
          </h1>

          <div className={`absolute flex flex-col items-center`}>
            <h4 className={`${HEADLINE_CLASSES} ${customersTextAnimClasses} ${hasActiveOutcome ? '' : customersTextAnimOffClasses}`}>{customersOutcomesPageTexts[currentOutcome || '']?.title || ''}</h4>
            <h1 className={`${TITLE_CLASSES} text-balance w-[90svw] mb-0 xl:mb-4 ${customersTextAnimClasses} text-center xl:max-w-[1400px] ${hasActiveOutcome ? '' : customersTextAnimOffClasses}`}>{customersOutcomesPageTexts[currentOutcome || '']?.description}</h1>
          </div>

          <div className={`absolute flex flex-col items-center`}>
            <h4 className={`${HEADLINE_CLASSES} ${customersTextAnimClasses} ${hasActiveIndustry ? '' : customersTextAnimOffClasses}`}>Our Customers</h4>
            <h1 className={`${TITLE_CLASSES} text-balance w-[90svw] mb-0 xl:mb-4 ${customersTextAnimClasses} text-center xl:max-w-[1400px] ${hasActiveIndustry ? '' : customersTextAnimOffClasses}`}>{currentIndustry}</h1>
          </div>
        </div>

        <Organizations
          visible={currentTab === 'organization'}
          onCardClick={handleOnCardClick}
          autoRotateEnabled={(selectedCustomer === undefined || closing) && currentTab === 'organization'}
        />

        <Outcomes
          visible={currentTab === 'outcomes' && !hasActiveOutcome}
          outcomesList={customersOutcomes}
          onOutcomeSelect={handleSetOutcome}
        />

        <OutcomesResults
          visible={currentTab === 'outcomes' && hasActiveOutcome}
          outcomeName={currentOutcome || ''}
          customers={customers.sort((a, b) => (a.outcomeOrder || 99) - (b.outcomeOrder || 990)).filter((customer) => customer.outcome === currentOutcome)}
          onCardClick={handleOnCardClick}
        />

        <IndustryGrid
          visible={currentTab === 'industry' && !hasActiveIndustry}
          industryList={customersIndustries}
          onIndustrySelect={handleSetIndustry}
        />

        <IndustryResults
          visible={currentTab === 'industry' && hasActiveIndustry}
          industryName={currentIndustry || ''}
          customers={customers.filter((customer) => customer.industry === currentIndustry)}
          onCardClick={handleOnCardClick}
        />

        <div
          style={loadingClasses}
          className={`absolute top-[90px] xl:top-[min(160px,15svh)] left-0 right-0 bottom-0 z-0 bg-black/2 transition-opacity duration-500 pointer-events-none backdrop-blur-md`}
        ></div>
      </div>

      {(selectedCustomer || closing) && (
        <CustomerPopup selectedCustomer={selectedCustomer} closing={closing} onClickLastNextBtn={() => setClosing(true)} />
      )}

      <div
        style={loadingClasses}
        className="fixed flex gap-3 bottom-12 left-1/2 -translate-x-1/2 text-sm uppercase font-mono border border-white/10 bg-white/10 backdrop-blur-lg rounded-full p-[min(1svh,10px)] transition-opacity duration-500 starting:opacity-0"
      >
        <button
          onClick={() => setCurrentTab('organization')}
          className={`${btnClasses} ${currentTab === 'organization' ? 'bg-white/20 border-white/6 text-shadow-[0_0_1px_rgba(255,255,255,0.75)] text-white' : 'border-transparent text-white/90'}`}
        >
          ORGANIZATION
        </button>
        <button
          onClick={() => handleResetOutcome(true)}
          className={`${btnClasses} ${currentTab === 'outcomes' ? 'bg-white/20 border-white/6 text-shadow-[0_0_1px_rgba(255,255,255,0.75)] text-white' : 'border-transparent text-white/90'}`}
        >
          OUTCOMES
        </button>
        <button
          onClick={() => handleResetIndustry(true)}
          className={`${btnClasses} ${currentTab === 'industry' ? 'bg-white/20 border-white/6 text-shadow-[0_0_1px_rgba(255,255,255,0.75)] text-white' : 'border-transparent text-white/90'}`}
        >
          INDUSTRY
        </button>
      </div>

      <div className="fixed pointer-events-none bottom-4 left-1/2 -translate-x-1/2 text-white text-sm uppercase font-mono opacity-50">
        Tap to explore
      </div>
    </div>
  );
}
