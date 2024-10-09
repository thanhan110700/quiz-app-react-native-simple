import React, { useState } from "react";
import { COLORS } from "../../Theme";
const { TouchableOpacity } = require("react-native");
const { View, Image, Text } = require("react-native");

export const WelcomePage = ({ navigation, startQuiz }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 400,
          resizeMode: "contain",
        }}
        source={{
          uri: "https://cdn-icons-png.freepik.com/256/3407/3407022.png?semt=ais_hybrid",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          Ready For your Written Test?
        </Text>
      </View>
      {/* Retry Quiz button */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
          startQuiz();
        }}
        style={{
          backgroundColor: COLORS.black,
          paddingHorizontal: 5,
          paddingVertical: 20,
          width: "50%",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            fontSize: 20,
          }}
        >
          Let's Begin
        </Text>
      </TouchableOpacity>
    </View>
  );
};
