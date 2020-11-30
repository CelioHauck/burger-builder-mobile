import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";
import { Dimensions } from "react-native";

const UserInput = (props) => {
  return (
    <View style={styles.inputWrapper}>
      <Image source={props.source} style={styles.inlineImg} />
      <TextInput
        value={props.value}
        onChangeText={props.change}
        style={styles.input}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoCapitalize={props.autoCapitalize}
        returnKeyType={props.returnKeyType}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default UserInput;

const DEVICE_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    width: DEVICE_WIDTH - 30,
    paddingLeft: 45,
    borderRadius: 20,
    color: "#ffffff",
    height: 20,
    marginHorizontal: 10,
    marginVertical: 5,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
  },
  inputWrapper: {
    flex: 1,
  },
  inlineImg: {
    position: "absolute",
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
});
