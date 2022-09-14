import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
