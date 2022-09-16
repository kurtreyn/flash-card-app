import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

// const plusIcon = Image.resolveAssetSource(PLUS_ICON).uri;

export default function Home({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          <Text style={[styles.textStyle, styles.addMarginTop]}>Home Page</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
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
    width: '100%',
    height: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: '15%',
    // marginBottom: '10%',
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
