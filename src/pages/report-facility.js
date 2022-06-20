import Layout from "@components/Layout/Layout";
import PropTypes from "prop-types";

export default function Home() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description: "give any description here",
        }}
      ></Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
