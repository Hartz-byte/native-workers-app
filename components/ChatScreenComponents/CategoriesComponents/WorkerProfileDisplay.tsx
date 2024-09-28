import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";

interface WorkerProfileDisplayProps {
  item: {
    profileImage: any;
    countryImage: any;
    name: string;
  };
  containerStyle?: ViewStyle;
}

const PAGE_WIDTH = Dimensions.get("window").width;

const WorkerProfileDisplay: FC<WorkerProfileDisplayProps> = ({
  item,
  containerStyle,
}) => {
  return (
    <View style={[styles.itemContainer, containerStyle]}>
      {/* profile and country images */}
      <View style={styles.profileImageContainer}>
        <Image source={item.profileImage} style={styles.profileImage} />
        <Image source={item.countryImage} style={styles.countryImage} />
      </View>

      {/* name */}
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

export default WorkerProfileDisplay;

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    margin: PAGE_WIDTH * 0.03,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: PAGE_WIDTH * 0.177,
    height: PAGE_WIDTH * 0.177,
    borderRadius: PAGE_WIDTH * 0.09,
  },
  countryImage: {
    width: PAGE_WIDTH * 0.06,
    height: PAGE_WIDTH * 0.06,
    borderRadius: PAGE_WIDTH * 0.035,
    position: "absolute",
    right: 0,
  },
  name: {
    marginTop: PAGE_WIDTH * 0.02,
    fontSize: PAGE_WIDTH * 0.03,
    textAlign: "center",
  },
});
