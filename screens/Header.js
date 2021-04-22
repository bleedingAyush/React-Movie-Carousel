import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 100,
          width: 250,
          backgroundColor: "#000",
          elevation: 2,
          marginTop: "40px",
          borderRadius: "20px",
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default Header;
