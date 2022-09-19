import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Results({
  question,
  selectedAnswer,
  correctAnswer,
  score,
}) {
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.displaySection}>
        <Text>{question}</Text>
        <Text> {selectedAnswer}</Text>
        <Text> {correctAnswer}</Text>
        <Text style={{ marginTop: 20 }}>{score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'absolute',
    width: '100%',
    height: '200%',
    top: 40,
  },
  displaySection: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
  },
});
