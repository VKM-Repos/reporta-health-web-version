import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useUserCredentialsStore } from "@store/authStore.store";
import shallow from "zustand/shallow";
import { useLogoutUser } from "@hooks/useLogoutUser.hook";

import RegisterFacilityModal from "@components/Facility/RegisterFacilityModal";
import ReportFacilityModal from "@components/Facility/ReportFacilityModal";

import Image from "next/image";
import logo from "@assets/images/logo.svg";

const Header = () => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setUserData(useUserCredentialsStore.getState().userDetails);
    setIsAuthenticated(useUserCredentialsStore.getState().isAuthenticated);
  }, []);

  let userName = userData?.user?.username;

  const router = useRouter();

  const { logoutHandler } = useLogoutUser();

  const clearUserAuth = () => {
    setUserData({});
    setIsAuthenticated(false);
    logoutHandler;
  };

  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const [showReportModal, setShowReportModal] = useState(false);

  const closeReportModal = () => {
    setShowReportModal(false);
  };

  return (
    <header className="w-full relative bg-transparent z-50">
      <nav className=" w-[95vw] mx-auto flex flex-row items-center justify-between px-8 py-4 ">
        {/* logo */}
        <Link href="/">
          <a className="lg:px-2 ">
            <Image src={logo} alt="reporta-health-logo" />
          </a>
        </Link>

        {/* nav links */}
        <div className="hidden lg:basis-2/4 lg:flex flex-row items-center justify-center mr-16 text-seconary text-sm">
          <Link href="/">
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
          <Link href="/about">
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

          <button
            className="tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
            onClick={() => setShowReportModal(true)}
          >
            Report a facility
          </button>

          <button
            className="tracking-wide mx-4 hover:font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300 hover:pointer"
            onClick={() => setShowModal(true)}
          >
            Register a facility
          </button>
        </div>

        <div className="relative">
          {isAuthenticated ? (
            <div className="flex items-center justify-between">
              <p className="hidden lg:flex">Hello, {userName}</p>

              <button
                onClick={clearUserAuth}
                className="mx-4 hidden text-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300"
              >
                logout
              </button>
            </div>
          ) : (
            <div>
              <Link href="login">
                <button className="hidden text-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-110 duration-300">
                  Login
                </button>
              </Link>
            </div>
          )}

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
          className={`top-0 right-0 md:w-3/6 w-5/6 bg-white text-lg text-black text-opacity-60 drop-shadow-2xl flex flex-col justify-between px-6 fixed h-full z-40 ease-in-out duration-300`}
        >
          {/* menu link */}
          <div className="mt-[4rem]  flex flex-col justify-between capitalize items-start text-left">
            <Link href="/">
              <a
                className={
                  router.pathname === "/"
                    ? "flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold"
                    : "tracking-wide leading-loose my-2 flex items-center justify-start "
                }
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.02 1.83992L2.63 6.03992C1.73 6.73992 1 8.22992 1 9.35992V16.7699C1 19.0899 2.89 20.9899 5.21 20.9899H16.79C19.11 20.9899 21 19.0899 21 16.7799V9.49992C21 8.28992 20.19 6.73992 19.2 6.04992L13.02 1.71992C11.62 0.739918 9.37 0.789918 8.02 1.83992Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                &nbsp; &nbsp; Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.pathname === "/about"
                    ? "flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold"
                    : "tracking-wide leading-loose my-2 flex items-center justify-start "
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9946 16H12.0036"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                &nbsp; &nbsp; About
              </a>
            </Link>

            <button
              className={
                router.pathname === "/report-facility"
                  ? "flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold"
                  : "tracking-wide leading-loose my-2 flex items-center justify-start "
              }
              onClick={() => {
                setShowSidebar(!showSidebar);
                setShowReportModal(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9946 16H12.0036"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              &nbsp; &nbsp; Report a facility
            </button>

            <button
              className={
                router.pathname === "/register-facility"
                  ? "flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold"
                  : "tracking-wide leading-loose my-2 flex items-center justify-start"
              }
              onClick={() => {
                setShowSidebar(!showSidebar);
                setShowModal(true);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.31006 14.7L10.8101 16.2L14.8101 12.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              &nbsp; &nbsp; Register a facility
            </button>
          </div>

          <div className="w-full mb-[4rem]">
            {isAuthenticated ? (
              <div className="flex flex-col items-start justify-center">
                <p className="lg:hidden flex">Hello, {userName}</p>

                <a
                  onClick={clearUserAuth}
                  className="flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.0001 12H3.62012"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  &nbsp; &nbsp; Logout
                </a>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <a className="flex items-center justify-start my-2  text-black text-opacity-1 font-extrabold">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.8999 7.55999C9.2099 3.95999 11.0599 2.48999 15.1099 2.48999H15.2399C19.7099 2.48999 21.4999 4.27999 21.4999 8.74999V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0001 12H3.62012"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.85 8.6499L2.5 11.9999L5.85 15.3499"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    &nbsp; &nbsp; Login
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <RegisterFacilityModal onClose={closeModal} visible={showModal} />
      <ReportFacilityModal
        onClose={closeReportModal}
        visible={showReportModal}
      />
    </header>
  );
};

export default Header;
