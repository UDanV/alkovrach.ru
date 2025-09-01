import Button from "@/components/ui/button";
import WomanImg from '@/assets/woman-img01.png';
import blurredImg from '@/assets/blurred-hero.png';
import mark from '@/assets/marked.svg';
import { useState } from "react";
import CallRequestModal from "@/components/ui/requestModal";

const MainHeroSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="bg-[#F1F8FD] relative pt-14 overflow-hidden">
            <CallRequestModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            ></CallRequestModal>

            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 px-4 md:px-0">
                
                <div className="text-[#383838] flex flex-col items-start max-w-xl z-20 mb-10 md:mb-0">
                    <div className="leading-none mb-6 md:mb-10">
                        <h1 className="text-[36px] md:text-[62px] font-semibold">
                            Срочный вызов врача-нарколога
                        </h1>
                    </div>

                    <ul className="text-base md:text-lg mb-6 md:mb-[70px] flex flex-col gap-3 md:gap-[15px]">
                        <li className="flex items-center gap-2 w-full">
                            <img className="w-5 h-5 flex-shrink-0" src={mark} />
                            <span className="flex-1 2xl:whitespace-nowrap overflow-hidden text-ellipsis">
                                Сохраняем анонимность, не требуем паспорт и не ставим на учёт
                            </span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img className="w-5 h-5 flex-shrink-0" src={mark} />
                            <span>Помощь квалифицированного врача на дому</span>
                        </li>                    
                        <li className="flex items-center gap-2">
                            <img className="w-5 h-5 flex-shrink-0" src={mark} />
                            <span>Приедем на адрес за 20 минут</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img className="w-5 h-5 flex-shrink-0" src={mark} />
                            <span>Первичная консультация - бесплатно</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full">
                        <Button 
                            filled={true} 
                            className="w-full sm:w-auto"
                            onClick={() => setIsModalOpen(true)}
                        >
                            Получить помощь
                        </Button>
                        <Button 
                            onClick={() => setIsModalOpen(true)}
                            filled={false} 
                            className="w-full sm:w-auto"
                        >
                                Заказать звонок
                        </Button>
                    </div>
                </div>

                <div className="relative w-full md:w-auto flex justify-center md:justify-end">
                    <img className="relative z-10 w-full max-w-xs md:max-w-none" src={WomanImg} alt="Woman01" />
                </div>
            </div>

            <img
                className="absolute top-160 md:top-0 md:-right-10 h-full object-cover pointer-events-none"
                src={blurredImg}
                alt="Blurred background"
            />
        </div>
    );
};

export default MainHeroSection;