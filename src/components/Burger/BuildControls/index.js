import React from "react";
import BuildControl from "./BuildControl";
import { BuildControlsClasse, OrderButton } from "./style.js";
import { View, Text } from "react-native";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <BuildControlsClasse>
      <Text>Current Price: {props.price.toFixed(2)}</Text>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            props.add(ctrl.type);
          }}
          remove={() => {
            props.remove(ctrl.type);
          }}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <OrderButton disabled={!props.purchaseble}>
        <Text>ORDER NOW</Text>
      </OrderButton>
    </BuildControlsClasse>
  );
};

export default BuildControls;
