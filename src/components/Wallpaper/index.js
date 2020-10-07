import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import bgSrc from "../../assets/image/photo-1568901346375-23c9450c58cd.jpg";

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
});
