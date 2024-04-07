import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

export default function HomePage() {
  return (
    <View>
      <Text>Text</Text>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
}
