import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Vip = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Vip</Text>
    </View>
  );
};

export default Vip;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
