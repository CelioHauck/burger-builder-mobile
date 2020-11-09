import React from "react";

import { BuildControlClasse, Label, Buttons } from "./style.js";

const DEPARA_NAME = {
  Salad: { name: "Salada", price: 1.5 },
  Bacon: { name: "Bacon", price: 1.8 },
  Meat: { name: "Carne", price: 3 },
  Cheese: { name: "Queijo", price: 2 },
};

const BuildControl = (props) => {
  return (
    <BuildControlClasse>
      <Label>
        {DEPARA_NAME[props.label].name} (R$: {DEPARA_NAME[props.label].price})
      </Label>
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
