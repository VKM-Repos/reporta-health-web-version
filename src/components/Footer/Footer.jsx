import React from "react";

const Footer = () => {
  return (
    <footer className="w-full lg:w-[90vw] mx-auto py-4 bg-background">
      <p className="text-xs lg:text-sm lg:text-left text-center font-semibold text-accent">
        Copyright &copy; {new Date().getFullYear()}. Viable Knowledge Masters{" "}
      </p>
    </footer>
  );
};

export default Footer;
