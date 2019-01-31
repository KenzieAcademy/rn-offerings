import React from "react";
import { StyleSheet, View } from "react-native";
import HomePage from "./Components/HomePage.js";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomePage />
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
