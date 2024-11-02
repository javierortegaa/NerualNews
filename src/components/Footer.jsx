import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-headfooter text-center text-textColor">
      <p>© {new Date().getFullYear()} Neura. All rights reserved.</p>
      <p className="mt-2">
        <a
          href="#"
          className="text-primaryPurple hover:text-secondaryPurple transition duration-300"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          href="#"
          className="text-primaryPurple hover:text-secondaryPurple transition duration-300"
        >
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
