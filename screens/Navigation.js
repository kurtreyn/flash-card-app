import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
// import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUserDispatch } from '../redux/actions';
import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import AddQuizGroup from './AddQuizGroup';
import Signup from './Signup';
// import Store from '../redux/store';

const screenOptions = {
  headerShown: false,
};
const Tab = createMaterialBottomTabNavigator();

export const SignedInStack = ({ navigation, currentUser }) => {
  // const { current_user } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  // console.log('currentUser', currentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(setCurrentUserDispatch(currentUser));
    }
  }, []);

  // console.log('current_user', current_user);

  return (
    // <Provider store={Store}>
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          labelStyle={{
            color: '#444',
          }}
          options={{
            tabBarLabel: 'Login',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="login" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signup}
          labelStyle={{
            color: '#444',
          }}
          options={{
            tabBarLabel: 'Signup',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="clipboard-edit-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Quiz Group"
          component={AddQuizGroup}
          options={{
            tabBarLabel: 'Add Quiz Group',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="border-color"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

export const SignedOutStack = () => (
  // <Provider store={Store}>
  <NavigationContainer>
    <Tab.Navigator initialRouteName="Login" screenOptions={screenOptions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={Signup} />
    </Tab.Navigator>
  </NavigationContainer>
  // </Provider>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
  },
});
