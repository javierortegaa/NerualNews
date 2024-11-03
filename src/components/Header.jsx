// Header.jsx

import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex flex-col md:flex-row justify-between items-center border-b-2 border-border-black p-4">
    <div className="text-xs md:text-sm mb-2 md:mb-0">No. 5.12</div>
    <h1 className="text-2xl md:text-6xl font-serif tracking-wider">
      <Link to="/">NEURAL NEWS</Link>
    </h1>
    <div className="text-xs md:text-sm mt-2 md:mt-0">
      <a href="./login" className="hover:font-bold">
        LOGIN
      </a>
    </div>
  </header>
);

export default Header;
