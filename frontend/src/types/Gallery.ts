export type GalleryImage = {
  src: string;
  alt?: string;
};

export type GalleryProps = {
  images?: GalleryImage[];
  initialIndex?: number;
  /** Frst id img */
  
  showCounter?: boolean;
  loop?: boolean;
  transitionMs?: number;
  className?: string;
};