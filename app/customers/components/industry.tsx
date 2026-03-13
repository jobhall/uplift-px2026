import { useEffect, useRef, useState } from "react";
import { HEADLINE_CLASSES, TITLE_CLASSES } from "@/consts/classes";
import { customersTextAnimClasses, customersTextAnimOffClasses } from "./classes";
import Slider3DText from "@/components/Slider3DText";

function createGroups(arr: string[], numGroups: number) {
  const perGroup = Math.ceil(arr.length / numGroups);
  return new Array(numGroups)
    .fill('')
    .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
}

interface IndustryProps {
  visible: boolean;
  industryList: string[];
  onIndustrySelect: (industry: string) => void;
}

export default function Industry({
  visible,
  industryList,
  onIndustrySelect,
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

  const groups = createGroups(industryList, 3);

  return (
    <div className={`z-1 w-full ${display} flex-col items-center justify-center transition-opacity duration-500 ${visible ? '' : 'pointer-events-none'}`}>
      <div className={`flex flex-col items-center justify-center`}>
        <div className="relative w-full flex items-center justify-center mt-[3svh]">
          <div className="flex flex-col gap-8" style={{ perspective: '1800px' }}>
            {groups.map((group, index) => (
              <Slider3DText key={index} items={group} onCardClick={onIndustrySelect} visible={visible} delay={index * 500} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
