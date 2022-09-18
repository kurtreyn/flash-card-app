import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';

export default function QuizScreen({ navigation }) {
  const { groups } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.quizScreenContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}></View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  quizScreenContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  innerContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '20%',
    // marginBottom: '10%',
    // width: '100%',
    // height: '50%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'red',
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
  },
  addMarginTop: {
    marginTop: 100,
  },
});
