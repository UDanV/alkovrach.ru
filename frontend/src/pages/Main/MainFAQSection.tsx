import FAQItem from "@/components/ui/FAQItem"
import { submitQuestion } from '@/api/submit';
import ReviewsCarousel from "@/components/ui/reviewsCarousel"
import { useState } from "react"
import Alert from "@/components/ui/alert";

const MainFAQSection = () => {
    const [name, setName] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState<"success" | "error">("success");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlertMessage("");

    try {
        const response = await submitQuestion({ name, question });
            if (response.success) {
                setAlertType("success");
                setAlertMessage(response.message || "Заявка отправлена!");
            } else {
                setAlertType("error");
                setAlertMessage(response.message || "Ошибка в отправке заявки");
            }
        } catch {
            setAlertType("error");
            setAlertMessage("Ошибка при отправке данных");
        }
    };

  const faqData = [
    {
      question: "Когда нужно обращаться в наркологическую клинику?",
      answer:
        "Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы оказать наркологическую.",
    },
    {
      question: "Сколько ждать приезда врача?",
      answer:
        "Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы оказать наркологическую.",
    },
    {
      question: "Какие методики используются для лечения?",
      answer:
        "Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы оказать наркологическую.",
    },
    {
      question: "Как сохранить анонимность при обращении?",
      answer:
        "Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы оказать наркологическую.",
    },
    {
      question: "Как сохранить анонимность при обращении?",
      answer:
        "Наши квалифицированные врачи и наркологи предлагают широкий спектр наркологических услуг включая стационарное лечение, кодирование, и многие другие виды лечения. Мы заботимся о каждом пациенте и гарантируем высокое качество нашей работы. Не стесняйтесь обращаться к нам в любое время, мы всегда готовы оказать наркологическую.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-[32px] sm:text-[52px] font-semibold mb-10 text-[#383838]">
        Частые вопросы и ответы
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8">
        <div className="flex-1 min-w-0 flex flex-col gap-2.5">
          {faqData.map((item, id) => (
            <FAQItem
              key={id}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === id}
              onClick={() => setActiveIndex(id)}
            />
          ))}
        </div>

        <div className="flex-none w-full lg:max-w-sm bg-[#F1F8FD] rounded-2xl py-6 px-7">
          <p className="text-[#383838] font-semibold text-xl">
            Задайте вопрос специалисту
          </p>

          {alertMessage && <Alert type={alertType} message={alertMessage} duration={5000} />}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-4">
            <input
              type="text"
              value={name}
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-full text-[#9CB4C5] bg-white"
            />
            <textarea
              placeholder="Ваш вопрос"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="p-4 rounded-3xl text-[#9CB4C5] bg-white resize-none h-36"
            />
            <button className="bg-[#0DA3FF] text-white font-semibold py-4 rounded-full hover:bg-blue-500 transition">
              Отправить
            </button>
          </form>

          <p className="text-xs text-[#9CB4C5] mt-4">
            Нажимая кнопку «Получить консультацию», вы соглашаетесь с{" "}
            <span className="underline">политикой конфиденциальности</span>
          </p>
        </div>
      </div>

      <div className="mt-12">
        <ReviewsCarousel />
      </div>
    </div>
  )
}

export default MainFAQSection