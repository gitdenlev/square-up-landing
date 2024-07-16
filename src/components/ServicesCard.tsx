import Button from "./Button";
import servicesCards from "../data/servicesCards";

const ServicesCard = () => {
  return (
    <>
      {servicesCards.map((card, index) => (
        <div className="mt-[30px] p-[30px]" key={index}>
          <div className="flex items-center">
            <div
              className="rounded-[6px] border-solid border-[#2E2E2E] bg-[linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158,
            255, 0, 0.00) 32.16%), linear-gradient(180deg, #242424 0%, rgba(36,
            36, 36, 0.00) 100%)]"
            >
              <img src={card.icon} alt="" />
            </div>
            <h2 className="ml-[14px] text-absolute_white text-[20px] font-semibold">
              {card.title}
            </h2>
          </div>
          <div className="mt-[24px]">
            <p className="text-grey_90 text-[14px]">{card.description}</p>
            <Button styles="text-center w-full bg-grey_15 rounded-[6px] mt-[24px] py-[14px] px-[16px] flex justify-center items-center gap-[10px] text-absolute_white font-medium">
              Learn More
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesCard;
