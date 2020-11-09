import React from "react";
import { Background } from "./style.js";

const Backdrop = (props) => {
  return props.show ? <Background onClick={props.close} /> : null;
};

export default Backdrop;
