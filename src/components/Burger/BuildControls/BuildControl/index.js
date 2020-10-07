import React from "react";

import { Text } from "react-native";
import { BuildControlClasse, Label, Buttons } from "./style.js";

const BuildControl = (props) => {
  return (
    <BuildControlClasse>
      <Label>{props.label}</Label>
      <Buttons type="Less" disabled={props.disabled} onPress={props.remove}>
        Less
      </Buttons>
      <Buttons type="More" disabled={false} onPress={props.added}>
        More
      </Buttons>
    </BuildControlClasse>
  );
};

export default BuildControl;
