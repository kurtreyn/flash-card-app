import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

export default function ControlPanel() {
  return (
    <KeyboardAvoidingView
      style={styles.controlPanelContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Text>Control Panel</Text>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  controlPanelContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '40%',
    backgroundColor: '#ddd',
  },
});
