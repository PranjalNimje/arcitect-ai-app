import React from "react";

export type titleProp = {
  title: string;
};
const Heading = ({ title }: titleProp) => {
  return <h3>{title}</h3>;
};

export default Heading;
