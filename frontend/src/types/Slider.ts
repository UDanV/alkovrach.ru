export type Slide = {
  src: string;
  name: string;
  spec: string;
  expirience: string;
};

export type SliderProps = {
  slides?: Slide[];
  initialIndex?: number;
  loop?: boolean;
  className?: string;
};