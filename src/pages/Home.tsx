// Components
import Headear from "../components/Headear";
import AdvantagesCard from "../components/AdvantagesCard";
import Button from "../components/Button";
import ServicesCard from "../components/ServicesCard";
import Companies from "../components/Companies";
import SectionInfo from "../components/SectionInfo";
import clientsStaff from "../data/clientsStaff";

function Home() {
  return (
    <>
      <Headear />
      <div id="about" className="p-3 text-center">
        <h1 className="mt-12 text-3xl text-absolute_white">
          A Digital Product Studio that will Work
        </h1>
      </div>
      <div className="p-6">
        <div className="mt-[30px] py-[18px] px-5 flex text-center items-start gap-5 rounded-[8px] border border-solid border-grey_15 bg-[rgba(36, 36, 36, 0.20)] backdrop-blur-6">
          <p className="text-grey_60 text-[16px]">
            For startups, enterprise leaders, media & publishers, and social
            good.
          </p>
        </div>
      </div>
      {/* Buttons container */}
      <div className="flex items-center justify-center mt-10 gap-[13px]">
        <Button styles="text-absolute_white font-medium text-[14px] flex py-[14px] px-5 justify-center items-center gap-2.5 rounded-[8px] border border-solid border-grey_20 bg-[rgba(36, 36, 36, 0.20)]">
          Our Works
        </Button>
        <Button styles="text-grey_15 z-10 font-medium flex py-[14px] px-5 justify-center items-center gap-2.5 rounded-[8px] bg-green_50">
          Contact Us
        </Button>
      </div>
      {/* Abstract Section */}
      <div className="flex items-center mx-auto justify-center mt-[-40px] w-auto">
        <img src="/svg/abstract-design.svg" alt="abstract-design" />
      </div>
      <div className="flex items-center justify-center">
        <div className="text-absolute_white absolute mt-[-6px] mx-[px] py-[14px] px-[24px] gap-[10px] rounded-[100px] border border-solid border-grey_15 bg-grey_10">
          <p className="text-[14px]">Trusted By 250+ Companies</p>
        </div>
      </div>
      <Companies />

      <SectionInfo
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
      />
      <ServicesCard />
      <SectionInfo
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
      />
      <AdvantagesCard />
      <SectionInfo
        title="What our Clients say About us"
        description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us"
      />
      {clientsStaff.map((client, index) => (
        <div key={index} className="px-[24px] py-[40px] border-b border-solid border-grey_15">
          <h2 className="text-green_80 text-[18px] font-medium">
            {client.title}
          </h2>
          <p className="text-grey_90 mt-5 text-[14px]">{client.description}</p>
          <div className="mt-[24px] flex gap-[10px] items-center justify-centermt-[24px] p-[14px] rounded-md border border-solid border-grey_15 bg-[rgba(36, 36, 36, 0.20)]">
            <img src={client.user_card.avatar} alt="img" />
            <div>
              <h3 className="text-absolute_white text-[16px] font-medium">
                {client.user_card.user_name}
              </h3>
              <p className="text-grey_90 text-[14px]">
                {client.user_card.position}
              </p>
            </div>
          </div>
        </div>
      ))}
      <SectionInfo
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via hello@squareup.com"
      />
    </>
  );
}

export default Home;
