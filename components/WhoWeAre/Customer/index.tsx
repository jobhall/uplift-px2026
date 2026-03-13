import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { customers, TCustomer } from "@/consts/customers";
import { WWA_GLASS_CLASSES_HIDDEN, WWA_GLASS_CLASSES_CARD } from "../consts";
import { logEvent } from "@/lib/gtag";
import CustomerPopup from "@/components/CustomerPopup";

interface Props {
  visible?: boolean;
  removing?: boolean;
  onPopupChange?: (open: boolean) => void;
}

export default function WhoWeAreCustomer({ visible, removing, onPopupChange }: Props) {
  const [opacity, setOpacity] = useState('opacity-0');
  const [glassClasses, setGlassClasses] = useState(WWA_GLASS_CLASSES_CARD);

  const [selectedCustomer, setSelectedCustomer] = useState<TCustomer | undefined>(undefined);
  const [closing, setClosing] = useState(false);

  const handleOnCardClick = (id: string) => {
    setSelectedCustomer(customers.find((customer) => customer.id === id));
  }


  useEffect(() => {
    if (visible && !removing) {
      setOpacity('opacity-100');
      setTimeout(() => {
        setGlassClasses(WWA_GLASS_CLASSES_CARD);
      }, 500);
    } else {
      setGlassClasses(WWA_GLASS_CLASSES_HIDDEN);
      setOpacity('opacity-0');
    }
  }, [visible, removing]);

  useEffect(() => {
    if (closing) {
      onPopupChange?.(false);
      setTimeout(() => {
        setSelectedCustomer(undefined);
        setClosing(false);
      }, 500);
    }
  }, [closing]);

  useEffect(() => {
    onPopupChange?.(selectedCustomer !== undefined);

    if (selectedCustomer) {
      logEvent({ action: 'view', category: 'who-we-are__customers', label: selectedCustomer.id });
    }
  }, [selectedCustomer]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-start mt-30 user-select-none transition-all duration-500 ${visible && !removing ? '' : 'opacity-0 pointer-events-none'}`}
    >
      <div className={`flex flex-col pt-3 xl:pt-5 items-center justify-center px-5 xl:px-0 max-w-full xl:max-w-[1210px] w-full`}>
        <h2 className={`text-4xl xl:text-5xl leading-none text-center max-w-[700px] xl:max-w-[900px] transition-all duration-500 ${opacity}`}>Leading enterprises turn strategy into performance with BetterUp</h2>

        <div className={`mt-5 xl:mt-10 flex items-center justify-center`}>
          <div className="grid grid-cols-4 gap-4">
            {customers.slice(0, 8).map((customer, i) => (
              <div
                key={customer.id}
                className={`col-span-1 size-[200px] xl:size-[270px] bg-linear-to-b from-[#DB015B]/20 to-black/30 cursor-pointer px-10 py-14 xl:p-10 delay-${i * 100} ${glassClasses} border-white/5`}
                onClick={() => handleOnCardClick(customer.id)}
              >
                <div className="relative flex items-center justify-center w-full h-full max-w-[197px]">
                  <img
                    src={customer.logo}
                    alt={customer.id}
                    style={{ width: `${customer.wwaMaxWidth}px` }}
                    className="max-w-full xl:max-w-[197px]"
                  />
                </div>
              </div>
            ))}
          </div>


          {(selectedCustomer || closing) && (
            <div className={`fixed inset-0 z-50 p-10 pt-5 xl:pt-10 pb-10 xl:pb-30 gap-10 flex flex-col items-center justify-start bg-black/20 backdrop-blur-2xl transition-opacity duration-500 starting:opacity-0 w-full h-full ${closing ? 'opacity-0' : 'opacity-100'}`}>

              <button
                onClick={() => setClosing(true)}
                className="flex flex-col items-center justify-center relative size-16 rounded-full bg-white/5 cursor-pointer border border-white/10 z-60 backdrop-blur-md"
              >
                <div className={`bg-white w-6 h-0.5 absolute rotate-45`}></div>
                <div className={`bg-white w-6 h-0.5 absolute -rotate-45`}></div>
              </button>

              <CustomerPopup
                selectedCustomer={selectedCustomer}
                closing={closing}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
