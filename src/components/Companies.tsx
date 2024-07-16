import companiesLogo from "../data/companiesLogo";

const Companies = () => {
  return (
    <div className="grid grid-cols-2 border-t border-solid border-grey_15">
      {companiesLogo.map((company, index) => (
        <div
          key={index}
          className="flex items-center justify-center border-b border-r border-l border-grey_15"
        >
          <div className="p-[40px] flex items-center justify-center">
            <img src={company.path} alt={company.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Companies;
