import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';

export default function InputContainer() {
  return (
    <KeyboardAvoidingView style={styles.inputContainer}>
      <View style={styles.formWrapper}>
        <Text style={styles.labelStyle}>Question</Text>
        <TextInput style={styles.textInputStyle}>Question</TextInput>
      </View>
      <View style={styles.formWrapper}>
        <Text style={styles.labelStyle}>Answer</Text>
        <TextInput style={styles.textInputStyle}>Answer</TextInput>
      </View>
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
  },
  labelStyle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '400',
  },
});
