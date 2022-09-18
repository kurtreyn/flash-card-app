import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';
import GroupContainer from '../components/GroupContainer';

// const plusIcon = Image.resolveAssetSource(PLUS_ICON).uri;

export default function Home({ navigation }) {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const { groups, group_name, current_user } = useSelector(
    (state) => state.Reducer
  );

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection('users')
      .where('owner_uid', '==', user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };

  // console.log('current_user', current_user);
  // console.log('GROUPS', groups);

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          <GroupContainer label="History" />
          <GroupContainer label="Biology" />
          <GroupContainer label="Chemestry" />
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
