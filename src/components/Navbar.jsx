// Navbar.jsx
const Navbar = ({ handleChange }) => (
  <nav className="flex flex-wrap justify-center md:justify-center items-center p-2 border-b-2 border-border-black text-xs md:text-sm space-x-2 md:space-x-4">
    <span
      onClick={() => handleChange("intel")}
      className="hover:font-bold transition duration-300"
    >
      INTEL
    </span>
    <span
      onClick={() => handleChange("nvidia")}
      className="hover:font-bold transition duration-300"
    >
      NVIDIA
    </span>
    <span
      onClick={() => handleChange("dell")}
      className="hover:font-bold transition duration-300"
    >
      DELL
    </span>
    <span
      onClick={() => handleChange("apple")}
      className="hover:font-bold transition duration-300"
    >
      APPLE
    </span>
    <span
      onClick={() => handleChange("ai")}
      className="hover:font-bold transition duration-300"
    >
      AI
    </span>
    <span
      onClick={() => handleChange("economic")}
      className="hover:font-bold transition duration-300"
    >
      ECONOMIC
    </span>
    <span
      onClick={() => handleChange("google")}
      className="hover:font-bold transition duration-300"
    >
      GOOGLE
    </span>
    <span
      onClick={() => handleChange("")}
      className="hover:font-bold transition duration-300"
    >
      ALL
    </span>
  </nav>
);

export default Navbar;
