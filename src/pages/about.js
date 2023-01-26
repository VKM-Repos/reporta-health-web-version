import Layout from "@components/Layout/Layout";
import Image from "next/image";
import PropTypes from "prop-types";
import about1 from "@assets/images/about-woman.svg";
import about2 from "@assets/images/about-man.svg";

export default function About() {
  return (
    <div className="w-full bg-white relative overflow-hidden select-none z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description: "give any description here",
        }}
      >
        <section className="w-[95vw] mx-auto px-5 lg:px-10 pt-[8%] pb-[6rem]">
          <h1 className="mt-[2rem] my-6 lg:text-[3.5vw] md:text-[5vw] text-[8vw] font-bold capitalize">
            About Reporta health
          </h1>
          <p className="w-full md:w-3/5 text-sm">
            Reporta Health is a platform that allows users identify and report
            illegal healthcare facilities, and as well to rate the quality of
            service provided to them in those facilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-stretch ">
            <div className="flex flex-col items-center justify-start mt-[4rem] px-4 pt-4 bg-[#8491ef33] bg-opacity-20 rounded-lg">
              <h4 className="w-full my-4 font-extrabold text-lg lg:text-2xl text-left">
                What it does
              </h4>
              <p className="w-full text-left text-sm my-8 ">
                Reporta Health allows users identify and navigate to nearby
                facilities, rate and register health facilites as well as report
                illegal ones
              </p>
              <Image src={about1} alt="woman" />
            </div>
            <div className="flex flex-col items-center justify-start mt-[4rem] px-4 pt-4 bg-[#FEF9A733] bg-opacity-20 rounded-lg">
              <h4 className="w-full my-4 font-extrabold text-lg lg:text-2xl text-left ">
                Our vision
              </h4>
              <p className="w-full text-left text-sm my-8">
                To inspire a healthier, better and safer society in Africa and
                the world at large
              </p>
              <Image src={about2} alt="man" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-stretch ">
            <div className="flex flex-col items-start justify-start mt-[4rem]  lg:p-8 px-4 py-4 bg-[#FAC21333] bg-opacity-20 rounded-lg">
              <h4 className="my-4 font-extrabold text-lg lg:text-2xl ">
                What we&apos;re doing
              </h4>
              <p className="text-sm ">
                This social innovation has the potential to improve access to
                information including services available and rating scores on
                registered health facilities around users, important information
                for informed decision making on choice of facility by the public
              </p>
            </div>
            <div className="flex flex-col items-start justify-start mt-[4rem] lg:p-8 px-4 py-4 bg-[#F77E2133] bg-opacity-20 rounded-lg">
              <h4 className="my-4 font-extrabold text-lg lg:text-2xl ">
                Our impact
              </h4>
              <p className="text-sm ">
                By providing an opportunity to report illegal health facilities
                remotely, whistle-blowers do not have to travel to government
                offices, saving time and travel costs. Government officers also
                receive geographical information that will lead them directly to
                suspicious health facilities.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
