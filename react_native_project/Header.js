import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends React.Component{
  render() {
    return (
      <View style={styles.containerHeader}>
        {alert(this.props.propsname)}
        <View style={styles.textContainer}>
    <Text style={styles.textWhite}>{this.props.propsname}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "cyan",
    height: 150
  },
  textContainer: {
    marginVertical: 30,
    paddingTop: 30
  },
  textWhite: {
    color: "black"
  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: 40
  }
});
