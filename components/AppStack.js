import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Icon from "@expo/vector-icons";
import MainTabScreen from "../screens/MainTabScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContentOptions={{ activeBackgroundColor: "transparent" }}
      >
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default AppStack;
