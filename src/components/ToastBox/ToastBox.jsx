import React from "react";

const ToastBox = ({ show, title, message, confirmCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <section className="w-screen h-screen fixed inset-0 z-40">
      <main className="antialiased backdrop-blur-sm overflow-x-hidden">
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className="bg-white lg:w-1/3 rounded-lg md:max-w-md md:mx-auto px-8 py-2 fixed inset-x-0 bottom-10 z-50 mb-4 mx-4 md:relative">
            <div className="md:flex items-center">
              <button
                onClick={confirmCancel}
                className="absolute w-6 h-6 top-1 right-5 flex items-center justify-center bg-primary text-white rounded-full font-semibold text-sm mt-4
              md:mt-0 md:order-1"
              >
                X
              </button>

              <div className="mt-4 text-center md:text-left">
                <p className="font-extrabold text-lg">{title}</p>
                <p className="text-md text-secondary mt-1">{message}</p>
              </div>
            </div>
            <div className="text-center md:text-right mt-8 md:flex md:justify-end"></div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ToastBox;
