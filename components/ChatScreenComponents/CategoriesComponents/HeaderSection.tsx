import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { FC } from "react";
import { Feather, SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";

import { CategoryData } from "@/utils/CategoryData";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const PAGE_WIDTH = Dimensions.get("window").width;
const COUNT = 5;

// interface HeaderSectionProps
interface HeaderSectionProps {
  onCategorySelect: (categoryTitle: string | null) => void;
  setSearchTerm: (term: string) => void;
}

const HeaderSection: FC<HeaderSectionProps> = ({
  onCategorySelect,
  setSearchTerm,
}) => {
  // carousel options and style
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
          enabled={false}
          data={CategoryData}
          renderItem={({ item }) => (
            <View style={styles.carouselItem}>
              {/* category button */}
              <View style={styles.buttonContainer}>
                <TouchableWithoutFeedback
                  onPress={() => onCategorySelect(item.title)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Image source={item.icon} style={styles.categoryImage} />
                </TouchableWithoutFeedback>
              </View>

              {/* category title */}
              {item.title !== null ? (
                <Text style={styles.categoryText}>{item.title}</Text>
              ) : (
                <Text style={styles.categoryText}>All</Text>
              )}
            </View>
          )}
        />
      </View>

      {/* search bar */}
      <View style={styles.flex}>
        <View style={styles.searchBarContainer}>
          <View style={styles.flex}>
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Search"
              onChangeText={setSearchTerm}
              style={styles.textInput}
            />
          </View>

          {/* mic icon button */}
          <TouchableWithoutFeedback>
            <SimpleLineIcons name="microphone" size={24} color="black" />
          </TouchableWithoutFeedback>
        </View>

        {/* option icon button */}
        <View style={styles.optionIconContainer}>
          <TouchableWithoutFeedback>
            <Ionicons name="options-outline" size={26} color="black" />
          </TouchableWithoutFeedback>
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
  textInput: {
    width: "77%",
    height: "100%",
    fontSize: 16,
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
  buttonContainer: {
    width: PAGE_WIDTH * 0.12,
    height: PAGE_WIDTH * 0.12,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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
