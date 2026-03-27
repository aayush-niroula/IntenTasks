import type { FC } from "react";
import type { CardType } from "../types";

interface CardProps extends CardType {
  onPrev?: () => void;
  onNext?: () => void;
}

export const Card: FC<CardProps> = ({
  title,
  subtitle,
  description,
  image,
  bgColor,
  imagePosition = 'left',
  enableHoverEffect,
  hoverImage,
  hoverText,
  onPrev,
  onNext
}) => {
  const isLeft = imagePosition === 'left';

  return (
    <div 
      className={`relative w-[592px] h-[341px] overflow-hidden group ${enableHoverEffect ? "cursor-pointer" : ""}`}
      style={{
        borderRadius: '30px',
        clipPath: 'inset(0 0 0 0 round 60px)'
      }}
    >
      <div
        className={`
          absolute inset-0 flex items-center transition-all duration-500
          ${enableHoverEffect ? "group-hover:opacity-0 group-hover:scale-95" : "opacity-100"}
        `}
        style={{ backgroundColor: bgColor }}
      >
        <div className="p-0 flex items-center w-full h-full relative">
          {isLeft ? (
            <>
              <img
                className="absolute w-[43.48%] h-[99.29%] top-[2.93%] left-[-13.68%]"
                alt={title}
                src={image}
              />
              <div className="flex h-[225px] ml-[206px] w-[351px] flex-col justify-center gap-4">
                <h2 className="text-[38px] font-bold text-white leading-tight">{title}</h2>
                <p className="text-[24px] font-medium text-white/90">{subtitle}</p>
                <p className="text-[18px] text-white/80 leading-relaxed">{description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex h-[225px] ml-12 w-[351px] flex-col justify-center gap-4 text-white">
                <h2 className="text-[38px] font-bold">{title}</h2>
                <p className="text-[24px] font-medium">{subtitle}</p>
                <p className="text-[18px] opacity-80">{description}</p>
              </div>
              <img
                className="absolute w-[43.48%] h-[99.29%] top-[2.93%] right-[-13.68%]"
                alt={title}
                src={image}
              />
            </>
          )}
        </div>
      </div>

      {enableHoverEffect && (
        <div
          className="
            absolute inset-0 z-20 
            opacity-0 translate-x-[-110%] 
            group-hover:opacity-100 group-hover:translate-x-0
            transition-all duration-700 ease-in-out
            flex flex-col items-center
          "
          style={{ backgroundColor: bgColor }}
        >

          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-end pr-5 z-40">
             <button 
                onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
             >
                <span className="text-2xl font-bold text-gray-800">←</span>
             </button>
          </div>

    
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full flex items-center justify-start pl-5 z-40">
             <button 
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
             >
                <span className="text-2xl font-bold text-gray-800">→</span>
             </button>
          </div>

 <div className="relative w-full h-full flex items-center">
            {isLeft ? (
              <div className="flex items-center w-full px-20">
                <div className="w-1/2 h-full flex items-end">
                   <img src={hoverImage} className="h-[105%] w-auto object-contain" alt="" />
                </div>
                <div className="w-1/2 text-white pl-4">
                  <h2 className="text-2xl font-extrabold leading-tight">
                    {hoverText}
                  </h2>
                </div>
                <div className="absolute top-12 left-20 w-16 h-16 opacity-80 ">
                <img src="/wow-image.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-16 right-20 w-16 h-16 opacity-80 ">
                <img src="/wow-image.png" alt="" className="w-full h-full object-contain" />
            </div>
              </div>
            ) : (

              <div className=" flex flex-col items-center w-full h-full pt-8 px-8 text-center">
                <div className="relative z-30 text-white max-w-[300px]">
                  <h2 className="text-2xl font-extrabold leading-tight">
                    {hoverText}
                  </h2>
                </div>
                <div className="absolute bottom-0 inset-x-0 flex justify-center items-end">
                  <img src={hoverImage} className="h-[85%] w-auto object-contain" alt="" />
                </div>
                <div className="absolute top-12 left-20 w-16 h-16 opacity-80 ">
                <img src="/wow-image.png" alt="" className="w-full h-full object-contain" />
            </div>
            <div className="absolute bottom-16 right-20 w-16 h-16 opacity-80 ">
                <img src="/wow-image.png" alt="" className="w-full h-full object-contain" />
            </div>
              </div>    
            )}
          </div>
        </div>
      )}
    </div>
  );
};


            
export default Card;