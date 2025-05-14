import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-amber-900">{/* <h1>Dashboard Layout</h1> */}</div>
      {children}
      {/* <footer>this is footer</footer> */}
    </div>
  );
};

export default DashboardLayout;
