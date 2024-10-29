import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl">Navbar</h1>
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout;
