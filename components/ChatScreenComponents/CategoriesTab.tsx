import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

import HeaderSection from "./CategoriesComponents/HeaderSection";
import WorkerProfileDisplay from "./CategoriesComponents/WorkerProfileDisplay";
import { ProfileData } from "@/utils/ProfileData";

const CategoriesTab = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchWord, setSearchWord] = useState("");

  // special indexes for left margin
  const specialIndexes = [0, 4, 8, 12, 16];

  // render WorkerProfileDisplay item with conditional style
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    // conditional style
    const containerStyle = specialIndexes.includes(index)
      ? styles.mainContainer
      : {};

    return <WorkerProfileDisplay item={item} containerStyle={containerStyle} />;
  };

  // function to handle filter category and search words
  const filteredProfileData = ProfileData.filter((profile) => {
    // category filteration
    const matchesCategory =
      selectedCategory === null || profile.Worker_Role === selectedCategory;

    // search filteration
    const matchesSearch = profile.name
      .toLowerCase()
      .includes(searchWord.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <FlatList
      data={filteredProfileData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={4}
      ListHeaderComponent={
        <HeaderSection
          onCategorySelect={setSelectedCategory}
          setSearchTerm={setSearchWord}
        />
      }
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
    />
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 22,
  },
});
