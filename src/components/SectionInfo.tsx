interface SectionInfoProps {
  title: string;
  description: string;
}

const SectionInfo: React.FC<SectionInfoProps> = ({ title, description }) => {
  return (
    <div className="px-[16px] py-[50px] text-center border-t border-b border-solid border-grey_15">
      <h1 className="text-absolute_white text-[31px] font-medium">{title}</h1>
      <p className="text-grey_90 text-[14px] mt-[6px]">{description}</p>
    </div>
  );
};

export default SectionInfo;
