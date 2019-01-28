import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navbar from "./Navbar";
import SplashArt from "./SplashArt";

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Navbar leftIcon="menu" text="offerings" />
        </View>
        <View style={{ backgroundColor: "blue", flex: 1 }}>
          <SplashArt />
        </View>
        <View style={{ backgroundColor: "red", flex: 1 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
