import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStack from "./components/AuthStack";

const App = () => {
  const [loaded] = useFonts({
    Bold: require("./assets/Fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const Mytheme = {
    dark: true,
    colors: {
      primary: "#fff",
      text: "#fff",
      card: "#232323",
    },
  };
  return (
    <NavigationContainer theme={Mytheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfbfb",
    textAlign: "center",
    // alignItems: "center",
  },
  buttonss: {
    width: 150,
    color: "#fff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    // flexDirection: "row",
  },
  image_style: {
    display: "flex",
    justifyContent: "center",
    height: "20em",
    marginTop: "9em",
    width: "20em",
  },
});
