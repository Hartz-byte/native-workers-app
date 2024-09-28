import { FlatList, StyleSheet } from "react-native";
import React from "react";

import HeaderSection from "./CategoriesComponents/HeaderSection";
import WorkerProfileDisplay from "./CategoriesComponents/WorkerProfileDisplay";
import { ProfileData } from "@/utils/ProfileData";

const CategoriesTab = () => {
  const specialIndexes = [0, 4, 8, 12, 16];

  // render WorkerProfileDisplay item
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    // conditional style
    const containerStyle = specialIndexes.includes(index)
      ? styles.mainContainer
      : {};

    return <WorkerProfileDisplay item={item} containerStyle={containerStyle} />;
  };

  return (
    <FlatList
      data={ProfileData}
      renderItem={renderItem}
      numColumns={4}
      ListHeaderComponent={<HeaderSection />}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CategoriesTab;

const styles = StyleSheet.create({
  mainContainer: {
    marginLeft: 22,
  },
});
