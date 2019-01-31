import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Navbar from "./Navbar";
import SplashArt from "./SplashArt";

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar style={styles.navbar} leftIcon="menu" text="offerings" />
        <ScrollView>
          <View style={{ height: 275 }}>
            <SplashArt />
          </View>
          <View style={{ backgroundColor: "blue", height: 300 }} />
          <View style={{ backgroundColor: "red", height: 300 }} />
        </ScrollView>
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
