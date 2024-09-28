import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather, SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const HeaderSection = () => {
  return (
    <View>
      {/* categories */}
      <View style={styles.categoryContainer}></View>

      {/* search bar */}
      <View style={styles.flex}>
        <View style={styles.searchBarContainer}>
          <View style={styles.flex}>
            <Feather name="search" size={24} color="black" />
            <TextInput placeholder="Search" />
          </View>

          {/* mic icon button */}
          <TouchableOpacity>
            <SimpleLineIcons name="microphone" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* option icon button */}
        <View style={styles.optionIconContainer}>
          <TouchableOpacity>
            <Ionicons name="options-outline" size={26} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  categoryContainer: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#F1EBE7",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    height: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 20,
    marginRight: 5,
  },
  flex: {
    flexDirection: "row",
    gap: 8,
  },
  optionIconContainer: {
    width: 45,
    height: 45,
    backgroundColor: "#F2F2F2",
    marginTop: 20,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
