import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const ProfileDropdown = ({ show, onLogout, close }) => {
  if (!show) {
    return null;
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="profile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "5rem", opacity: 1 }}
          exit={{ height: "-5rem", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="hidden absolute my-1 right-0 z-30 mx-8 lg:flex w-[10%] rounded-md  bg-white shadow-lg border border-gray"
        >
          <div className="text-xs w-full flex items-center">
            <div
              onClick={close}
              className="w-screen h-screen fixed inset-0"
            ></div>
            <ul className="w-full relative">
              <li className="w-full text-black px-2 py-2 hover:text-primary cursor-pointer hover:bg-background">
                <Link href="profile">
                  <a className="flex flex-row items-center">
                    {" "}
                    <span>
                      <svg
                        className="w-4 h-4 mr-4"
                        fill="currentColor"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M252.245,0c-73.103,0-132.575,59.472-132.575,132.575s59.472,132.575,132.575,132.575S384.82,205.678,384.82,132.575
			S325.348,0,252.245,0z M252.246,246.21c-58.086,0-106.103-43.815-112.806-100.132c26.198,7.495,83.708,16.958,128.961-25.322
			c12.956,24.025,38.909,52.712,76.954,52.712c4.292,0,8.758-0.418,13.357-1.197C342.576,215.411,300.945,246.21,252.246,246.21z
			 M363.278,151.875c-56.966,16.285-82.189-48.291-83.234-51.047c-1.184-3.126-3.93-5.41-7.227-5.983
			c-3.288-0.546-6.649,0.629-8.822,3.163c-43.896,51.193-105.946,34.903-125.193,28.157C142.14,66.475,191.74,18.939,252.246,18.939
			c62.658,0,113.635,50.973,113.635,113.635c0,6.524-0.583,12.91-1.644,19.136C363.917,151.764,363.598,151.787,363.278,151.875z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M375.341,303.668H138.619c-57.442,0-105.155,46.088-105.155,103.526v94.696c0,5.234,5.22,10.11,10.45,10.11h426.133
			c5.229,0,8.489-4.876,8.489-10.11v-94.696C478.536,349.756,432.783,303.668,375.341,303.668z M459.597,493.061H52.403v-85.867
			c0-46.997,39.215-84.586,86.216-84.586h236.722c47.001,0,84.255,37.589,84.255,84.586V493.061z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </span>
                    Profile
                  </a>
                </Link>
              </li>
              <li className="w-full text-black px-2 py-2 hover:text-primary cursor-pointer hover:bg-background">
                <button
                  onClick={onLogout}
                  className="flex flex-row items-center"
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-4"
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
                  </span>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileDropdown;
