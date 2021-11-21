import React from "react";

const SeparatorSVG = ({ d, darkMode }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor: !darkMode ? "" : "#1b1a1a",
      }}
      viewBox="0 0 1440 320"
    >
      <path
        fill={!darkMode ? "#f2f2f5" : "#1a1423"}
        fillOpacity="1"
        d={d}
      ></path>
    </svg>
  );
};

export default SeparatorSVG;
