import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';
import HorizontalButton from './HorizontalButton';

export default function Quiz({ subjectName, group }) {
  //   const [questions, setQuestions] = useState(null);
  //   const [answers, setAnswers] = useState(null);
  const [options, setOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [index, setIndex] = useState(0);
  const { post_q_a } = group;
  let answers = post_q_a.map((answer) => answer.correct_answer);
  let questions = post_q_a.map((question) => question.question);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffle(options);

    return options;
  };

  const runQuiz = (currentObj) => {
    console.log('RUNNING QUIZ');
    // let wrongAnswers = answers.filter((answer) => {
    //   if (answer != currentObj.correct_answer) {
    //     for (let i = 0; i <= 3; i++) {
    //       return answers[i];
    //     }
    //   }
    // });
    let wrongAnswers = [];
    for (let i = 0; i <= answers.length; i++) {
      if (answers[i] != currentObj.correct_answer) {
        if (i > 3) {
          break;
        }
        wrongAnswers.push(answers[i]);
      }
    }

    console.log('wrongAnswers', wrongAnswers);
    console.log(currentObj.correct_answer);
    let opt;
  };

  useEffect(() => {
    runQuiz(post_q_a[0]);
  }, []);

  const handleAnswer = (e) => {
    console.log(e.target.value);
  };

  //   console.log('group', group);
  //   console.log('subjectName', subjectName);
  // console.log('post_q_a', post_q_a);
  //   console.log('questions', questions);
  //   console.log('answers', answers);
  console.log('options', options);

  return (
    <View style={styles.quizContainer}>
      <View styles={styles.header}>
        <Text style={styles.headerText}>{subjectName}</Text>
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.questionText}>{subjectName}?</Text>
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
