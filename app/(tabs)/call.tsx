import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Call = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Call</Text>
    </View>
  );
};

export default Call;

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
