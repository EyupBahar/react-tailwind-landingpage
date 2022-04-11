import React from "react";

const Title = ({ children }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-3">{children}</h3>
    </div>
  );
};

export default Title;
