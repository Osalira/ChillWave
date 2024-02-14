import React, { useState } from 'react';

function LoginPage(props) {
  const [userLogin, setUserLogin] = useState({
    usernameLog: '',
    passwordLogin: '',
  });

  function handleLogin(e) {
    const { name, value } = e.target;
    setUserLogin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function sendInfoLog(event) {
    props.sendLoginInfo(userLogin);
    props.onClose();

    setUserLogin({
      usernameLog: '',
      passwordLogin: '',
    });
    event.preventDefault();
  }

  // ---------------------------section differ--------------------------------
  // prevent the click on the login page to close the page
  function preventCloseOnClick(event) {
    event.stopPropagation();
  }

  /*here with this conditional statements i'm setting up this function to not return 
anything if the the modal state in the app file is false, only show the page if the
State is true which can only be trigger by a function in the app file that depends on the click of
the LOGIN button*/
  if (!props.open) return null;

  return (
    <div>
      <div onClick={props.onClose} className='overlay'>
        <div onClick={preventCloseOnClick} className='modalContainer'>
          <div className='modalRight'>
            <p onClick={props.onClose} className='closeBtn'>
              X
            </p>
            <div className='contentLogin'>
              <form>
                <div class='form-group'>
                  <label for='exampleInputEmail5'>
                    Email address or Username
                  </label>
                  <input
                    type='text'
                    name='usernameLog'
                    value={userLogin.usernameLog}
                    class='form-control'
                    id='exampleInputEmail5'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    onChange={handleLogin}
                  />
                  <small id='emailHelp' class='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class='form-group'>
                  <label for='exampleInputPassword6'>Password</label>
                  <input
                    type='password'
                    name='passwordLogin'
                    value={userLogin.passwordLogin}
                    className='form-control'
                    id='exampleInputPassword6'
                    placeholder='Password'
                    onChange={handleLogin}
                  />
                </div>
                <div className='loginBtn'>
                  <button
                    type='submit'
                    className='btn btn-primary'
                    onClick={sendInfoLog}
                  >
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
