import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalButton from '../components/HorizontalButton';

export default function Login() {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.loginHeader}>
        <Text style={styles.loginHeaderText}>Login</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => alert('Login')}>
          <HorizontalButton label={'Login'} bgColor={'#00a8e8'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Sign Up')}>
          <HorizontalButton label={'Sign Up'} bgColor={'#d81159'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: '15%',
    marginBottom: '10%',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'blue',
    borderRadius: '10px',
  },
  loginHeader: {
    alignItems: 'center',
  },
  loginHeaderText: {
    fontSize: '25px',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 600,
  },
});
