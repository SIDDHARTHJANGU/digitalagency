import React, { useContext } from "react";
import { Datatransfer } from "./Datatransfer";

const About = () => {
  function DatatransferContext() {
    return useContext(Datatransfer);
  }
  const { numbervalue, alpahvalue,agevalue } = DatatransferContext();
  console.log(numbervalue, alpahvalue,agevalue);
  return <div></div>;
};

export default About;
           