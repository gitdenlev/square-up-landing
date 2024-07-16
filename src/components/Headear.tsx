const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between pt-10 pr-4 pb-5 pl-4">
        <img src="/svg/mobile-logo.svg" alt="logo" />
        <div className="flex p-1.5 items-center gap-2 rounded-md bg-grey_15">
          <img src="/svg/burger.svg" alt="Burger menu" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
