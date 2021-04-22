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

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image_style}
        source={require("../assets/family1.svg")}
      ></Image>
      <Text style={{ color: "#000", fontFamily: "Bold", fontSize: "25px" }}>
        Send Gifts to your loved ones
      </Text>
      <Animatable.View animation="shake" duraton="8000">
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            marginTop: "30px",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          <LinearGradient
            colors={["#98d9f5", "#f68bb5", "#f94547"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.buttonss}
          >
            <Text style={{ size: "50px", color: "#fff", fontFamily: "bold" }}>
              Sign In
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

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
