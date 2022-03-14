import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const speak = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ width: 200, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="Press to hear text" onPress={speak} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
