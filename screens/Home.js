import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';
import GroupContainer from '../components/GroupContainer';

// const plusIcon = Image.resolveAssetSource(PLUS_ICON).uri;

export default function Home({ navigation }) {
  const { groups, group_name, current_user } = useSelector(
    (state) => state.Reducer
  );
  let groupLength;

  if (groups) {
    groupLength = groups.length;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = db
      .collectionGroup('posts')
      // .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        dispatch(
          setGroups(
            snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
          )
        );
      });
    return unsubscribe;
  }, [groupLength]);

  console.log('current_user', current_user);
  console.log('GROUPS', groups);

  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          {groups &&
            groups.map((group, index) => {
              return <GroupContainer label={group.subject_name} key={index} />;
            })}

          {/* <GroupContainer label="History" /> */}
          {/* <GroupContainer label="Biology" /> */}
          {/* <GroupContainer label="Chemestry" /> */}
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
