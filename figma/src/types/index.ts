export type CardType = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bgColor: string;
  imagePosition?: 'left' | 'right' | string;
  enableHoverEffect?:boolean;
  hoverImage?:string;
  hoverText?:string
};