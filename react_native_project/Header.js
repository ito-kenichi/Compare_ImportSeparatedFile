import React from "react";

import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.textContainer}>
        <Text style={styles.textWhite}>Holi</Text>
        <Text style={styles.textWhite}>1,004 tweets</Text>
      </View>
      <View style={styles.tabContainer}>
        <View>
          <Text>Tweets</Text>
        </View>
        <View>
          <Text>Tweets & Replies</Text>
        </View>
        <View>
          <Text>Media</Text>
        </View>
        <View>
          <Text>Likes</Text>
        </View>
      </View>
    </View>
  );
};

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
export default Header;