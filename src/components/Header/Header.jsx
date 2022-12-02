import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useUserCredentialsStore } from "@store/authStore.store";
// import shallow from "zustand/shallow";
import { useLogoutUser } from "@hooks/useLogoutUser.hook";

import RegisterFacilityModal from "@components/Facility/RegisterFacilityModal";
import ReportFacilityModal from "@components/Facility/ReportFacilityModal";

import Image from "next/image";
import logo from "@assets/images/logo.svg";
import DialogueBox from "@components/DialogueBox/DialogueBox";
import { AiOutlineDown } from "react-icons/ai";

import healthWorker from "@assets/images/health-worker.svg";
import ProfileDropdown from "@components/Dropdown/ProfileDropdown";

const Header = () => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState();

  useEffect(() => {
    setUserData(useUserCredentialsStore.getState().userDetails);
    setIsAuthenticated(useUserCredentialsStore.getState().isAuthenticated);
  }, []);

  let userName = userData?.user?.username;
  const router = useRouter();

  // logout function
  const { logoutHandler } = useLogoutUser();

  // Modals
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const closeProfile = () => {
    setShowProfile(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [showReportModal, setShowReportModal] = useState(false);
  const closeReportModal = () => {
    setShowReportModal(false);
  };

  // dialogue box function to log out users
  const [showDialogue, setShowDialogue] = useState(false);
  const confirmLogout = () => {
    logoutHandler();
  };
  const confirmCancel = () => {
    setShowDialogue(false);
  };

  return (
    <header className="w-full relative bg-transparent z-50">
      <nav className=" mx-auto flex flex-row items-center justify-between px-6 py-2  ">
        {/* logo */}
        <Link href="/">
          <a className="w-[5rem] h-[2rem]">
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
                  : "tracking-wide mx-4 font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
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
                  : "tracking-wide mx-4 font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              About
            </a>
          </Link>

          <Link href="/statistics">
            <a
              className={
                router.pathname === "/statistics"
                  ? "text-accent mx-4 font-extrabold"
                  : "tracking-wide mx-4 font-extrabold hover:text-accent leading-loose lg:transition ease-in-out delay-150 lg:hover:-translate-y-1 lg:hover:scale-130 duration-300"
              }
            >
              Statistics
            </a>
          </Link>

        </div>

        <div className="relative">
          {isAuthenticated ? (
            <div className="hidden lg:flex text-xs items-center justify-between">
              {/* user icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray mx-2 shadow-sm">
                <Image src={healthWorker} height={25} width={25} />
              </div>
              <button
                onClick={() => {
                  setShowProfile(!showProfile);
                }}
                className="flex items-center  lg:font-semibold mx-2 lg:bg-gray px-2 py-2 rounded-md border border-gray"
              >
                Hello,{" "}
                <span className="mx-2 mr-6 lg:text-primary">{userName}</span>
                <AiOutlineDown />
              </button>
            </div>
          ) : (
            <div>
              <Link href="login">
                <button className="hidden text-primary tracking-wide leading-loose lg:flex items-center text-sm font-normal px-6 py-1 border border-primary rounded-sm lg:transition ease-in-out lg:hover:scale-95 duration-300">
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
        className={`top-0 w-full bg-black bg-opacity-10 fixed h-full z-50 ease-in-out duration-300 ${showSidebar ? "translate-x-0" : "translate-x-full"
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
          </div>

          <div className="w-full mb-[4rem]">
            {isAuthenticated ? (
              <div className="flex flex-col items-start justify-center">
                <p className="lg:hidden flex">Hello, {userName}</p>

                <a
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                    setShowDialogue(true);
                  }}
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
      <ProfileDropdown
        onClose={closeProfile}
        show={showProfile}
        onLogout={setShowDialogue}
      />
      <ReportFacilityModal
        onClose={closeReportModal}
        visible={showReportModal}
      />
      <DialogueBox
        show={showDialogue}
        confirmLogout={confirmLogout}
        confirmCancel={confirmCancel}
        title="Log out"
        message={`Hey ${userName}, are you sure you want to log out?`}
      />
    </header>
  );
};

export default Header;
