import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Body = props => {
  return (
    <View style={styles.containerBody}>
      <View style={styles.tabContainer}>
        <View>
          <Text>BODY</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBody: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "green",
    height: 150
  },
  tabContainer: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
    height: 100,
    width: 200,
  }
});
export default Body;