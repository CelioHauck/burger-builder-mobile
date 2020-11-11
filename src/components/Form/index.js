import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";

import UserInput from "../Input";

const Form = (props) => {
  const [control, setControl] = useState({
    showPass: true,
    press: false,
  });

  const showPass = () => {
    control.press === false
      ? setControl({ showPass: false, press: true })
      : setControl({ showPass: true, press: false });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <UserInput
        value={props.userName}
        placeholder="Nome"
        autoCapitalize={"none"}
        returnKeyType={"done"}
        change={(e) => {
          props.setCredential((old) => {
            return { ...old, userName: e };
          });
        }}
        autoCorrect={false}
      />
      <UserInput
        value={props.password}
        secureTextEntry={control.showPass}
        placeholder="Senha"
        returnKeyType={"done"}
        change={(e) => {
          props.setCredential((old) => {
            return { ...old, password: e };
          });
        }}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnEye}
        onPress={showPass}
      >
        <Image style={styles.iconEye} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnEye: {
    position: "absolute",
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: "rgba(0,0,0,0.2)",
  },
});

export default Form;
