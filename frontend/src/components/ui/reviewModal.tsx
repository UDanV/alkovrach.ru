import { motion } from "framer-motion";
import { useEffect } from "react";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  text: string;
  date: string;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, name, text, date }) => {

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="bg-[#EBF5FC] rounded-2xl p-6 max-w-xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <h3 className="text-xl uppercase font-semibold mb-2">{name}</h3>
        <p className="text-[#383838] mb-4 pb-5 border-b border-[#DDEBF4]">{text}</p>
        <p className="text-sm text-[#7192A9]">{date}</p>
      </motion.div>
    </div>
  );
};

export default ReviewModal;