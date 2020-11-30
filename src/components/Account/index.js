import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";

import UserInput from "../Input";

const AccountForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
}) => {
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
        id="email"
        name="email"
        value={values.email}
        placeholder="Email"
        autoCapitalize={"none"}
        returnKeyType={"done"}
        change={handleChange("email")}
        autoCorrect={false}
      />
      {touched.email && errors.email && (
        <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
      )}
      <UserInput
        id="password"
        name="password"
        value={values.password}
        secureTextEntry={control.showPass}
        placeholder="Senha"
        returnKeyType={"done"}
        change={handleChange("password")}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      {touched.password && errors.password && (
        <Text style={{ fontSize: 10, color: "red" }}>{errors.password}</Text>
      )}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnEye}
        onPress={showPass}
      >
        <Image style={styles.iconEye} />
      </TouchableOpacity>
      <UserInput
        id="confirmPassword"
        name="confirmPassword"
        value={values.confirmPassword}
        secureTextEntry={control.showPass}
        placeholder="Confirmar senha"
        returnKeyType={"done"}
        change={handleChange("confirmPassword")}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      {touched.confirmPassword && errors.confirmPassword && (
        <Text style={{ fontSize: 10, color: "red" }}>
          {errors.confirmPassword}
        </Text>
      )}
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

export default AccountForm;
