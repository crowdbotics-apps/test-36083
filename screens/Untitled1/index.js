import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Pressable onPress={() => navigation.navigate("Untitled2")} style={{
      position: "initial",
      width: "195px",
      height: "350px",
      marginLeft: "-10px",
      marginTop: "-10px"
    }}><View style={{
        left: 27,
        top: 270,
        position: "absolute",
        height: 60,
        width: 140,
        backgroundColor: "#E4E4E4",
        borderRadius: 0,
        color: "#777777"
      }}></View></Pressable><Text style={{
      left: 76,
      top: 292,
      position: "absolute",
      width: 41,
      height: 20,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Next</Text></View>;
};

export default Untitled1;