import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function App() {
  // -------The SIGNUP state array to store information entered by user-----------

  const [usersArray, setUserArray] = useState([]);

  function getUserInfo(infoUser) {
    setUserArray((prevInfo) => {
      return [...prevInfo, infoUser];
    });
  }

  // ------------------The LOGIN function and states-----------
  const [openModal, setOpenModal] = useState(false);
  function openLoginModal() {
    return setOpenModal(true);
  }
  function closeLoginModal() {
    return setOpenModal(false);
  }
  // ------------------The LSIGNUP function and states-----------
  const [signUpModalState, setSignUpModalState] = useState(false);

  function openSignUpPage() {
    return setSignUpModalState(true);
  }

  function closeSignUpModal() {
    return setSignUpModalState(false);
  }

  // -------The LOGIN function and state to get Login info and compare with-----------
  //------the info in the array/database to allow login...
  const [loginArray, setLoginArray] = useState([]);

  function getLoginInfo(loginInfo) {
    const nameLog = loginInfo.usernameLog;
    const passLog = loginInfo.passwordLogin;
    // check if the the username exist in the sign up array
    const logList = usersArray.find(({ username }) => username === nameLog);
    // const logPass = usersArray.find(({ password }) => password === passLog);
    const logL = logList.username;
    // const logP = logPass.password;
    const logP = logList.password;

    if (logL === nameLog && logP === passLog) {
      setLoginArray((prevValue) => {
        return [...prevValue, nameLog];
      });
    }
    // here i have to figure out what to do when someone enters incorrect info, what
    // response to give and how to put it on the image
    else if (logList === undefined) {
      setLoginArray((prevValue) => {
        return [...prevValue];
      });
    }
  }

  return (
    <div>
      <Navbar modalState={openLoginModal} modalStateU={openSignUpPage} />
      <LoginPage
        open={openModal}
        onClose={closeLoginModal}
        sendLoginInfo={getLoginInfo}
      />
      <SignUpPage
        openU={signUpModalState}
        onClose={closeSignUpModal}
        sendInfo={getUserInfo}
      />

      <Body listUsers={loginArray} />
      <Footer />
    </div>
  );
}

export default App;
