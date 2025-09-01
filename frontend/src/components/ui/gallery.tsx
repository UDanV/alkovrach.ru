import type { GalleryImage, GalleryProps } from "@/types/Gallery";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import temp from '@/assets/woman-img02.png'
import temp2 from '@/assets/temp.png'
import temp3 from '@/assets/temp2.png'
import temp4 from '@/assets/temp3.png'
import leftArr from '@/assets/left-arr.svg'
import rightArr from '@/assets/right-arr.svg'

const demoImages: GalleryImage[] = [
  { src: `${temp}`, alt: "Женщина" },
  { src: `${temp2}`, alt: "Кошка" },
  { src: `${temp3}`, alt: "Кошка" },
  { src: `${temp4}`, alt: "Кошка" },
];

export default function Gallery({
  images = demoImages,
  initialIndex = 0,
  showCounter = true,
  loop = true,
  transitionMs = 300,
  className = "",
}: GalleryProps) {
  const [index, setIndex] = useState<number>(
    Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0))
  );
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = images.length;
  const current = images[index] ?? images[0];

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((i) => {
        const next = i + dir;
        if (loop) {
          return (next + total) % total;
        }
        return Math.min(Math.max(next, 0), total - 1);
      });
    },
    [loop, total]
  );

  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const variants = useMemo(
    () => ({
      enter: (dir: 1 | -1) => ({ x: dir * 40, opacity: 0 }),
      center: { x: 0, opacity: 1 },
      exit: (dir: 1 | -1) => ({ x: -dir * 40, opacity: 0 }),
    }),
    []
  );

  return (
    <div
      className={
        "relative w-full max-w-2xl max-h-max m-auto aspect-[3/2] overflow-hidden rounded-2xl " +
        className
      }
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={index}
          src={current?.src}
          alt={current?.alt ?? `Фото ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover select-none"
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          variants={variants}
          transition={{ duration: transitionMs / 1000, ease: "easeOut" }}
          draggable={false}
        />
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t via-black/0 to-black/10" />

      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20 bg-white rounded-full p-1">
        {showCounter && (
          <div className="pointer-events-auto text-white/90 text-sm px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
            {index + 1} / {total}
          </div>
        )}
        <div className="pointer-events-auto grid grid-flow-col gap-1 w-26 lg:w-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущее фото"
            className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:cursor-pointer hover:bg-[#34B2FF] transition"
          >
            <img src={ leftArr }/>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Вперёд"
            className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:cursor-pointer hover:bg-[#34B2FF] transition"
          >
            <img src={rightArr} />
          </button>
        </div>
      </div>
    </div>
  );
}
