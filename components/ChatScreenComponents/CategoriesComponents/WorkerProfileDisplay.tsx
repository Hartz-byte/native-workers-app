import { Image, StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";

interface WorkerProfileDisplayProps {
  item: {
    profileImage: any;
    countryImage: any;
    name: string;
  };
  containerStyle?: ViewStyle;
}

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
    margin: 10,
  },
  profileImageContainer: {
    position: "relative",
  },
  profileImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  countryImage: {
    width: 25,
    height: 25,
    borderRadius: 50,
    position: "absolute",
    right: 0,
  },
  name: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
});
