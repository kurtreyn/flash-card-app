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
import HorizontalButton from './HorizontalButton';

export default function ControlPanel({
  hasNameOfGroup,
  handleGroupNameStatus,
  handleReset,
  handleAddQandA,
  handleAddGroup,
}) {
  return (
    <KeyboardAvoidingView
      style={styles.controlPanelContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onPress={() => Keyboard.dismiss()}
    >
      {/* <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      {!hasNameOfGroup && (
        <Pressable onPress={handleGroupNameStatus} style={styles.addTopMargin}>
          <HorizontalButton label={'Add Group Name'} bgColor={'#d81159'} />
        </Pressable>
      )}

      {hasNameOfGroup && (
        <Pressable onPress={handleAddQandA} style={styles.addTopMargin}>
          <HorizontalButton
            label={'Add Question & Answer'}
            bgColor={'#d81159'}
          />
        </Pressable>
      )}

      {hasNameOfGroup && (
        <Pressable onPress={handleAddGroup}>
          <HorizontalButton label={'Submit Group'} bgColor={'#2980B9'} />
        </Pressable>
      )}

      {hasNameOfGroup && (
        <Pressable onPress={handleReset}>
          <HorizontalButton label={'Reset'} bgColor={'#d81159'} />
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
  addTopMargin: {
    marginTop: 100,
  },
});
