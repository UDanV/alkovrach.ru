import serviceStandart from '@/assets/service-standart.png'
import serviceReinforced from '@/assets/service-reinforced.png'
import serviceRecovery from '@/assets/service-recovery.png'
import serviceMax from '@/assets/service-max.png'
import serviceCleaning from '@/assets/service-cleaning.png'
import serviceToHome from '@/assets/service-tohome.png'
import Button from '@/components/ui/button'
import { useState } from 'react'
import CallRequestModal from '@/components/ui/requestModal'

const MainServicesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return (
        <div className="max-w-[1200px] lg:mx-auto px-4" id="services">
            <CallRequestModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            ></CallRequestModal>
            <h2 className="text-[32px] md:text-[52px] font-semibold mb-8 md:mb-10">
                Наши услуги
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-[#383838]">
                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceStandart} alt="" className="mt-2.5 object-cover" />
                    
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Cтандартная терапия</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении
                        </p>
                    </div>
                    
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 2400 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>

                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceReinforced} alt="" className="mt-2.5 object-cover" />
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Усиленная терапия</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Рекомендуется для облегчения похмелья и прерывания запоев длительностью до недели
                        </p>
                    </div>
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 5800 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>

                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceRecovery} alt="" className="mt-2.5 object-cover" />
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Восстановление +</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении
                        </p>
                    </div>
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 15 800 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>

                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceMax} alt="" className="mt-2.5 object-cover" />
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Максимальная терапия</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении
                        </p>
                    </div>
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 18 800 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>

                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceCleaning} alt="" className="mt-2.5 object-cover" />
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Кодирование +</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Рекомендуется для облегчения похмелья и прерывания запоев длительностью до недели
                        </p>
                    </div>
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 3200 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>

                <div className="bg-[#F1F8FD] rounded-3xl flex flex-col items-center">
                    <img src={serviceToHome} alt="" className="mt-2.5 object-cover" />
                    <div className="p-5 flex flex-col gap-3 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold">Выезд нарколога на дом</h3>
                        <p className="text-[14px] md:text-[16px] text-[#666869]">
                            Для облегчения похмельного синдрома и прерывания запоя. А также при алкогольном отравлении
                        </p>
                    </div>
                    <div className="flex items-center border border-[#0DA3FF] rounded-full justify-between mb-5 w-[90%]">
                        <p className="text-[#0DA3FF] font-semibold pl-2 lg:pl-10">от 3500 ₽</p>
                        <Button
                            filled={true}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Начать лечение
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainServicesSection