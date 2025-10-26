import LanguageSwitcher from "./LanguageSwitcher";

// import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center z-50">
    <header className="fixed top-0 w-full px-6 py-4 flex justify-end items-center z-50">
      {/* <div className="text-xl font-bold">Wedding & Co.</div> */}
      {/* <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About Us</Link>
      </nav> */}
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
