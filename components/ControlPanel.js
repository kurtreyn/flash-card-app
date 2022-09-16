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
import { setGroups, setHasGroupName } from '../redux/actions';
import HorizontalButton from './HorizontalButton';

export default function ControlPanel({
  question,
  setQuestion,
  answer,
  setAnswer,
  hasNameOfGroup,
  setHasNameOfGroup,
  nameOfGroup,
  setNameOfGroup,
}) {
  const dispatch = useDispatch();
  const { groups, has_group_name } = useSelector((state) => state.Reducer);

  const handleGroupNameStatus = () => {
    dispatch(setHasGroupName(true));
  };

  const handleDispatch = () => {
    dispatch(setGroups({ question: question, answer: answer }));
    setAnswer('');
    setQuestion('');
  };

  console.log('GROUPS', groups);
  console.log('has_group_name', has_group_name);

  return (
    <KeyboardAvoidingView
      style={styles.controlPanelContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onPress={() => Keyboard.dismiss()}
    >
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      {!hasNameOfGroup && (
        <Pressable onPress={handleGroupNameStatus}>
          <HorizontalButton label={'Add Group Name'} bgColor={'#d81159'} />
        </Pressable>
      )}

      {hasNameOfGroup && (
        <Pressable onPress={handleDispatch}>
          <HorizontalButton
            label={'Add Question & Answer'}
            bgColor={'#d81159'}
          />
        </Pressable>
      )}

      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  controlPanelContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '50%',
  },
});
