import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SplashImage from "../assets/bitmap.png";

export default class SplashArt extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Image source={SplashImage} styles={{ height: 100, width: 100 }} />
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.text}>share</Text>
          <Text style={styles.text}>food with</Text>
          <Text style={styles.text}>neighbors</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  itemContainer: {
    justifyContent: "center"
  },
  text: {
    fontSize: 30,
    color: "#373504",
    fontWeight: "bold",
    alignSelf: "flex-end"
  }
});
