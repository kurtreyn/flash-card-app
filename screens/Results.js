import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Results({ navigation }) {
  const { final_results, final_score } = useSelector((state) => state.Reducer);

  console.log('final_results', final_results);

  return (
    <ScrollView>
      <View style={styles.resultsContainer}>
        <View style={styles.finalScoreContainer}>
          <Text style={styles.finalScore}>Final Score: {final_score}</Text>
        </View>
        {final_results.map((result) => {
          return (
            <View style={styles.displaySection}>
              <Text style={styles.questionText}>{result.askedQuestion}?</Text>
              <Text style={styles.answerText}>{result.correctAnswer}</Text>
              <Text style={styles.answerText}>{result.selectedAnswer}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },
  displaySection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    // height: '9%',
    backgroundColor: '#fff',
    marginTop: 100,
    marginLeft: 10,
  },
  questionText: {
    color: 'blue',
    fontSize: 20,
  },
  answerText: {
    color: '#000',
    fontSize: 18,
    marginLeft: 5,
  },
  finalScoreContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  finalScore: {
    color: '#000',
    fontSize: 25,
    marginTop: 15,
  },
});
