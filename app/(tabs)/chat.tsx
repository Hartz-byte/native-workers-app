import { Dimensions, StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TabView,
  SceneMap,
  TabBar,
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";

import TopHead from "@/components/ChatScreenComponents/TopHead";
import WelcomeTab from "@/components/ChatScreenComponents/WelcomeTab";
import CategoriesTab from "@/components/ChatScreenComponents/CategoriesTab";

type Route = {
  key: string;
  title: string;
};

// memoized render tab bar component
const RenderTabBar = memo(
  (props: SceneRendererProps & { navigationState: NavigationState<Route> }) => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarStyle}
        labelStyle={styles.labelStyle}
      />
    );
  }
);

const Chat = () => {
  // state to handle tab index and routes
  const [index, setIndex] = useState(0);
  const [routes] = useState<Route[]>([
    { key: "welcome", title: "Welcome Tab" },
    { key: "categories", title: "Categories" },
  ]);

  // scenes for each tab
  const renderScene = SceneMap({
    welcome: WelcomeTab,
    categories: CategoriesTab,
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* top icons and logo */}
      <TopHead />

      {/* tab view for welcome and categories */}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={(props) => <RenderTabBar {...props} />}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  indicatorStyle: {
    backgroundColor: "red",
    height: 3,
  },
  tabBarStyle: {
    backgroundColor: "white",
  },
  labelStyle: {
    fontSize: 14,
    color: "black",
    textTransform: "none",
  },
});
