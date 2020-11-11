import React, { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from "../infra/firebase";
import Toast from "react-native-simple-toast";

const LoginScreen = ({ navigation }) => {
  const [credential, setCredential] = useState({ userName: "", password: "" });

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credential.userName, credential.password)
      .then(() => {
        navigation.navigate("BurgerScreen");
        Toast.show("Login efetuado com sucesso", Toast.SHORT);
      })
      .catch((e) => {
        Toast.show("Email e/ou senha não existe", Toast.SHORT);
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
