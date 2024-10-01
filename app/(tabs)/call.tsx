import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import gifIcon from "../../assets/images/CategoryPics/icon.gif";

const Call = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* logo */}
      <Image source={gifIcon} alt="heart-icon" style={styles.logo} />

      {/* buttons and text 1 */}
      <View style={styles.buttonContainer}>
        {/* text 1 */}
        <Text style={styles.text1}>some text</Text>

        {/* button 1 */}
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Sing In with address</Text>
        </TouchableOpacity>

        {/* button 2 */}
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Log in with phone number</Text>
        </TouchableOpacity>
      </View>

      {/* boxes and text 2 */}
      <View>
        {/* text 2 */}
        <Text style={styles.text2}>Or login with:</Text>

        {/* boxes */}
        <View style={styles.boxContainer}>
          <View style={[styles.box, { backgroundColor: "blue" }]} />
          <View style={[styles.box, { backgroundColor: "lightblue" }]} />
          <View style={[styles.box, { backgroundColor: "violet" }]} />
          <View style={[styles.box, { backgroundColor: "lightgray" }]} />
        </View>
      </View>

      {/* text 3 */}
      <Text style={styles.text3}>We don't post anything to our app.</Text>
    </SafeAreaView>
  );
};

export default Call;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "pink",
    paddingTop: 80,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  heartBox: {
    width: 120,
    height: 120,
    backgroundColor: "white",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heart: {
    width: 60,
    height: 60,
    backgroundColor: "pink",
    borderRadius: 30,
  },
  logo: {},
  text1: {
    textAlign: "center",
    marginBottom: 20,
  },
  text2: {
    textAlign: "center",
    marginBottom: 15,
  },
  text3: {},
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  button1: {
    width: 300,
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  button2: {
    width: 300,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "red",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1: {
    color: "white",
    fontWeight: "bold",
  },
  buttonText2: {
    color: "red",
    fontWeight: "bold",
  },
  boxContainer: {
    flexDirection: "row",
    gap: 10,
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 14,
  },
});
