import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Alert,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, setToken } from '../redux/actions';
import { SafeAreaView } from 'react-native-safe-area-context';
import HorizontalButton from '../components/HorizontalButton';
import SignInButton from '../components/SignInButton';

const image = { uri: 'https://reactjs.org/logo-og.png' };

WebBrowser.maybeCompleteAuthSession();

export default function Login({ navigate }) {
  const dispatch = useDispatch();
  const { current_user, token } = useSelector((state) => state.Reducer);
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_AUTH_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      console.log('response', response);
      dispatch(setToken(response.authentication.accessToken));
    }
  }, [response]);

  const handleLogin = async () => {
    let userInfoResponse = await fetch(
      'https://api.imgur.com/oauth2/authorize',
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    userInfoResponse.json().then((data) => {
      console.log('data', data);
      setUserInfo(data);
    });
  };

  // console.log('userInfo', userInfo);

  // const handleLogin = async () => {
  //   try {
  //     await firebase
  //       .auth()
  //       .signInWithPopup(GoogleAuth)
  //       .then((result) => {
  //         let credential = result.credential;
  //         let token = credential.accessToken;
  //         let user = result.user;
  //         console.log(`user: ${user}`);
  //         dispatch(setCurrentUser(user));
  //         dispatch(setToken(token));
  //       })
  //       .then((navigation) => {
  //         navigation.navigate('Home');
  //       });
  //     console.log('Firebase Login Successful');
  //   } catch (error) {
  //     Alert.alert(
  //       'Uh oh!',
  //       error.message + '\n\n ... You will need a Google account to log in?',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => console.log('OK'),
  //           style: 'cancel',
  //         },
  //       ]
  //     );
  //   }
  // };

  // console.log('currentUser', current_user);
  // console.log('token', token);

  return (
    <View style={styles.loginContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            onPress={
              token
                ? handleLogin
                : () => {
                    promptAsync({ showInRevents: true });
                  }
            }
          >
            <SignInButton />
          </TouchableOpacity>
        </View>
        {/* </ImageBackground> */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // marginTop: '15%',
    // marginBottom: '10%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'blue',
    // borderRadius: '10px',
  },
  loginHeader: {
    alignItems: 'center',
  },
  loginHeaderText: {
    fontSize: '25px',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 600,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
