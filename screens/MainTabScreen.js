import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";
import NotificationsScreen from "./NotificationsScreen";
import * as Icon from "@expo/vector-icons";

const Stack = createStackNavigator();
const MainTabScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreens" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default MainTabScreen;

// const HomeStack = createStackNavigator();
// const SettingsStack = createStackNavigator();
// const HomeStackScreen = () => {
//   return (
//     <HomeScreen.Navigator>
//       <HomeStack.Screen name="Home" component={HomeScreen} />
//     </HomeScreen.Navigator>
//   );
// };

// const SettingsStackScreen = () => {
//   return (
//     <SettingsStack.Navigator>
//       <SettingsStack.Screen name="Settings" component={SettingsScreen} />
//     </SettingsStack.Navigator>
//   );
// };
