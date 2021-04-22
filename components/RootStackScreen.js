import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../frontendScreen/SplashScreen";
import SignInScreen from "../frontendScreen/SignInScreen";
import SignUpScreen from "../frontendScreen/SignUpScreen";

const RootStack = createStackNavigator();
function RootStackScreen() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: true }}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="SignIn" component={SignInScreen} />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
