import React from "react";
import { Redirect } from "expo-router";

const Home = () => {
  return <Redirect href="/(tabs)/chat" />;
};

export default Home;
