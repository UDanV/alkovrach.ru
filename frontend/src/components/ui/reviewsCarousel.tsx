import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import leftArr from '@/assets/left-arr.svg';
import rightArr from '@/assets/right-arr.svg';
import type { Review } from "./reviewCard";
import ReviewCard from "./reviewCard";

const reviews: Review[] = [
  {
    name: "Инна",
    text: "Моему сыну 28 лет, но он начал злоупотреблять алкоголем, связался с компанией таких же неприятных ребят, бросил работу. Пришлось выводить его из запоя и отправлять на лечение, реабилитацию. Сотрудники центра сделали для нашей семьи очень многое, они вылечили моего ребенка от зависимости и помогли мне пережить этот сложный период.",
    date: "28.04.2023",
  },
  {
    name: "Алексей",
    text: "Очень благодарен врачам. Обратился за помощью в трудный момент — и получил поддержку. Прошел курс лечения и реабилитации, сейчас вернулся к нормальной жизни.",
    date: "15.05.2023",
  },
  {
    name: "Марина",
    text: "Моя сестра страдала от зависимости. Спасибо специалистам центра за профессионализм и человеческое отношение.",
    date: "02.06.2023",
  },
  {
    name: "Олег",
    text: "Прошёл программу восстановления, теперь вернулся на работу и снова общаюсь с семьёй. Спасибо!",
    date: "21.07.2023",
  },
];

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleNext = () => {
    if (currentIndex < reviews.length - (isDesktop ? 2 : 1)) {
      setDirection("right");
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("left");
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const visibleReviews = isDesktop
    ? reviews.slice(currentIndex, currentIndex + 2)
    : [reviews[currentIndex]];

  return (
    <div className="relative mx-auto overflow-hidden mt-[140px]" id="reviews">
      <div className="flex justify-center md:justify-start items-center gap-2.5 my-6">
        <h2 className="text-[52px] font-semibold text-[#383838]">Отзывы пациентов</h2>

        <div className="ml-auto hidden lg:flex gap-2.5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:bg-[#34B2FF] transition disabled:bg-[#97d6fd]"
          >
            <img src={leftArr} alt="Назад" className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= reviews.length - (isDesktop ? 2 : 1)}
            className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:bg-[#34B2FF] transition disabled:bg-[#97d6fd]"
          >
            <img src={rightArr} alt="Вперёд" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[400px] overflow-hidden">
        <motion.div
          key={currentIndex}
          initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex gap-4 w-full"
        >
          {visibleReviews.map((review, idx) => (
            <div key={currentIndex + idx} className={`w-full ${isDesktop ? "md:w-1/2" : ""}`}>
              <ReviewCard {...review} />
            </div>
          ))}
        </motion.div>
      </div>


      <div className="flex justify-center lg:hidden gap-2.5 pt-5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:bg-[#34B2FF] transition disabled:bg-[#97d6fd]"
        >
          <img src={leftArr} alt="Назад" className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= reviews.length - (isDesktop ? 2 : 1)}
          className="inline-flex items-center justify-center rounded-full pl-[23px] pr-[21px] py-[19px] bg-[#0DA3FF] hover:bg-[#34B2FF] transition disabled:bg-[#97d6fd]"
        >
          <img src={rightArr} alt="Вперёд" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;