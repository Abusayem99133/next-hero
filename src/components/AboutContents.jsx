import Link from "next/link";
import React from "react";

const AboutContents = () => {
  return (
    <div className="flex justify-around bg-amber-600 h-screen">
      <Link href="about/history">History</Link>
      <Link href="/about/mission">Mission</Link>
    </div>
  );
};

export default AboutContents;
