import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <h1 className="text-3xl">Dashboard</h1>
      <div>{children}</div>
    </>
  );
};

export default DashboardLayout;
