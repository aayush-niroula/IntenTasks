type CourseCardProps = {
  title: string;
  count: number;
  description: string;
};

export default function CourseCard({ title, count, description }: CourseCardProps) {
  return (
    <div
      className="bg-[#C33241] text-white p-8 h-[461px] w-full flex flex-col justify-between rounded-[32px]"
    >
    
      <div className="flex justify-end">
        <span className="text-[18px] font-[Outfit]">
          View all Courses →
        </span>
      </div>

      <div className="flex justify-center my-8">
        <img
          src="/icons.png"
          alt=""
          className="object-contain w-[420px] h-[90px]"
        />
      </div>

 
      <div className="flex items-end justify-center gap-8 px-4">
        <h1 className="text-[145px] leading-none font-bold nohemi-heading tracking-[-4px]">
          {count}
          <span className="text-[55px] ml-1 align-super">+</span>
        </h1>

        <div className="pb-4 max-w-[280px]">
          <p className="text-[32px] font-medium font-[Outfit] leading-tight">
            {title}
          </p>
          <p className="text-[17px] font-[Outfit] text-white/90 mt-2 leading-snug">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}