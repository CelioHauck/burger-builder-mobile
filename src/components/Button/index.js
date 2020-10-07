import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from "react-native";

const Button = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={1}
          onPress={props.click}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    width: DEVICE_WIDTH - 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cf8f2f",
    height: 40,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    color: "white",
    backgroundColor: "transparent",
  },
});
