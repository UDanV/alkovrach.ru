import MainAboutSection from "./MainAboutSection"
import MainAdvantagesSection from "./MainAdvantagesSection"
import MainFAQSection from "./MainFAQSection"
import MainHeroSection from "./MainHeroSection"
import MainServicesSection from "./MainServicesSection"
import MainStaffSection from "./MainStaffSection"
import MainStagesSection from "./MainStagesSection"

const Main = () => {
    return (
        <div className="flex flex-col gap-[140px]">
            <MainHeroSection />
            <MainServicesSection />
            <MainStagesSection />
            <MainAboutSection />
            <MainStaffSection />
            <MainAdvantagesSection />
            <MainFAQSection />
        </div>
    )
}

export default Main