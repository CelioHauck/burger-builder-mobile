import React, { Component } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Wallpaper from "../components/Wallpaper";
import Button from "../components/Button";

const LoginScreen = ({ navigation }) => {
  return (
    <Wallpaper>
      <Logo />
      <Form />
      <Button
        click={() => {
          navigation.navigate("BurgerScreen");
        }}
      />
    </Wallpaper>
  );
};

export default LoginScreen;
