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
  handleSubmitGroup,
}) {
  return (
    <KeyboardAvoidingView
      style={styles.controlPanelContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onPress={() => Keyboard.dismiss()}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          {!hasNameOfGroup && (
            <Pressable
              onPress={handleGroupNameStatus}
              style={styles.addTopMargin}
            >
              <HorizontalButton label={'Add Group Name'} bgColor={'#d81159'} />
            </Pressable>
          )}

          {hasNameOfGroup && (
            <Pressable onPress={handleAddQandA} style={styles.addTopMargin}>
              <HorizontalButton
                label={'Add Question & Answer'}
                bgColor={'#FF416C'}
              />
            </Pressable>
          )}

          {hasNameOfGroup && (
            <Pressable onPress={handleSubmitGroup}>
              <HorizontalButton label={'Submit Group'} bgColor={'#2980B9'} />
            </Pressable>
          )}

          {hasNameOfGroup && (
            <Pressable onPress={handleReset}>
              <HorizontalButton label={'Reset'} bgColor={'#d81159'} />
            </Pressable>
          )}

          {/* {hasNameOfGroup && (
            <Pressable onPress={null}>
              <HorizontalButton label={'Reset'} bgColor={'#d81159'} />
            </Pressable>
          )} */}
        </View>
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
  },
  addTopMargin: {
    marginTop: 100,
  },
});
