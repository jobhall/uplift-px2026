import { useEffect, useRef, useState } from "react";
import { customers } from "@/consts/customers";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import Slider3D from "@/components/Slider3D";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./classes";

interface OrganizationsProps {
  visible: boolean;
  onCardClick: (id: string) => void;
  autoRotateEnabled: boolean;
}

export default function Organizations({ visible, onCardClick, autoRotateEnabled }: OrganizationsProps) {
  const [display, setDisplay] = useState<'flex' | 'hidden'>('flex');
  const [customerList, setCustomerList] = useState(customers.sort((a, b) => (a.order || 99) - (b.order || 99)));
  const visibleRef = useRef(visible);
  visibleRef.current = visible;

  /*
  useEffect(() => {
    if (visible) {
      setDisplay('flex');
    } else {
      window.setTimeout(() => {
        if (!visibleRef.current) setDisplay('hidden');
      }, 1000);
    }
  }, [visible]);
  */

  return (
    <div className={`${display} flex-col items-center justify-center w-full transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className="flex flex-col w-full items-center justify-center z-1">
        <div className="relative w-full flex items-center justify-center mt-[3svh]">
          <Slider3D items={customerList} onCardClick={onCardClick} visible={visible} autoRotate={autoRotateEnabled} />
        </div>
      </div>
    </div>
  );
}
