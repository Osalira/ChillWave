import React from 'react';

function LoginSignUpBtn(props) {
  return (
    <div class='navbar-nav gap-2 col-6 '>
      <button
        class='btn btn-primary loginBtnT'
        type='button'
        onClick={props.modalState}
      >
        Login
      </button>

      <button
        class='btn btn-primary ms-1 loginBtnT'
        type='button'
        onClick={props.modalStateU}
      >
        SignUp
      </button>
    </div>
  );
}

export default LoginSignUpBtn;
