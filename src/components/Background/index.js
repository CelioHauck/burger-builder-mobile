import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import bgSrc from "../../assets/image/photo-1568901346375-23c9450c58cd.jpg";

const Background = (props) => {
  return (
    <ImageBackground style={styles.picture} source={bgSrc}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
});

export default Background;
