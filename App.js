import React from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import AuthNavigation from './AuthNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
