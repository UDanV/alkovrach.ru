import { useEffect, useState } from "react";
import { submitConsultation } from "@/api/submit";
import Alert from "@/components/ui/alert";
import close from '@/assets/close.svg'
import { motion } from "framer-motion";

interface CallRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallRequestModal: React.FC<CallRequestModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertMessage("");

    try {
      const response = await submitConsultation({ name, phone });
      if (response.success) {
        setAlertType("success");
        setAlertMessage(response.message || "Заявка отправлена!");
        setSubmitted(true);

        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setName("");
          setPhone("");
        }, 1500);
      } else {
        setAlertType("error");
        setAlertMessage(response.message || "Ошибка при отправке заявки");
      }
    } catch {
      setAlertType("error");
      setAlertMessage("Ошибка при отправке данных");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="bg-[#EBF5FC] rounded-3xl p-6 sm:p-10 max-w-fit w-full relative"
        >
        <button
          className="absolute top-4 w-10 h-10 right-4 text-gray-500 hover:text-gray-700 font-bold"
          onClick={onClose}
        >
          <img src={close} className="cursor-pointer " alt="" />
        </button>

        <h2 className="text-[52px] font-semibold mb-2 text-[#383838]">Заказать звонок</h2>
        <p className="mb-6 text-[#383838] text-xl">Просто оставьте заявку и мы вам перезвоним в ближайшее время</p>

        {alertMessage && <Alert type={alertType} message={alertMessage} />}

        {!submitted && (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="p-4 rounded-full text-[#9CB4C5] bg-white w-full"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^\d+]/g, "");
                  setPhone(value);
                }}
                placeholder="+7 999-999-99-99"
                className="p-4 rounded-full text-[#9CB4C5] bg-white w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-4">
              <button className="bg-[#53BCFC] text-white font-semibold py-4 px-6 max-w-md rounded-full hover:bg-gray-100 transition w-full">
                Получить консультацию
              </button>
              <p className="text-[13px] font-regular text-[#9CB4C5] lg:text-left">
                Нажимая кнопку «Получить консультацию», вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default CallRequestModal;