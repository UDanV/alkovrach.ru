import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Slide, SliderProps } from "@/types/Slider";
import leftArr from '@/assets/left-arr.svg';
import rightArr from '@/assets/right-arr.svg';
import temp from '@/assets/staff1.png';
import temp2 from '@/assets/staff2.png';
import temp3 from '@/assets/staff3.png';
import temp4 from '@/assets/temp3.png';

export const demoSlides: Slide[] = [
  {
    src: temp,
    name: "Меринов Артём Вячеславович",
    spec: "Cпециализация: Врач-Нарколог",
    expirience: "Опыт работы: 12 лет",
  },
  {
    src: temp2,
    name: "Меринов Артём Вячеславович",
    spec: "Cпециализация: Врач-Нарколог",
    expirience: "Опыт работы: 12 лет",
  },
  {
    src: temp3,
    name: "Меринов Артём Вячеславович",
    spec: "Cпециализация: Врач-Нарколог",
    expirience: "Опыт работы: 12 лет",
  },
  {
    src: temp4,
    name: "Меринов Артём Вячеславович",
    spec: "Cпециализация: Врач-Нарколог",
    expirience: "Опыт работы: 12 лет",
  },
];

export default function Slider({
  slides = demoSlides,
  initialIndex = 0,
  loop = true,
  className = "",
}: SliderProps) {
  const [index, setIndex] = useState(initialIndex);

  const total = slides.length;
  const current = slides[index] ?? slides[0];

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => {
        const next = i + dir;
        if (loop) return (next + total) % total;
        return Math.min(Math.max(next, 0), total - 1);
      });
    },
    [loop, total]
  );

  const prev = () => go(-1);
  const next = () => go(1);

  const variants = useMemo(
    () => ({
      enter: { opacity: 0, y: 20 },
      center: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    }),
    []
  );

  const cardWidth = 360;
  const gap = 20;

  return (
    <div
      className={
        "relative flex w-full mx-auto gap-24 py-6 overflow-hidden " +
        className
      }
    >
      <div className="flex flex-col gap-12 flex-shrink-0">
        <h2 className="text-[52px] font-semibold max-w-md leading-none text-[#383838]">
          Медицинский персонал
        </h2>
        <div className="min-h-[150px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-2 bg-[#F1F8FD] px-8 py-6 rounded-2xl"
            >
              <h2 className="font-semibold text-2xl text-[#383838]">{current.name}</h2>
              <h3 className="text-lg text-[16px]">{current.spec}</h3>
              <p className="text-gray-500">{current.expirience}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-2.5 mt-12">
          <button
            onClick={prev}
            aria-label="Назад"
            className="inline-flex items-center justify-center rounded-full pl-[21px] pr-[23px] py-[19px] bg-[#0DA3FF] hover:cursor-pointer hover:bg-[#34B2FF] transition"
          >
            <img src={leftArr} />
          </button>
          <button
            onClick={next}
            aria-label="Вперёд"
            className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:cursor-pointer hover:bg-[#34B2FF] transition"
          >
            <img src={rightArr} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * (cardWidth + gap)}px` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[360px] h-[460px] rounded-2xl shadow-xl shadow-[#B4CCDD] bg-white overflow-hidden"
            >
              <img
                src={slide.src}
                alt={slide.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}