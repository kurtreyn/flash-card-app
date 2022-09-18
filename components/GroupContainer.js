import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GroupContainer({ label, handleQuizStatus }) {
  return (
    <Pressable onPress={handleQuizStatus}>
      <TouchableHighlight underlayColor="#f7797d">
        <View style={styles.groupContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.textStyle}> {label} Quiz </Text>
          </View>
        </View>
      </TouchableHighlight>
    </Pressable>
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
    width: 145,
    height: 110,
  },

  innerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 108,
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
