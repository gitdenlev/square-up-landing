import advantages from "../data/advantages";

const AdvantagesCard = () => {
  return (
    <>
      {advantages.map((advantage, index) => (
        <div className="mt-[30px] p-[30px]" key={index}>
          <div className="flex items-center">
            <div
              className="rounded-[6px] border-solid border-[#2E2E2E] bg-[linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158,
            255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36,
            36, 36, 0.00) 100%)]"
            >
              <img src={advantage.icon} alt="" />
            </div>
            <h2 className="ml-[14px] text-absolute_white text-[20px] font-semibold">
              {advantage.title}
            </h2>
          </div>
          <div className="mt-[24px]">
            <p className="text-grey_90 text-[14px]">{advantage.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AdvantagesCard;
