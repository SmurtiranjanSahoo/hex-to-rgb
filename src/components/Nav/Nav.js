import React from "react";

export const Nav = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.7) 10%,
            rgba(0, 0, 0, 0)
          )`,
        backgroundColor: "#141414",
      }}
      className="w-full h-14 fixed top-0 flex items-center px-4"
    >
      <h3 className="text-2xl">HEX - RGB</h3>
    </div>
  );
};
