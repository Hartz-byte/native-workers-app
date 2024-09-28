import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";

import LogoImage from "../../assets/images/logo.png";

const TopHead = () => {
  return (
    <View style={styles.container}>
      {/* option icon and logo */}
      <View style={styles.logoContainer}>
        {/* option icon */}
        <TouchableWithoutFeedback>
          <MaterialCommunityIcons
            name="reorder-horizontal"
            size={26}
            color="black"
          />
        </TouchableWithoutFeedback>

        {/* logo */}
        <Image source={LogoImage} style={styles.logo} />
      </View>

      {/* bell icon */}
      <TouchableWithoutFeedback>
        <Fontisto name="bell" size={24} color="black" />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TopHead;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
    gap: 20,
  },
  logo: {
    width: 55,
    height: 30,
  },
});
