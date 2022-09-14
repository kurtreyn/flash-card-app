import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputContainer from '../components/InputContainer';
import ControlPanel from '../components/ControlPanel';

export default function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <InputContainer />
      <ControlPanel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    marginTop: '12%',
    marginBottom: '10%',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    borderRadius: '10px',
  },
});
