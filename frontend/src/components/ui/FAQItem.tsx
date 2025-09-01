import React from "react";
import plus from '@/assets/plus.svg';
import minus from '@/assets/minus.svg';
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full bg-white shadow-[#B4CCDD] drop-shadow-md py-6 px-7 rounded-2xl">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="flex-1 min-w-0 text-lg font-semibold text-[#383838] cursor-pointer">
          {question}
        </span>

        <img src={isOpen ? minus : plus} alt={isOpen ? "Collapse" : "Expand"} className="h-5 w-5" />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-6 text-[#6A6A6A] text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;