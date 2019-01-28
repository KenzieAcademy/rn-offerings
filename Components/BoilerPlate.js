// easy referrence to minimum requirement delete in production
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Example extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world I am the basic boiler plate!</Text>
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
