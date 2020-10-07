import React from "react";
import { Bacon, BreadBottom, BreadTop, Cheese, Meat, Salad } from "./style.js";

const ingredientSwitch = (type) => {
  return (
    {
      breadBottom: <BreadBottom />,
      breadTop: <BreadTop></BreadTop>,
      meat: <Meat />,
      cheese: <Cheese />,
      salad: <Salad />,
      bacon: <Bacon />,
    }[type] || []
  );
};

const Ingredient = (props) => ingredientSwitch(props.type);

export default Ingredient;
