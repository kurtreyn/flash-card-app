import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AuthNavigation from './AuthNavigation';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  // const [userInfo, setUserInfo] = useState(null);

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   clientId: process.env.EXPO_AUTH_CLIENT_ID,
  // });

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     console.log('response', response);
  //     dispatch(setToken(response.authentication.accessToken));
  //   }
  // }, [response]);

  // const handleLogin = async () => {
  //   let userInfoResponse = await fetch(
  //     'https://api.imgur.com/oauth2/authorize',
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   userInfoResponse.json().then((data) => {
  //     console.log('data', data);
  //     setUserInfo(data);
  //   });
  // };

  // console.log('userInfo', userInfo);
  return (
    <View style={styles.container}>
      <AuthNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
