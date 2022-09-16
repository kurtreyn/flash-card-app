import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../redux/actions';
import HorizontalButton from './HorizontalButton';

export default function ControlPanel({
  question,
  setQuestion,
  answer,
  setAnswer,
  nameOfSet,
  setNameOfSet,
}) {
  const dispatch = useDispatch();
  const { groups } = useSelector((state) => state.Reducer);

  const handleDispatch = () => {
    dispatch(setGroups({ question: question, answer: answer }));
    setAnswer('');
    setQuestion('');
  };

  console.log('GROUPS', groups);

  return (
    <KeyboardAvoidingView
      style={styles.controlPanelContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Pressable onPress={handleDispatch}>
          <HorizontalButton
            label={'Add Question & Answer'}
            bgColor={'#d81159'}
          />
        </Pressable>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  controlPanelContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%',
    backgroundColor: '#ddd',
  },
});
