import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeTab = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
};

export default WelcomeTab;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
