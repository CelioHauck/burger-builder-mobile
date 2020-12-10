import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "../infra/axios/order";
import firebase from "../infra/firebase";
import moment from "moment";
import OrderSummary from "../components/Burger/OrderSummary";
import Toast from "react-native-simple-toast";
import Modal from "../ui/Modal";
const orderListScreen = () => {
  const [order, setOrder] = useState([]);
  const [selectOrder, setSelectOrder] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const userName = firebase.auth().currentUser;
  moment.locale("pt-br");

  useEffect(() => {
    setLoading(true);
    axios
      .get("/orders.json")
      .then((response) => {
        if (response && response.data) {
          const result = Object.keys(response.data)
            .map((key) => {
              return { id: key, ...response.data[key] };
            })
            .filter((e) => e.custormer.email === userName.email);
          setOrder(result.reverse());
        }
      })
      .finally((e) => setLoading(false));
  }, []);

  const getUser = () => {
    setLoading(true);
    axios
      .get("/orders.json")
      .then((response) => {
        if (response && response.data) {
          const result = Object.keys(response.data)
            .map((key) => {
              return { id: key, ...response.data[key] };
            })
            .filter((e) => e.custormer.email === userName.email);
          setOrder(result.reverse());
        }
      })
      .finally((e) => setLoading(false));
  };

  const continueHandler = () => {
    const user = firebase.auth().currentUser;
    if (selectOrder.ingredients) {
      const order = {
        ingredients: selectOrder.ingredients,
        dateOrder: new Date(),
        price: selectOrder.price,
        custormer: {
          email: user.email,
        },
      };
      setLoading(true);
      axios
        .post("/orders.json", order)
        .then(() => {
          Toast.show("Pedido replicado com sucesso!");
          getUser();
          closeHandler();
        })
        .catch((error) => Toast.show(error))
        .finally((e) => setLoading(false));
    }
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const mountStyle = (index) => {
    if (index <= 3) {
      return styles.itemGreen;
    }
    if (index <= order.length - index) {
      return styles.itemMixed;
    }

    return styles.itemBrown;
  };

  return (
    <View>
      <Spinner
        visible={loading}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
      <Modal show={open} close={closeHandler}>
        <OrderSummary
          totalPrice={selectOrder.price}
          cancel={closeHandler}
          continue={continueHandler}
          ingredients={selectOrder.ingredients}
        />
      </Modal>
      <SafeAreaView>
        <FlatList
          data={order}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback
                onPress={() => {
                  setSelectOrder(item);
                  setOpen(true);
                }}
              >
                <View style={mountStyle(index)}>
                  <Text style={styles.text}>{`${
                    item.dateOrder
                      ? `Data do Pedido: ${moment(item.dateOrder).format(
                          "l"
                        )} ${moment(item.dateOrder)
                          .subtract(3, "hours")
                          .format("LT")} - `
                      : ""
                  } Total: R$  ${
                    item.price ? item.price.toFixed(2) : null
                  }`}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  itemBrown: {
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
  itemGreen: {
    alignItems: "center",
    backgroundColor: "#339933",
    flexGrow: 1,
    margin: 4,
    padding: 20,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemMixed: {
    alignItems: "center",
    backgroundColor: "#819431",
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
  spinnerTextStyle: {
    color: "#FFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export default orderListScreen;
