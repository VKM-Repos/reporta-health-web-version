import Image from "next/image";
import React from "react";
import pattern from "@assets/images/pattern.svg";
import landing from "@assets/images/landing.png";
import SearchForm from "@components/Forms/SearchForm/SearchForm";

const Landing = () => {
  return (
    <section className="fixed top-0 w-[100vw] min-h-screen font-jarkata">
      <div className="w-full lg:w-2/3 bg-background min-h-screen lg:pt-[5%] pt-[15%]">
        <div className="w-5/6 mx-auto relative flex flex-col items-start justify-center ">
          <h1 className="text-black font-extrabold lg:text-[3.3rem] md:text-[3.5rem] text-[2.5rem] tracking-normal leading-tight mt-4 lg:mt-12">
            Find healthcare <br className="hidden lg:block" /> facilites close{" "}
            <br className="hidden lg:block" /> to you.
          </h1>
          <p className="text-black lg:text-[0.9rem] md:text-[1rem] text-sm lg:w-1/2 tracking-wide leading-normal my-6">
            Reporta Health allows you search for the nearest healthcare
            facilities to you. It also allows you report unregistered facilities
            to the supervising authorities.
          </p>
          {/* search bar */}
          <div className="bg-transparent my-6 z-50">
            <SearchForm />
          </div>

          <div className="hidden lg:block absolute z-20 top-[10%] lg:-right-[25%] ">
            <Image src={pattern} alt="pattern" width={400} height={400} />
          </div>

          <div className="lg:hidden ">
            <Image src={landing} alt="landing" />
          </div>
        </div>
      </div>
      <div className="hidden z-30 lg:block pt-[10%] absolute top-0  lg:-right-[5%]">
        <Image src={landing} alt="landing" />
      </div>
    </section>
  );
};

export default Landing;
