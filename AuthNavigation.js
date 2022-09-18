import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentUser } from './redux/actions';
import { SignedInStack, SignedOutStack } from './screens/Navigation';

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // const { current_user } = useSelector((state) => state.Reducer);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);

  // console.log('currentUser', currentUser);

  return (
    <>
      {currentUser ? (
        <SignedInStack
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      ) : (
        <SignedOutStack />
      )}
      {/* <SignedInStack handleLogin={handleLogin} /> */}
    </>
  );
};

export default AuthNavigation;
