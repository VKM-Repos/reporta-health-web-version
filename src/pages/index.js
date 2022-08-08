import React, { useState } from "react";
import Landing from "@components/Landing/Landing";
import Layout from "@components/Layout/Layout";

export default function Home() {
  return (
    <div className="w-full bg-transparent relative overflow-hidden select-none  z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description: "give any description here",
        }}
      >
        <Landing />
      </Layout>
    </div>
  );
}
