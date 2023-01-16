import Layout from "@components/Layout/Layout";
import Image from "next/image";
import PropTypes from "prop-types";
import avatar from "@assets/images/health-worker.svg";
import Input from "@components/Input/Input";

export default function Profile() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description: "give any description here",
        }}
      >
        <section className="w-[95vw] mx-auto px-5 lg:px-10 py-4 pb-[6rem]">
          <section className="lg:w-[80%] mx-auto">
            <h1 className="mt-[0.5rem] my-6 mb-12 text-2xl lg:text-4xl font-bold capitalize">
              User Profile
            </h1>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-start">
              <label
                htmlFor="profile image"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                Profile Image
              </label>
              <div className="col-span-2 flex items-start">
                <div className=" flex lg:flex-col items-end lg:items-center justify-center">
                  <div className="rounded-full flex mr-6 items-center justify-center w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] border border-2 border-primary overflow-hidden">
                    <Image
                      src={avatar}
                      width="100"
                      height="100"
                      alt="Profile picture"
                    />
                  </div>
                  <button className="px-4 py-2 my-6 rounded-md text-white bg-primary text-xs lg:text-sm ">
                    upload image
                  </button>
                </div>
              </div>
            </div>

            <div className="border-b border-gray my-4"></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-center">
              <label
                htmlFor="first name"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                First name
              </label>
              <div className="col-span-2 flex items-start">
                <Input
                  placeholder="Jawn"
                  id="first name"
                  name="first name"
                  type="text"
                  className="px-2 py-2 border border-secondary focus:outline-none  w-full rounded-md"
                />
              </div>
            </div>
            <div className="border-b border-gray my-4"></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-center">
              <label
                htmlFor="last name"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                Last name
              </label>
              <div className="col-span-2 flex items-start">
                <Input
                  placeholder="Chuks"
                  id="last name"
                  name="last name"
                  type="text"
                  className="px-2 py-2 border border-secondary focus:outline-none  w-full rounded-md"
                />
              </div>
            </div>
            <div className="border-b border-gray my-4"></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-center">
              <label
                htmlFor="email"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                email
              </label>
              <div className="col-span-2 flex items-start">
                <Input
                  placeholder="jawn@mail.com"
                  id="email"
                  name="email"
                  type="text"
                  className="px-2 py-2 border border-secondary focus:outline-none  w-full rounded-md"
                />
              </div>
            </div>
            <div className="border-b border-gray my-4"></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-center">
              <label
                htmlFor="Phone number"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                Phone number
              </label>
              <div className="col-span-2 flex items-start">
                <Input
                  placeholder="080 1234 5678"
                  id="phone"
                  name="phone"
                  type="text"
                  className="px-2 py-2 border border-secondary focus:outline-none  w-full rounded-md"
                />
              </div>
            </div>
            <div className="border-b border-gray my-4"></div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-stretch items-center">
              <label
                htmlFor="Address"
                className="text-md lg:text-lg text-primary font-bold capitalize"
              >
                address
              </label>
              <div className="col-span-2 flex items-start">
                <Input
                  placeholder="Wuse, Abuja. Nigeria"
                  id="address"
                  name="address"
                  type="text"
                  className="px-2 py-2 border border-secondary focus:outline-none  w-full rounded-md"
                />
              </div>
            </div>
            <div className="border-b border-gray my-4"></div>
          </section>
        </section>
      </Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
