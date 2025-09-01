import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { demoSlides } from "./slider";

const SliderMobile = ({ slides }: { slides: typeof demoSlides }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.1,
      spacing: 12,
    },
    loop: true,
  });

  return (
    <div className="px-4">
      <h2 className="text-[36px] text-[#383838] sm:text-[44px] lg:text-[52px] font-semibold mb-6">
        Медицинский персонал
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="keen-slider__slide flex flex-col items-center"
          >
            <div className="w-[280px] h-[360px] rounded-2xl shadow-lg bg-white overflow-hidden">
              <img
                src={slide.src}
                alt={slide.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-left bg-[#F1F8FD] rounded-2xl px-5 py-4">
              <h2 className="font-semibold text-lg text-[#383838] leading-normal max-w-60">{slide.name}</h2>
              <p className="text-sm text-[#8B8E91]">{slide.spec}</p>
              <p className="text-sm text-[#8B8E91]">{slide.expirience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderMobile