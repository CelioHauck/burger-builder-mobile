import React from "react";

const IngredientType = [
  { salad: "Salada", meat: "Carne", cheese: "Queijo", bacon: "Bacon" },
];

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ig) => {
    return (
      <Text key={props.ingredients[ig]}>
        <Text style={{ textTransform: "capitalize" }}>
          {IngredientType[ig]}
        </Text>
        : {props.ingredients[ig]}
      </Text>
    );
  });

  return (
    <React.Fragment>
      <Text>A delicious burger with the following ingredients</Text>
      {ingredientSummary}
      <Text>Continue to checkout?</Text>
      <Button>Não</Button>
      <Button>Sim</Button>
    </React.Fragment>
  );
};

export default OrderSummary;
