type StatCardProps = {
  title: string;
  count: number;
  description:string;
};

export default function StatCard({ title, count ,description}: StatCardProps) {
  return (
    <div
    
    className="bg-red-100 text-[#C33241] rounded-2xl p-4 w-[280px] h-[461px] flex flex-col justify-between rounded-[32px]">
      <div className="text-[32px] rotate-[-90deg] origin-left translate-y-40 ml-10">
        {title}
      </div>
      <p className="rotate-[-90deg] translate-y-[-20px]">{description}</p>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[150px] leading-none nohemi-heading flex items-start">
          {count}
          <span className="text-[60px] ml-1 align-top">+</span>
        </h1>

      </div>
    </div>
  );
}
