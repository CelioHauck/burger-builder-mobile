import React, { Component } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Background from "../components/Background";
import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Form />
      <Button
        click={() => {
          navigation.navigate("BurgerScreen");
        }}
      />
    </Background>
  );
};

export default LoginScreen;
