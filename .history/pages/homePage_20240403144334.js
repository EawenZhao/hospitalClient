import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import {
  ActivityIndicator,
  MD2Colors,
  HelperText,
  TextInput,
} from "react-native-paper";

export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  return (
    <View>
      {/* <ActivityIndicator animating={true} color={MD2Colors.red800} /> */}

      <TextInput
        label="请输入手机号"
        style={styles.noPaddingInput}
        placeholder="输入数字"
        placeholderTextColor={MD2Colors.red100}
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />

      <TextInput
        label="请输入密码"
        style={styles.noPaddingInput}
        placeholder="输入密码"
        placeholderTextColor={MD2Colors.gray400}
        secureTextEntry
        value={password}
        onChangeText={(value) => inputActionHandler("password", value)}
        right={
          <TextInput.Icon
            icon={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() => setFlatTextSecureEntry(!flatTextSecureEntry)}
            forceTextInputFocus={false}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
  },
});
