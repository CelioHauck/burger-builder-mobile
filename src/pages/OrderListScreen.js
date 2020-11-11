import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "../infra/axios/order";
import firebase from "../infra/firebase";
import moment from "moment";
import OrderSummary from "../components/Burger/OrderSummary";
import Modal from "../ui/Modal";
const orderListScreen = () => {
  const [order, setOrder] = useState([]);
  const [selectOrder, setSelectOrder] = useState({});
  const [open, setOpen] = useState(false);
  const userName = firebase.auth().currentUser;

  useEffect(() => {
    moment.locale("pt-br");
    axios.get("/orders.json").then((response) => {
      if (response && response.data) {
        const result = Object.keys(response.data).map((key) => {
          return { id: key, ...response.data[key] };
        });
        // .filter((e) => e.custormer.email === userName.email);
        console.log(result);
        setOrder(result);
      }
    });
  }, []);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal show={open} close={closeHandler}>
        <OrderSummary
          totalPrice={selectOrder.price}
          cancel={closeHandler}
          ingredients={selectOrder.ingredients}
        />
      </Modal>
      <SafeAreaView>
        <FlatList
          data={order}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text
                  onPress={() => {
                    setSelectOrder(item);
                    setOpen(true);
                  }}
                  style={styles.text}
                >{`${
                  item.dateOrder
                    ? `Data do Pedido: ${moment(item.dateOrder).format(
                        "l"
                      )} ${moment(item.dateOrder).format("LT")} - `
                    : ""
                } Total: R$  ${
                  item.price ? item.price.toFixed(2) : null
                }`}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#cf8f2f7a",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    color: "#333333",
  },
});
export default orderListScreen;
