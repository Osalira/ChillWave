import React, { useState } from 'react';

function SignUpPage(props) {
  const [userAccount, setUserAccount] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setUserAccount((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function sendInformation(event) {
    props.sendInfo(userAccount);
    setUserAccount({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    props.onClose();
    event.preventDefault();
  }

  // ------------------------------------different section----------------------

  function preventCloseWhenClick(event) {
    event.stopPropagation();
  }
  /*here with this conditional statements i'm setting up this function to not return 
anything if the the modal state in the app file is false, only show the page if the
State is true which can only be trigger by a function in the app file that depends on the click of
the LOGIN button*/

  if (!props.openU) return null;

  return (
    <div>
      <div onClick={props.onClose} className='overlay'>
        <div onClick={preventCloseWhenClick} className='modalContainer'>
          <div className='modalRight'>
            <p onClick={props.onClose} className='closeBtn'>
              X
            </p>
            <div className='contentLogin'>
              <form>
                <div class='form-group'>
                  <label for='exampleInputEmail1'>Create a Username</label>
                  <input
                    type='email'
                    name='username'
                    value={userAccount.username}
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='create a username'
                    onChange={handleChange}
                  />
                  <label for='exampleInputEmail2'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    value={userAccount.email}
                    class='form-control'
                    id='exampleInputEmail2'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    onChange={handleChange}
                  />
                  <small id='emailHelp' class='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class='form-group'>
                  <label for='exampleInputPassword3'>Password</label>
                  <input
                    type='password'
                    name='password'
                    value={userAccount.password}
                    class='form-control pssBtn'
                    id='exampleInputPassword3'
                    placeholder='Password'
                    onChange={handleChange}
                  />
                  <input
                    type='password'
                    name='confirmPassword'
                    value={userAccount.confirmPassword}
                    class='form-control pssBtn'
                    id='exampleConfirmPassword4'
                    placeholder='Confirm Password'
                    onChange={handleChange}
                  />
                </div>
                <div className='loginBtn'>
                  <button
                    type='submit'
                    class='btn btn-primary'
                    onClick={sendInformation}
                  >
                    SignUp
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

export default SignUpPage;
