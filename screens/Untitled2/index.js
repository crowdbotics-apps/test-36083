import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled2 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <View style={{
      left: 17,
      top: 36,
      position: "absolute",
      width: 171,
      height: 172,
      backgroundColor: "#E4E4E4",
      borderRadius: "50%"
    }}></View><Text style={{
      left: 44,
      top: 111,
      position: "absolute",
      width: 140,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Tap to Flip the coin</Text><TextInput style={{
      left: 26,
      top: 287,
      position: "absolute",
      backgroundColor: "#ffffff",
      borderColor: "#cccccc",
      width: 150,
      height: 30
    }}></TextInput><Text style={{
      left: 57,
      top: 322,
      position: "absolute",
      width: 100,
      height: 22,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Whats the %</Text></View>;
};

export default Untitled2;