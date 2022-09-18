import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setGroups, setHasGroupName, setGroupName } from '../redux/actions';
import { LinearGradient } from 'expo-linear-gradient';
import InputContainer from '../components/InputContainer';
import ControlPanel from '../components/ControlPanel';

export default function AddQuizGroup({ navigate }) {
  const dispatch = useDispatch();
  const { groups, has_group_name, group_name } = useSelector(
    (state) => state.Reducer
  );
  const [nameOfGroup, setNameOfGroup] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [number, setNumber] = useState(0);
  const [groupSet, setGroupSet] = useState(null);
  // let questionAnswerArr = [];

  const handleGroupNameStatus = () => {
    dispatch(setHasGroupName(true));
    dispatch(setGroupName(nameOfGroup));
  };

  const handleReset = () => {
    dispatch(setHasGroupName(false));
    dispatch(setGroupName(''));
    setGroupName('');
    setNumber(0);
  };

  const handleAddQandA = () => {
    if (groupSet === null) {
      setGroupSet([
        {
          [question]: answer,
        },
      ]);
    } else {
      setGroupSet((prevState) => {
        return [...prevState, { [question]: answer }];
      });
    }
    setQuestion('');
    setAnswer('');
    setNumber(number + 1);
  };

  const handleAddGroup = () => {
    const newGroup = Object.assign({}, ...groupSet);
    let groupArr = [];
    groupArr.push(newGroup);
    dispatch(setGroups(groupArr));
  };

  const newGroup = Object.assign({}, ...groupSet);
  let groupArr = [];
  groupArr.push(newGroup);

  // console.log('group_name:', group_name);
  console.log('groups:', groups);

  return (
    <View style={styles.addQuizGroupContainer}>
      <LinearGradient
        colors={['#2980B9', '#6DD5FA', '#FFFFFF']}
        style={styles.background}
      >
        <View style={styles.innerContainer}>
          <InputContainer
            hasNameOfGroup={has_group_name}
            nameOfGroup={nameOfGroup}
            setNameOfGroup={setNameOfGroup}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
          />
          <ControlPanel
            hasNameOfGroup={has_group_name}
            handleGroupNameStatus={handleGroupNameStatus}
            handleReset={handleReset}
            handleAddQandA={handleAddQandA}
            handleAddGroup={handleAddGroup}
          />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  addQuizGroupContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
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
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '15%',
    // marginBottom: '10%',
    // borderStyle: 'solid',
    // borderWidth: '2px',
    // borderColor: 'red',
  },
});
