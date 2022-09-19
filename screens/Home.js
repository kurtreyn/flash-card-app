import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase, db } from '../firebase';
import GroupContainer from '../components/GroupContainer';
import Quiz from '../components/Quiz';
import AnswerButton from '../components/AnswerButton';

export default function Home({ navigation }) {
  const [quizActive, setQuizActive] = useState(true);
  const [subjectName, setSubjectName] = useState('');
  const { groups, current_user } = useSelector((state) => state.Reducer);
  let groupLength;

  if (groups) {
    groupLength = groups.length;
    // const { subject_name } = groups;
    // console.log(subject_name);
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
        {/* {!groups && (
          <View style={styles.homeHeader}>
            {!quizActive && (
              <Text style={styles.textStyle}>
                Looks like you don't have any quizes available. Press the pencil
                icon at the bottom of this page to go to Add Quiz Group and add
                a quiz.
              </Text>
            )}
          </View>
        )} */}

        <View style={styles.homeHeader}>
          {!quizActive && (
            <Text style={styles.textStyle}>
              Select the quiz you would like to take
            </Text>
          )}
        </View>

        {!quizActive && (
          <ScrollView>
            <View style={styles.innerContainer}>
              {groups &&
                groups.map((group, index) => {
                  return (
                    <GroupContainer
                      label={group.subject_name}
                      key={index}
                      id={group.id}
                      group={group}
                      handleQuizStatus={handleQuizStatus}
                    />
                  );
                })}
            </View>
          </ScrollView>
        )}

        {quizActive && (
          <View style={styles.innerContainer}>
            {groups &&
              groups.map((group, index) => {
                return (
                  <Quiz
                    group={group}
                    key={index}
                    subjectName={group.subject_name}
                  />
                );
              })}
          </View>
        )}
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
