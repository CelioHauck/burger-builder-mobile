import React, { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from "../infra/firebase";

const LoginScreen = ({ navigation }) => {
  const [credential, setCredential] = useState({ userName: "", password: "" });

  const login = () => {
    console.log(credential);
    firebase
      .auth()
      .signInWithEmailAndPassword(credential.userName, credential.password)
      .then(() => {
        navigation.navigate("BurgerScreen");
      });
  };
  return (
    <Background>
      <Logo />
      <Form credential={credential} setCredential={setCredential} />
      <Button click={login} />
    </Background>
  );
};

export default LoginScreen;
