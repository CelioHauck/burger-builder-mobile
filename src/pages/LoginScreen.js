import React, { useState } from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Background from "../components/Background";
import Button from "../components/Button";
import firebase from "../infra/firebase";
import Toast from "react-native-simple-toast";
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";

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
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AccountScreen");
            }}
          >
            <Text style={{ color: "#fff" }}>Não tem uma conta? Crie agora</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button click={login} />
    </Background>
  );
};

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

export default LoginScreen;
