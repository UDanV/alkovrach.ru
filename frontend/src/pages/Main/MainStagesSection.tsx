import stagesCount from '@/assets/stages-count.svg'
import diagnostics from '@/assets/diagnostics.svg'
import plan from '@/assets/plan.svg'
import recovery from '@/assets/recovery.svg'
import symptoms from '@/assets/symptoms.svg'
import consult from '@/assets/consult.svg'

const MainStagesSection = () => {
    return (
        <div className="max-w-[1200px] lg:mx-auto px-4" id="stages">
            <h2 className="text-[32px] sm:text-[52px] font-semibold mb-6 sm:mb-10">
                Этапы лечения
            </h2>

            <div className="hidden sm:flex justify-between lg:justify-normal lg:gap-41 overflow-x-auto no-scrollbar mb-6">
                {[1, 2, 3, 4, 5].map((num) => (
                    <h1
                    key={num}
                    className="text-[36px] sm:text-[48px] md:text-[62px] text-[#E8EFF3] flex-shrink-0"
                    >
                    {String(num).padStart(2, "0")}
                    </h1>
                ))}
            </div>

            <div className="w-full hidden sm:block">
                <img src={stagesCount} alt="Этапы" className="w-full object-contain" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
                <div className="flex items-center gap-4 justify-start md:justify-normal">
                    <img src={diagnostics} alt="" className="w-10 h-10" />
                    <p className="text-[14px] sm:text-[16px] font-medium text-[#383838]">
                        Диагностика состояния
                    </p>
                    <p className="block ml-auto sm:hidden text-[36px] sm:text-[62px] text-[#E8EFF3] flex-shrink-0">01</p>
                </div>
                <div className="flex items-center gap-4 justify-start md:justify-normal">
                    <img src={plan} alt="" className="w-10 h-10" />
                    <p className="text-[14px] sm:text-[16px] font-medium text-[#383838]">
                        Составление плана лечения
                    </p>
                    <p className="block ml-auto sm:hidden text-[36px] sm:text-[62px] text-[#E8EFF3] flex-shrink-0">02</p>
                </div>
                <div className="flex items-center gap-4 justify-start md:justify-normal">
                    <img src={symptoms} alt="" className="w-10 h-10" />
                    <p className="text-[14px] sm:text-[16px] font-medium text-[#383838]">
                        Снятие симптомов
                    </p>
                    <p className="block ml-auto sm:hidden text-[36px] sm:text-[62px] text-[#E8EFF3] flex-shrink-0">03</p>
                </div>
                <div className="flex items-center gap-4 justify-start md:justify-normal">
                    <img src={recovery} alt="" className="w-10 h-10" />
                    <p className="text-[14px] sm:text-[16px] font-medium text-[#383838]">
                        Восстановление организма
                    </p>
                    <p className="block ml-auto sm:hidden text-[36px] sm:text-[62px] text-[#E8EFF3] flex-shrink-0">04</p>
                </div>
                <div className="flex items-center gap-4 justify-start md:justify-normal">
                    <img src={consult} alt="" className="w-10 h-10" />
                    <p className="text-[14px] sm:text-[16px] font-medium text-[#383838]">
                        Бесплатные консультации
                    </p>
                    <p className="block ml-auto sm:hidden text-[36px] sm:text-[62px] text-[#E8EFF3] flex-shrink-0">05</p>
                </div>
            </div>
        </div>
    )
}

export default MainStagesSection