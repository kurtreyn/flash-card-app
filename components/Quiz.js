import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton';
import HorizontalButton from './HorizontalButton';
import Results from './Results';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Quiz({ subjectName, group }) {
  const [options, setOptions] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const [rightAnswer, setRightAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const { post_q_a } = group;
  let answers = post_q_a.map((answer) => answer.correct_answer);
  //   let questions = post_q_a.map((question) => question.question);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const runQuiz = (currentObj) => {
    let wrongAnswers = [];
    for (let i = 0; i <= answers.length; i++) {
      if (answers[i] != currentObj.correct_answer) {
        if (i > 3) {
          break;
        }
        wrongAnswers.push(answers[i]);
      }
    }

    let { correct_answer } = currentObj;
    let { question } = currentObj;

    let answerOptions = [];
    wrongAnswers.forEach((answer) => answerOptions.push(answer));
    answerOptions.push(correct_answer);

    let qSet = {
      question: question,
      correctAnswer: correct_answer,
      answerOptions: shuffle(answerOptions),
    };
    setCurrentQuestion(question);
    setRightAnswer(correct_answer);
    setOptions([qSet]);
    console.log('index was:', index);
    setIndex(index + 1);
  };

  useEffect(() => {
    if (!disabled) {
      runQuiz(post_q_a[index]);
    }
  }, [disabled]);

  const handleAnswer = (answer) => {
    if (index === post_q_a.length) {
      setDisabled(true);
      return;
    }
    if (answer === rightAnswer) {
      //   console.log('ANSWERED:', answer);
      setScore(score + 1);
    }
    // console.log('answer:', answer);
    // console.log('optons.correct_answer', options.correctAnswer);

    // console.log(correct_answer, question);

    if (results.length === 0) {
      setResults([
        {
          askedQuestion: currentQuestion,
          selectedAnswer: answer,
          correctAnswer: rightAnswer,
        },
      ]);
    } else {
      setResults((prevState) => {
        return [
          ...prevState,
          {
            askedQuestion: currentQuestion,
            selectedAnswer: answer,
            correctAnswer: rightAnswer,
          },
        ];
      });
    }

    runQuiz(post_q_a[index]);
  };

  //   console.log('group', group);
  //   console.log('subjectName', subjectName);
  // console.log('post_q_a', post_q_a);
  //   console.log('questions', questions);
  //   console.log('answers', answers);
  //   console.log('options', options);
  //   console.log('score', score);
  //   console.log('index:', index);
  console.log('results', results);

  return (
    <View style={styles.quizContainer}>
      <View styles={styles.header}>
        <Text style={styles.headerText}>{subjectName}</Text>
      </View>

      <View style={styles.questionSection}>
        {!disabled &&
          !showResults &&
          options.map((option) => {
            return <Text style={styles.questionText}>{option.question}?</Text>;
          })}
      </View>

      <View style={styles.answerSection}>
        <View style={styles.buttonContainer}>
          {!disabled &&
            !showResults &&
            options.map((option, index) => {
              return (
                <View>
                  <AnswerButton
                    answer={option.answerOptions[0]}
                    onPress={() => handleAnswer(option.answerOptions[0])}
                    disable={disabled}
                  />
                  <AnswerButton
                    answer={option.answerOptions[1]}
                    onPress={() => handleAnswer(option.answerOptions[1])}
                    disable={disabled}
                  />
                  <AnswerButton
                    answer={option.answerOptions[2]}
                    onPress={() => handleAnswer(option.answerOptions[2])}
                    disable={disabled}
                  />
                  <AnswerButton
                    answer={option.answerOptions[3]}
                    onPress={() => handleAnswer(option.answerOptions[3])}
                    disable={disabled}
                  />
                </View>
              );
            })}

          <Pressable onPress={null} style={styles.addTopMargin}>
            {!disabled && (
              <TouchableOpacity onPress={() => setShowResults(true)}>
                <HorizontalButton label={'End Quiz'} bgColor={'#FF416C'} />
              </TouchableOpacity>
            )}
            {disabled && (
              <TouchableOpacity onPress={() => setShowResults(true)}>
                <HorizontalButton label={'View Results'} bgColor={'#3f2b96'} />
              </TouchableOpacity>
            )}
          </Pressable>
        </View>
      </View>

      {showResults &&
        results &&
        results.map((result) => {
          return (
            <Results
              score={score}
              question={result.askedQuestion}
              selectedAnswer={result.selectedAnswer}
              correctAnswer={result.correctAnswer}
            />
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
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
