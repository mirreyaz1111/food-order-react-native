import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import type { Node } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
  input: {

  }
})

export const LoginPage = (): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1
      }}>
        <TextInput
          style={styles.input}
          onChangeText={(data) => { }}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(data) => { }}
          placeholder="Password"
        // keyboardType="numeric"
        />
      </View>
    </ScrollView>
  );
};