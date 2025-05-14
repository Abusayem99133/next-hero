import AboutContents from "@/components/AboutContents";
import Heading from "@/components/Heading";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Heading />
      <h1 className=" font-bold font-serif text-amber-600">About page</h1>
      <AboutContents />
    </div>
  );
};

export default AboutPage;
