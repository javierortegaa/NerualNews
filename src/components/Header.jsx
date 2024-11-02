import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 bg-headfooter text-textColor">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 group">
          <h1 className="text-3xl font-semibold text-primaryPurple group-hover:text-secondaryPurple transition duration-300">
            Neura
          </h1>
          <LuBrainCircuit className="text-primaryPurple size-8 group-hover:text-secondaryPurple transition duration-300" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-textColor hover:text-primaryPurple transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-textColor hover:text-primaryPurple transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="w-full mt-4 px-4 py-2 bg-primaryPurple hover:bg-secondaryPurple text-white font-semibold rounded-lg transition duration-300"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
