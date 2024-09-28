import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Feather, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

import { CategoryData } from "@/utils/CategoryData";

const PAGE_WIDTH = Dimensions.get("window").width;
const COUNT = 5;

const HeaderSection = () => {
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH / COUNT,
    height: 100,
    style: {
      width: PAGE_WIDTH,
    },
  } as const;

  return (
    <View>
      {/* categories carousel */}
      <View style={styles.categoryContainer}>
        <Carousel
          {...baseOptions}
          loop
          autoPlay={true}
          autoPlayInterval={2000}
          data={CategoryData}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              <TouchableOpacity>
                <Image source={item.image} style={styles.categoryImage} />
              </TouchableOpacity>

              <Text style={styles.categoryText}>{item.title}</Text>
            </View>
          )}
        />
      </View>

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
  carouselItem: {
    width: PAGE_WIDTH,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
  },
});
