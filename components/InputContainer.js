import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../redux/actions';

export default function InputContainer({
  question,
  setQuestion,
  answer,
  setAnswer,
  nameOfSet,
  setNameOfSet,
}) {
  console.log('question:', question);
  console.log('answer:', answer);
  console.log('nameOfSet', nameOfSet);

  return (
    <KeyboardAvoidingView style={styles.inputContainer}>
      {!nameOfSet ? (
        <View style={styles.formWrapper}>
          <Text style={styles.labelStyle}>Name of Set</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="enter namen"
            placeholderTextColor="#444"
            autoCapitalize="none"
            keyboardType="text"
            autoFocus={true}
            onChangeText={setNameOfSet}
            value={nameOfSet}
          />
        </View>
      ) : null}
      {nameOfSet ? (
        <View style={styles.formWrapper}>
          <Text style={styles.labelStyle}>Question</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="enter question"
            placeholderTextColor="#444"
            autoCapitalize="none"
            keyboardType="text"
            autoFocus={true}
            onChangeText={setQuestion}
            value={question}
          />
        </View>
      ) : null}
      {nameOfSet ? (
        <View style={styles.formWrapper}>
          <Text style={styles.labelStyle}>Answer</Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="enter answer"
            placeholderTextColor="#444"
            autoCapitalize="none"
            keyboardType="text"
            autoFocus={true}
            onChangeText={setAnswer}
            value={answer}
          />
        </View>
      ) : null}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%',
    backgroundColor: '#222',
  },
  formWrapper: {
    display: 'flex',
    marginBottom: 15,
  },
  textInputStyle: {
    width: 400,
    height: 50,
    backgroundColor: '#fff',
    marginTop: 5,
    marginBottom: 5,
    padding: 4,
  },
  labelStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '400',
  },
});
