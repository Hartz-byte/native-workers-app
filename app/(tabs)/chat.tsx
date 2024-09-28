import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import TopHead from "@/components/ChatScreenComponents/TopHead";

const Chat = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* top icons and logo */}
      <TopHead />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
});
