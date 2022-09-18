import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import MiniButton from './MiniButton';
import HorizontalButton from './HorizontalButton';

export default function Quiz({ group, subjectName }) {
  //   const [questions, setQuestions] = useState(null);
  //   const [answers, setAnswers] = useState(null);

  const questions = [];
  const answers = [];

  const { post_q_a } = group;
  //   console.log(post_q_a);

  post_q_a.map((obj) => {
    // console.log(obj);
    let keys = Object.keys(obj);
    // console.log(keys);

    keys.forEach((key) => {
      let values = obj[key];
      questions.push(key);
      answers.push(values);
    });
  });

  //   console.log('GROUP:', group);
  //   console.log('subjectName', subjectName);
  //   console.log('questions', questions);
  console.log('answers', answers);

  return (
    <View style={styles.quizContainer}>
      <View styles={styles.header}>
        <Text style={styles.headerText}>{subjectName}</Text>
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Question displayed here</Text>
      </View>

      <View style={styles.answerSection}>
        <View style={styles.answersContainer}>
          <Text style={styles.answerText}>
            What is the capital of the United States?
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <MiniButton option="A" answer="Yes" />
          <MiniButton option="B" answer="No" />
          <MiniButton option="C" answer="Jesus" />
          <MiniButton option="D" answer="Satan" />
          <Pressable onPress={null} style={styles.addTopMargin}>
            <HorizontalButton label={'End Quiz'} bgColor={'#FF416C'} />
          </Pressable>
        </View>
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
  headerText: {
    color: '#fff',
    fontSize: 30,
    marginLeft: 10,
  },
  questionSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    backgroundColor: '#fff',
    marginTop: 20,
  },
  questionText: {
    color: '#000',
    fontSize: 30,
  },
  answerSection: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '70%',
    backgroundColor: '#a8c0ff',
    position: 'relative',
  },
  answersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
    // marginLeft: 10,
    // marginRight: 10,
    // height: '70%',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    position: 'absolute',
    bottom: 80,
    // marginTop: 200,
    // marginLeft: 10,
    // marginRight: 10,
    // height: '70%',
  },
  answerText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10,
  },
  addTopMargin: {
    marginTop: 20,
  },
});
