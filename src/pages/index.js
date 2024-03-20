import React, { useState } from "react";
import Landing from "@components/Landing/Landing";
import Layout from "@components/Layout/Layout";

export default function Home() {
  return (
    <div className="w-full bg-transparent relative  select-none  z-2">
      <Layout
        pageMeta={{
          title: "Reporta Health - Search and report a facility",
          description:
            "A crowd sourcing health facility app for checking registered and unregistered health facilities and reporting unregistered health facilities for enhanced quality health service delivery in Nigeria.",
        }}
      >
        <Landing />
      </Layout>
    </div>
  );
}
