import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <header className="w-full relative bg-transparent z-50">
      <nav className=" w-[95vw] mx-auto flex flex-row items-center justify-between px-6 py-4 ">
        {/* logo */}
        <Link href="/">
          <a className="lg:px-2 text-left text-sm font-extrabold text-primary ">
            Reporta Health
          </a>
        </Link>

        {/* nav links */}
        <div className="hidden lg:basis-2/4 lg:flex flex-row items-center justify-center mr-16 text-seconary text-sm">
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/"
                  ? "text-accent mx-4 font-extrabold"
                  : "tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/about"
                  ? "text-accent mx-4 font-extrabold"
                  : "tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              About
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/report-facility"
                  ? "text-accent mx-4 font-extrabold"
                  : "tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              Report a facility
            </a>
          </Link>
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/register-facility"
                  ? "text-accent mx-4 font-extrabold"
                  : "tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              Register a facility
            </a>
          </Link>
        </div>

        <div className="relative">
          {/* contact us btn */}

          <Link href="login">
            <button className="hidden text-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
              Login
            </button>
          </Link>

          {/* hamburger button*/}
          <div className="mobile absolute right-5 lg:hidden">
            {showSidebar ? (
              <a
                onClick={() => setShowSidebar(!showSidebar)}
                className="fixed hamburger active z-50"
              >
                <span></span>
              </a>
            ) : (
              <a
                onClick={() => setShowSidebar(!showSidebar)}
                className=" hamburger z-50"
              >
                <span></span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* sidebar menu content */}

      <div
        className={`top-0 w-full bg-black bg-opacity-10 fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`top-0 right-0 md:w-3/6 w-5/6 bg-white drop-shadow-2xl fixed h-full z-40 ease-in-out duration-300`}
        >
          {/* menu link */}
          <div className="mt-[4rem] text-md text-black flex flex-col capitalize items-start text-left px-8">
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? " my-2"
                    : "tracking-wide leading-loose my-2"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname === "/"
                    ? " my-2"
                    : "tracking-wide leading-loose my-2"
                }
              >
                About
              </a>
            </Link>
            <Link href="/report-facility">
              <a
                className={
                  router.pathname === "/"
                    ? "my-2"
                    : "tracking-wide leading-loose my-2"
                }
              >
                Report a facility
              </a>
            </Link>
            <Link href="/register-facility">
              <a
                className={
                  router.pathname === "/"
                    ? "my-2"
                    : "tracking-wide leading-loose my-2"
                }
              >
                Register a facility
              </a>
            </Link>
          </div>

          <div className="mt-12 py-2 px-4 w-full">
            <Link href="/login">
              <a className="text-black tracking-wide  leading-loose font-normal px-12 py-2 border border-black border-opacity-10">
                Login
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
