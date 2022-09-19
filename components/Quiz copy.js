import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';
import HorizontalButton from './HorizontalButton';

export default function Quiz({ group, subjectName }) {
  //   const [questions, setQuestions] = useState(null);
  //   const [answers, setAnswers] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [index, setIndex] = useState(0);
  const { post_q_a } = group;
  const questions = [];
  const answers = [];
  const quizKey = post_q_a.map((obj) => obj);
  post_q_a.map((obj) => {
    let keys = Object.keys(obj);
    keys.forEach((key) => {
      let values = obj[key];
      questions.push(key);
      answers.push(values);
    });
  });

  let answerStack = answers.slice(0, 4);
  let questionStack = questions.slice(0, 4);
  let selectedAnswers = [];
  let totalQuizValue = questions.length;
  let currentQuestion = questionStack[index];
  let selectedAnswer;

  const runQuiz = () => {
    console.log('RUNNING QUIZ');
  };

  useEffect(() => {
    runQuiz();
  }, []);

  const handleAnswer = (e) => {
    console.log(e.target.value);
  };

  //   console.log('GROUP:', group);
  //   console.log('subjectName', subjectName);
  //   console.log('questions', questions);
  // console.log('answers', answers);
  //   console.log('quizKey', quizKey);
  //   console.log('answerStack', answerStack);
  //   console.log('questionStack', questionStack);

  return (
    <View style={styles.quizContainer}>
      <View styles={styles.header}>
        <Text style={styles.headerText}>{subjectName}</Text>
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.questionText}>{currentQuestion}?</Text>
      </View>

      <View style={styles.answerSection}>
        {/* <View style={styles.answersContainer}>
          <Text style={styles.answerText}>
            What is the capital of the United States?
          </Text>
        </View> */}
        <View style={styles.buttonContainer}>
          <AnswerButton answer="Yes" onPress={handleAnswer} />
          <AnswerButton answer="No" />
          <AnswerButton answer="Jesus" />
          <AnswerButton answer="Satan" />
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
    flexDirection: 'column',
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // flexWrap: 'wrap',
    // position: 'absolute',
    // bottom: 80,
    marginTop: 100,
    // marginLeft: 10,
    // marginRight: 10,
    // height: '70%',
  },
  answerText: {
    color: '#000',
    fontSize: '5rem',
    marginLeft: 10,
  },
  addTopMargin: {
    marginTop: 20,
  },
});
