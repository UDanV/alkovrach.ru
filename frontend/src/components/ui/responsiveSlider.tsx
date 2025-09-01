import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import type { ReactNode } from "react";
import { useEffect } from "react";

type ResponsiveSliderProps = {
  children: ReactNode[];
  className?: string;
};

export default function ResponsiveSlider({ children, className }: ResponsiveSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 16 },
    loop: true,
    breakpoints: {
      "(min-width: 1024px)": {
        disabled: true,
      },
    },
  });

  useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [children]);

  return (
    <div ref={sliderRef} className={`keen-slider ${className ?? ""}`}>
      {children.map((child, i) => (
        <div className="keen-slider__slide" key={i}>
          {child}
        </div>
      ))}
    </div>
  );
}
