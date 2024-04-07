import { StyleSheet } from "react-native";
import React, { useState } from "react";

// import { MD2Colors } from "react-native-paper";

import { View, Text, Button, TextField } from "react-native-ui-lib";

export default function HomePage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  const inputActionHandler = (field, value) => {
    if (field === "phoneNumber") {
      setPhoneNumber(value);
    } else if (field === "password") {
      setPassword(value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>智慧养老院健康管理系统</Text>
      <Text style={styles.subHeaderText}>登录</Text>
      <TextInput
        label="请输入您的手机号"
        style={styles.noPaddingInput}
        placeholder="输入手机号"
        placeholderTextColor={red}
        value={phoneNumber}
        onChangeText={(value) => inputActionHandler("phoneNumber", value)}
        right={<TextInput.Icon icon="phone" />}
      />

      <TextInput
        label="请输入您的密码"
        style={styles.noPaddingInput}
        placeholder="输入密码"
        placeholderTextColor={gray}
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text>立即注册</Text>
        <Text>忘记密码</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noPaddingInput: {
    backgroundColor: "transparent",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    letterSpacing: 1,
  },
  subHeaderText: {
    fontSize: 25,
    marginBottom: 30,
    fontWeight: 200,
  },
  container: {
    padding: 28,
  },
});
