type SectionHeaderProps = {
  title: string;
  highlight: string;
  note?: string;
};

export default function SectionHeader({
  title,
  highlight,
  note,
}: SectionHeaderProps) {
  return (
    <div className="mb-6">
      {note && (
        <p className="text-[32px] text-center font-[Fustat] mb-2">{note}</p>
      )}
<div className="flex flex-col gap-4 justify-center">
      <h2 className="text-[24px] font-[Outfit]">
        {title}{" "}
        <p className="font-bold text-[32px]">Dive into<span className="text-[#1DA077] text-[32px] font-bold">
          {highlight}
        </span></p>
      </h2>
</div>
    </div>
  );
}