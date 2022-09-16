import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import InputContainer from '../components/InputContainer';
import ControlPanel from '../components/ControlPanel';

export default function AddQuizGroup({ navigate }) {
  const [hasNameOfGroup, setHasNameOfGroup] = useState(null);
  const [nameOfGroup, setNameOfGroup] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  return (
    <View style={styles.addQuizGroupContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          <InputContainer
            hasNameOfGroup={hasNameOfGroup}
            setHasNameOfGroup={setHasNameOfGroup}
            nameOfGroup={nameOfGroup}
            setNameOfGroup={setNameOfGroup}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
          />
          <ControlPanel
            hasNameOfGroup={hasNameOfGroup}
            setHasNameOfGroup={setHasNameOfGroup}
            nameOfGroup={nameOfGroup}
            setNameOfGroup={setNameOfGroup}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  addQuizGroupContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15%',
    // marginBottom: '10%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'red',
  },
});
