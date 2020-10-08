import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import logoImg from "../../assets/image/logotipo-de-hamburguer-de-chama-de-fogo-picante-quente_8169-191.jpg";

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />
      <Text style={styles.text}>HOT BURGER</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: 20,
  },
});
