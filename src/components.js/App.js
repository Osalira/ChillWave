import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Body from './Body';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

function App() {
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

  return (
    <div>
      <Navbar modalState={openLoginModal} modalStateU={openSignUpPage} />
      <LoginPage open={openModal} onClose={closeLoginModal} />
      <SignUpPage open={signUpModalState} onClose={closeSignUpModal} />

      <Body />
      <Footer />
    </div>
  );
}

export default App;
