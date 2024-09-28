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
    height: PAGE_WIDTH / 2,
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
    width: "100%",
    height: PAGE_WIDTH * 0.27,
    backgroundColor: "#F1EBE7",
  },
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    height: PAGE_WIDTH * 0.12,
    backgroundColor: "#F2F2F2",
    borderRadius: PAGE_WIDTH * 0.02,
    paddingLeft: PAGE_WIDTH * 0.03,
    paddingRight: PAGE_WIDTH * 0.03,
    margin: PAGE_WIDTH * 0.05,
    marginRight: PAGE_WIDTH * 0.02,
  },
  flex: {
    flexDirection: "row",
    gap: 8,
  },
  optionIconContainer: {
    width: PAGE_WIDTH * 0.12,
    height: PAGE_WIDTH * 0.12,
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
    marginHorizontal: 4,
  },
  categoryImage: {
    width: PAGE_WIDTH * 0.12,
    height: PAGE_WIDTH * 0.12,
  },
  categoryText: {
    marginTop: PAGE_WIDTH * 0.02,
    textAlign: "center",
    fontSize: PAGE_WIDTH * 0.03,
  },
});
