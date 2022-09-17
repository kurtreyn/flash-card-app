import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// const plusIcon = Image.resolveAssetSource(PLUS_ICON).uri;

export default function GroupContainer({ label, id, question, answer }) {
  return (
    <TouchableHighlight underlayColor="#f7797d">
      <View style={styles.groupContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.textStyle}> {label} </Text>
          <Text style={styles.textStyle}> {id} </Text>
          <Text style={styles.textStyle}> {question} </Text>
          <Text style={styles.textStyle}> {answer} </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  groupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    // marginTop: 10,
    // paddingTop: 20,
    // paddingBottom: 20,
    backgroundColor: '#f7797d',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dd3e54',
    width: 120,
    height: 120,
  },

  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 118,
    height: 118,
    // flexDirection: 'column',
    // marginTop: '15%',
    // marginBottom: '10%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'green',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
  addMarginTop: {
    marginTop: 100,
  },
});
