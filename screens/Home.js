import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    marginBottom: '10%',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    borderRadius: '10px',
  },
});
