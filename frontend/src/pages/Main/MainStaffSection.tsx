import Slider from "@/components/ui/slider"
import SliderMobile from "@/components/ui/sliderMobile"
import { demoSlides } from "@/components/ui/slider";

const MainStaffSection = () => {
  return (
    <div className="2xl:pl-90 overflow-hidden">
      <div className="hidden md:block">
        <Slider />
      </div>

      <div className="block md:hidden">
        <SliderMobile slides={ demoSlides } />
      </div>
    </div>
  )
}

export default MainStaffSection