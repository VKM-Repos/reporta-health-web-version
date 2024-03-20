import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-background">
      <p className=" lg:w-[90vw] mx-auto text-sm lg:text-left text-center font-semibold text-accent">
        Copyright &copy; {new Date().getFullYear()}. Viable Knowledge Masters{" "}
      </p>
    </footer>
  );
};

export default Footer;
