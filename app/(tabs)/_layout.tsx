import { Tabs } from "expo-router";
import {
  MaterialIcons,
  Feather,
  Ionicons,
  Foundation,
} from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="chat"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 64,
          paddingLeft: 10,
          paddingRight: 10,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: "#dc2f02",
        tabBarInactiveTintColor: "#000",
      }}
    >
      {/* chat */}
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              {focused && <View style={styles.upperLine} />}

              <Ionicons
                name="chatbubbles-outline"
                size={24}
                color={focused ? "#dc2f02" : "#000"}
              />

              <Text
                style={{
                  color: focused ? "#dc2f02" : "#000",
                  fontSize: 14,
                }}
              >
                Chat
              </Text>
            </View>
          ),
        }}
      />

      {/* call */}
      <Tabs.Screen
        name="call"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              {focused && <View style={styles.upperLine} />}

              <Feather
                name="phone-call"
                size={24}
                color={focused ? "#dc2f02" : "#000"}
              />

              <Text
                style={{
                  color: focused ? "#dc2f02" : "#000",
                  fontSize: 14,
                }}
              >
                Call
              </Text>
            </View>
          ),
        }}
      />

      {/* scan */}
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              {focused && <View style={styles.upperLine} />}

              <MaterialIcons
                name="qr-code-scanner"
                size={24}
                color={focused ? "#dc2f02" : "#000"}
              />

              <Text
                style={{
                  color: focused ? "#dc2f02" : "#000",
                  fontSize: 14,
                }}
              >
                Scan
              </Text>
            </View>
          ),
        }}
      />

      {/* wishlist */}
      <Tabs.Screen
        name="wishlist"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              {focused && <View style={styles.upperLine} />}

              <MaterialIcons
                name="favorite-border"
                size={24}
                color={focused ? "#dc2f02" : "#000"}
              />

              <Text
                style={{
                  color: focused ? "#dc2f02" : "#000",
                  fontSize: 14,
                }}
              >
                Wishlist
              </Text>
            </View>
          ),
        }}
      />

      {/* vip */}
      <Tabs.Screen
        name="vip"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.screen}>
              {focused && <View style={styles.upperLine} />}

              <Foundation
                name="ticket"
                size={24}
                color={focused ? "#dc2f02" : "#000"}
              />

              <Text
                style={{
                  color: focused ? "#dc2f02" : "#000",
                  fontSize: 14,
                }}
              >
                VIP
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  upperLine: {
    width: 35,
    height: 2,
    backgroundColor: "#dc2f02",
    position: "absolute",
    top: -10,
  },
});
