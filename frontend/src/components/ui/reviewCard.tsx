import { useState } from "react";
import quote from '@/assets/quote.svg';
import ReviewModal from "@/components/ui/reviewModal";

export interface Review {
  name: string;
  text: string;
  date: string;
}

const ReviewCard: React.FC<Review> = ({ name, text, date }) => {
  const MAX_LENGTH = 200;
  const isLong = text.length > MAX_LENGTH;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayText = isLong ? text.slice(0, MAX_LENGTH) + "..." : text;

  return (
    <>
      <div className="bg-[#F1F8FD] rounded-2xl px-9 py-8 max-w-xl h-full flex flex-col">
        <div className="border-b border-[#DDEBF4] pb-4 mb-4 flex-1 relative">
          <img src={quote} className="relative float-right -top-7" alt="" />
          <h3 className="uppercase font-semibold">{name}</h3>
          <p className="text-[#383838] mt-2">{displayText}</p>

          {isLong && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#0DA3FF] cursor-pointer text-sm font-medium mt-2"
            >
              Читать полностью
            </button>
          )}
        </div>
        <p className="text-sm text-[#7192A9]">{date}</p>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        text={text}
        date={date}
      />
    </>
  );
};

export default ReviewCard;