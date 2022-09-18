import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';
import GroupContainer from '../components/GroupContainer';
import Quiz from '../components/Quiz';
import MiniButton from '../components/MiniButton';

export default function Home({ navigation }) {
  const [quizActive, setQuizActive] = useState(true);
  const { groups, current_user } = useSelector((state) => state.Reducer);
  let groupLength;

  if (groups) {
    groupLength = groups.length;
  }
  const dispatch = useDispatch();

  const handleQuizStatus = () => {
    console.log('running function');
    setQuizActive(!quizActive);
  };

  useEffect(() => {
    const unsubscribe = db
      .collectionGroup('posts')
      // .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        dispatch(
          setGroups(
            snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
          )
        );
      });
    return unsubscribe;
  }, [groupLength]);

  // console.log('current_user', current_user);
  // console.log('GROUPS', groups);

  return (
    <View style={styles.homeContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.homeHeader}>
          {!quizActive && (
            <Text style={styles.textStyle}>
              Select the quiz you would like to take
            </Text>
          )}
        </View>
        {!quizActive && (
          <View style={styles.innerContainer}>
            {groups &&
              groups.map((group, index) => {
                return (
                  <GroupContainer
                    label={group.subject_name}
                    key={index}
                    id={group.id}
                    handleQuizStatus={handleQuizStatus}
                  />
                );
              })}
          </View>
        )}

        {quizActive && (
          <View style={styles.innerContainer}>
            <Quiz />
          </View>
        )}
        {/* <Pressable onPress={handleQuizStatus}>
          <MiniButton label={'Press'} bgColor={'#FF416C'} />
        </Pressable> */}
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
  homeHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
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
    marginTop: '5%',
    // marginBottom: '10%',
    // width: '100%',
    // height: '50%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'red',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
  addMarginTop: {
    marginTop: 100,
  },
});
