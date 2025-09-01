import { useState } from "react";
import logo from '@/assets/logo.svg';
import Button from '@/components/ui/button';
import burger from '@/assets/burger.svg';
import CallRequestModal from "../ui/requestModal";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="w-full relative z-50">
      <CallRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <div className="bg-[#D0E8F9] text-[#577F9C] text-center">
        <p className="text-[13px] lg:text-[16px] p-2 lg:p-4 font-normal">Имеются противопоказания, необходимо проконсультироваться со специалистом 18+</p>
      </div>

      <div className="flex max-w-[1200px] pr-4 justify-between items-center mx-auto py-2 relative">
        <div className='max-w-44'>
          <img className='w-auto' src={logo} alt="Лого" />
        </div>

        <nav className="hidden lg:flex items-center gap-[30px] text-gray-700">
          <a href="#services" className="hover:text-[#0DA3FF] transition-colors">Услуги</a>
          <a href="#stages" className="hover:text-[#0DA3FF] transition-colors">Этапы лечения</a>
          <a href="#about" className="hover:text-[#0DA3FF] transition-colors">О нас</a>
          <a href="#reviews" className="hover:text-[#0DA3FF] transition-colors">Отзывы</a>
          <a href="#contacts" className="hover:text-[#0DA3FF] transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:flex items-center gap-[30px]">
          <div className="text-left">
            <a href="tel:+79061800041" className="text-[#0DA3FF] hover:text-blue-400 font-semibold text-[18px] transition-colors">
              8 (906) 180-00-41
            </a>
            <p className="text-sm text-[#929292]">Работаем 24/7</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            filled={true}
          >
            Заказать звонок
          </Button>
        </div>

        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <img src={burger} /> : <img src={burger} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#F1F8FD] shadow-md z-50">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#services" onClick={() => setMobileOpen(false)} className="hover:text-[#0DA3FF] transition-colors">Услуги</a>
            <a href="#stages" onClick={() => setMobileOpen(false)} className="hover:text-[#0DA3FF] transition-colors">Этапы лечения</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="hover:text-[#0DA3FF] transition-colors">О нас</a>
            <a href="#reviews" onClick={() => setMobileOpen(false)} className="hover:text-[#0DA3FF] transition-colors">Отзывы</a>
            <a href="#contacts" onClick={() => setMobileOpen(false)} className="hover:text-[#0DA3FF] transition-colors">Контакты</a>

            <div className="mt-4">
              <a href="tel:+79061800041" className="block text-[#0DA3FF] font-semibold text-[18px] mb-1">
                8 (906) 180-00-41
              </a>
              <p className="text-sm text-[#929292] mb-2">Работаем 24/7</p>
              <Button
                filled={true}
                onClick={() => {
                    setMobileOpen(false)  
                    setIsModalOpen(true)
                  }
                }
                className="w-full"
              >
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;