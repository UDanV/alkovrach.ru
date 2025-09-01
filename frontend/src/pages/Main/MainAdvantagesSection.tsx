import { submitConsultation } from '@/api/submit';
import Alert from '@/components/ui/alert';
import womanImg from '@/assets/woman-img03.png'
import { useState } from 'react';

const MainAdvantagesSection = () => {
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
        <div className='bg-[#F1F8FD] pb-[140px]'>
            <div className="max-w-[1200px] mx-auto text-[#383838] mt-[140px] px-4 md:px-0">
                <div className='flex flex-col lg:flex-row gap-8 lg:gap-15 items-end w-full'>
                    <img 
                        src={womanImg} 
                        alt="" 
                        className="max-h-sm object-cover rounded-2xl"
                    />
                    <div className='flex flex-col space-y-6 lg:space-y-19'>
                        <h2 className='text-[32px] sm:text-[52px] font-semibold lg:max-w-md mb-6 leading-none'>
                            Преимущества вызова нарколога
                        </h2>
                        <p className='text-[16px]'>
                            Обслуживание наркологом на дому имеет ряд плюсов, особенно для тех, кто боится огласки.
                            В этой ситуации обращение в частную наркологию максимально отвечает интересам пациента или его родственников. 
                        </p>
                        <h3 className='font-semibold text-2xl mb-4'>Преимущества нашей клиники:</h3>
                        <ul className='flex flex-col space-y-6 text-[16px]'>
                            <li className='border-l-2 border-[#0DA3FF] pl-2'>Нарколог на дом прибывает конфиденциально, автомобиль не имеет опознавательных знаков специализированного центра.</li>
                            <li className='border-l-2 border-[#0DA3FF] pl-2'>Обрыв запойного состояния или снятие абстинентного синдрома проводятся под контролем профессионала, что исключает риски появления осложнений.</li>
                            <li className='border-l-2 border-[#0DA3FF] pl-2'>Зависимый и его родственники бесплатно получают развернутую консультацию по окончании процедур. Если необходимо, доктор оставляет медикаменты на несколько дней приёма.</li>
                            <li className='border-l-2 border-[#0DA3FF] pl-2'>Мы не передаем личных данных наших клиентов для постановки на учёт в наркологический диспансер. Обращение к нам для пациентов полностью анонимно.</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-[linear-gradient(92deg,#0095F1_0%,#0DA3FF_103.58%)] text-white mt-10 sm:mt-15 rounded-3xl flex flex-col lg:flex-row items-stretch overflow-hidden">
                    <div className="relative flex-1 flex flex-col justify-center p-6 lg:p-12 mb-6 lg:mb-0">

                        <div className="hidden xl:block absolute top-0 left-144 h-full border-r-4 border-dashed border-[#73C7FB]"></div>

                        <div className="relative space-y-3.5">
                            <p className="uppercase text-[24px] sm:text-[32px] font-semibold max-w-lg">Больной не хочет лечиться?</p>
                            <p>Врачами создана эффективная технология мотивации пациентов согласиться на терапию.</p>
                            <p>Метод показывает высокие результаты — 8 из 10 людей добровольно решаются начать лечение от зависимости.</p>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between p-6 lg:p-12 relative space-y-4">

                        {alertMessage && <Alert type={alertType} message={alertMessage} duration={5000} />}

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                            <div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
                                <input
                                    type="text"
                                    placeholder="Ваше имя"
                                    value={ name }
                                    onChange={(e) => setName(e.target.value)}
                                    className="p-4 rounded-full text-white bg-[#53BCFC] flex-1"
                                />
                                <input
                                    type="tel"
                                    placeholder="+7 999-999-99-99"
                                    value={ phone }
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^\d+]/g, "");
                                        setPhone(value);
                                    }}                                    
                                    className="p-4 rounded-full text-white bg-[#53BCFC] flex-1"
                                />
                            </div>
                            <button className="bg-white text-[#0DA3FF] font-semibold py-4 rounded-full hover:bg-gray-100 transition">
                                Получить консультацию
                            </button>
                        </form>
                        <p className="text-xs text-[#90D3FD]">
                            Нажимая кнопку «Получить консультацию», вы соглашаетесь с <span className='underline'>политикой конфиденциальности</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainAdvantagesSection