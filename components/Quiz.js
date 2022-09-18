import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function Quiz() {
  return (
    <View style={styles.quizContainer}>
      <View styles={styles.header}>
        <Text>Quiz</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 100,
  },
  innerContainer: {},
});
