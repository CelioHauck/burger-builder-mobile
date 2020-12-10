import React, { FunctionComponent, useEffect } from "react";
import { IngredientType } from "../../../utils/enum/ingredient.enum";
import Button from "../../../ui/Button";
import { ButtonType } from "../../../utils/enum/button.enum";
import { Text, FlatList, View } from "react-native";

const OrderSummary = (props) => {
  const action = props.isAction ? (
    <>
      <Text>Deseja realmente realizar o seu pedido?</Text>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button clicked={props.cancel} type={ButtonType.danger}>
          Cancelar
        </Button>
        <Button clicked={props.continue} type={ButtonType.success}>
          Confirmar
        </Button>
      </View>
    </>
  ) : (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Button clicked={props.cancel} type={ButtonType.danger}>
        Fechar
      </Button>
      <Button clicked={props.continue} type={ButtonType.success}>
        Recomprar
      </Button>
    </View>
  );
  return (
    <React.Fragment>
      <Text>O pedido contem os seguintes ingredientes</Text>
      {props.ingredients ? (
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
      ) : null}

      <Text>
        <Text style={{ fontWeight: "bold" }}>
          Preço Total: {props.totalPrice ? props.totalPrice.toFixed(2) : null}
        </Text>
      </Text>

      {action}
    </React.Fragment>
  );
};

export default OrderSummary;
