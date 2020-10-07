import React from "react";

import { BuildControlClasse, Label, Buttons } from "./style.js";

const DEPARA_NAME = {
  Salad: "Salada",
  Bacon: "Bacon",
  Meat: "Carne",
  Cheese: "Queijo",
};

const BuildControl = (props) => {
  return (
    <BuildControlClasse>
      <Label>{DEPARA_NAME[props.label]}</Label>
      <Buttons type="Less" disabled={props.disabled} onPress={props.remove}>
        Menos
      </Buttons>
      <Buttons type="More" disabled={false} onPress={props.added}>
        Mais
      </Buttons>
    </BuildControlClasse>
  );
};

export default BuildControl;
