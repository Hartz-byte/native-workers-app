import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Scan = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Scan</Text>
    </View>
  );
};

export default Scan;

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
