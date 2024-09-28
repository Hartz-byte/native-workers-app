import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Wishlist = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Wishlist</Text>
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
