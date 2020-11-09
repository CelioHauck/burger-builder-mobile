import React, { FunctionComponent } from "react";
import { DecisionButton } from "./style";
const Button = (props) => {
  return (
    <DecisionButton type={props.type} onPress={props.clicked}>
      {props.children}
    </DecisionButton>
  );
};

export default Button;
