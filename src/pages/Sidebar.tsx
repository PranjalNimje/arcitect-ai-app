import React from "react";

const Sidebar = () => {
  const arr = ["qwe", "rty", "asdf", "wefghjk", "sdfgh"];
  return (
    <div className="Sidebar">
      {arr?.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
