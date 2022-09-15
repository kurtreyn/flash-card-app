import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputContainer from '../components/InputContainer';
import ControlPanel from '../components/ControlPanel';

// const plusIcon = Image.resolveAssetSource(PLUS_ICON).uri;

export default function Home({ navigation }) {
  const [postData, setPostData] = useState({ question: '', answer: '' });
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  return (
    <SafeAreaView style={styles.homeContainer}>
      <InputContainer
        postData={postData}
        setPostData={setPostData}
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        setAnswer={setAnswer}
      />
      <ControlPanel
        postData={postData}
        setPostData={setPostData}
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        setAnswer={setAnswer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    // marginTop: '12%',
    // marginBottom: '10%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'blue',
    // borderRadius: '10px',
  },
});
