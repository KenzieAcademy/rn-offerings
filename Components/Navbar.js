import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      leftIcon: this.props.leftIcon
      // rightIcon: this.props.rightIcon
    };
  }

  onComponentDidMount() {
    console.log;
  }
  render() {
    return (
      <Header
        leftComponent={
          this.props.leftIcon
            ? { icon: this.props.leftIcon, color: "#fff" }
            : null
        }
        centerComponent={{
          text: this.props.text,
          style: { color: "#fff", fontSize: 25 }
        }}
        rightComponent={
          this.props.rightIcon
            ? { icon: this.props.leftIcon, color: "#fff" }
            : null
        }
        outerContainerStyles={{ backgroundColor: "#3fb542", height: 80 }}
      />
    );
  }
}
