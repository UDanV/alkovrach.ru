import { submitConsultation } from '@/api/submit';
import womanImg from '@/assets/woman-img04.png'
import { useState } from 'react';
import Alert from '@/components/ui/alert';

const Footer = () => {

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState<"success" | "error">("success");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setAlertMessage("");

  try {
      const response = await submitConsultation({ name, phone });
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

  return (
    <>
      <div className="bg-[linear-gradient(92deg,#0095F1_0%,#0DA3FF_103.58%)] mt-[140px]" id='contacts'>
        <div className="max-w-[1200px] text-white mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 px-4 pt-4 lg:p-0">
          
          <div className='flex-1 flex flex-col justify-center w-full lg:max-w-[600px]'>
            <h2 className="font-semibold text-[32px] sm:text-[52px] mb-4 lg:mb-6 text-center lg:text-left">Остались вопросы?</h2>
            <p className="font-medium text-[16px] sm:text-[20px] mb-6 lg:mb-10 text-center lg:text-left">
              Просто оставьте заявку и мы вам перезвоним в ближайшее время
            </p>
                        
            {alertMessage && <Alert type={alertType} message={alertMessage} duration={5000} />}

            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="p-4 rounded-full text-white bg-[#53BCFC] w-full"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^\d+]/g, "");
                    setPhone(value);
                  }}    
                  placeholder="+7 999-999-99-99"
                  className="p-4 rounded-full text-white bg-[#53BCFC] w-full"
                />
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-4">
                <button className="bg-white text-[#0DA3FF] font-semibold py-4 px-6 rounded-full hover:bg-gray-100 transition w-full">
                  Получить консультацию
                </button>
                <p className="text-[13px] font-medium text-[#8FD2FC] lg:text-left">
                  Нажимая кнопку «Получить консультацию», вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto -mt-10">
            <img src={womanImg} alt="" className="w-full h-auto max-w-[400px] mx-auto lg:mx-0" />
          </div>
        </div>
      </div>

      <div className='bg-[#232323] text-center w-full text-[#9C9C9C] text-[12px] p-6 lg:p-8 flex flex-col space-y-2.5 leading-normal'>
        <p>Услуги предоставляются ООО «ДЕТОКС» по лицензии Л041-01177-91/00561129 от 02.02.2022 г. ОГРН - 1182375001511; ИНН: 2312268085</p>
        <p>295017, Республика Крым, г. Симферополь, ул. Киевская/пр-кт Победы, д. 75/1 (литера А)</p>
        <p>350000, Краснодарский край, г. Краснодар, тер Западный внутригородской округ, ул. Северная, д. 324, кв. 8, 9, 9/1, 10, 11, 3-й этаж</p>
        <p>Информация, предоставляемая на данном сайте, не замещает посещения вашего лечащего доктора. Она носит исключительно <br /> информационный характер и не является публичной офертой.</p>
      </div>

      <div className='bg-[#1A1A1A] text-center items-center w-full text-white text-[12px] p-2.5 flex flex-col space-y-2.5'>
        <p className='max-w-50 lg:max-w-full lg:text-center'>Имеются противопоказания. Проконсультируйтесь с врачом.</p>
        <small>Powered by <a href='https://github.com/UDanV' className='underline'>UDanV</a></small>
      </div>
    </>
  )
}

export default Footer