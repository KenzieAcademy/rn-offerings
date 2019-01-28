import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SplashImage from "../assets/bitmap.png";
import { Platform } from "expo-core";
export default class SplashArt extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Image source={SplashImage} />
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
  imageContainer: {
    width: "100%",
    height: "100%"
  },
  text: {
    fontSize: 35,
    color: "#373504",
    fontWeight: "bold",
    alignSelf: "flex-end",
    marginLeft: Platform.OS == "ios" ? 0 : -10
  }
});
