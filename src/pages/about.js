import Layout from "@components/Layout/Layout";
import PropTypes from "prop-types";

export default function About() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description: "give any description here",
        }}
      >
        <h1>About Reporta health</h1>
      </Layout>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
  pageMeta: PropTypes.object,
};
