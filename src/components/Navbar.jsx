// Navbar.jsx
const Navbar = () => (
  <nav className="flex justify-center items-center p-2 border-b-2 border-border-black text-sm space-x-4">
    {[
      "INTEL",
      "NVIDIA",
      "DELL",
      "APPLE",
      "LLM'S",
      "AI",
      "GLOBAL",
      "ECONOMIC",
      "GOOGLE",
      "ALL",
    ].map((item, index) => (
      <span
        key={index}
        className="hover:font-bold hover:text-gray-700 transition-all duration-200 cursor-pointer"
      >
        {item}
      </span>
    ))}
  </nav>
);

export default Navbar;
