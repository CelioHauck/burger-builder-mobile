import React, { FunctionComponent, useEffect } from "react";
import { IngredientType } from "../../../utils/enum/ingredient.enum";
import Button from "../../../ui/Button";
import { ButtonType } from "../../../utils/enum/button.enum";
import { Text, FlatList, View } from "react-native";

const OrderSummary = (props) => {
  return (
    <React.Fragment>
      {/* <View>Your Order</View> */}
      <Text>O pedido contem os seguintes ingredientes</Text>
      <FlatList
        keyExtractor={(item, index) => {
          return `${item}${index}`;
        }}
        style={{ marginTop: 16, marginBottom: 16 }}
        data={Object.keys(props.ingredients)}
        renderItem={(ig) => {
          return (
            <Text key={IngredientType[ig.item] + props.ingredients[ig.item]}>
              <Text style={{ marginRight: 16 }}>{"\u2022"}</Text>
              <Text style={{ textTransform: "capitalize" }}>
                {IngredientType[ig.item]}
              </Text>
              : {props.ingredients[ig.item]}
            </Text>
          );
        }}
      />
      <Text>
        <Text style={{ fontWeight: "bold" }}>
          Total Price: {props.totalPrice.toFixed(2)}
        </Text>
      </Text>
      <Text>Continue to checkout?</Text>
      {/* <Button clicked={props.cancel} type={ButtonType.danger}>
        <Text> Cancel</Text>
      </Button>
      <Button clicked={props.continue} type={"Success"}>
        <Text> Confirm</Text>
      </Button> */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button clicked={props.cancel} type={ButtonType.danger}>
          Cancel
        </Button>
        <Button clicked={props.continue} type={ButtonType.success}>
          Confirm
        </Button>
      </View>
    </React.Fragment>
  );
};

export default OrderSummary;
