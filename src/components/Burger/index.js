import React from "react";
import Ingredient from "./Ingredient";
import { Burger } from "./style.js";

const burger = (props) => {
  let tranformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (tranformedIngredients.length === 0) {
    tranformedIngredients = [
      <p key="PleaseStart">Please start adding ingredients</p>,
    ];
  }
  return (
    <Burger>
      <Ingredient type="breadTop" />
      {tranformedIngredients}
      <Ingredient type="breadBottom" />
    </Burger>
  );
};

export default burger;
