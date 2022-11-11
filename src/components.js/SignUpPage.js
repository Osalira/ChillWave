import React from 'react';

function SignUpPage({ open, onClose }) {
  function preventCloseWhenClick(event) {
    event.stopPropagation();
  }
  /*here with this conditional statements i'm setting up this function to not return 
anything if the the modal state in the app file is false, only show the page if the
State is true which can only be trigger by a function in the app file that depends on the click of
the LOGIN button*/

  if (!open) return null;

  return (
    <div>
      <div onClick={onClose} className='overlay'>
        <div onClick={preventCloseWhenClick} className='modalContainer'>
          <div className='modalRight'>
            <p onClick={onClose} className='closeBtn'>
              X
            </p>
            <div className='contentLogin'>
              <form>
                <div class='form-group'>
                  <label for='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    class='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <small id='emailHelp' class='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class='form-group'>
                  <label for='exampleInputPassword1'>Password</label>
                  <input
                    type='password'
                    class='form-control'
                    id='exampleInputPassword1'
                    placeholder='Password'
                  />
                </div>
                <div class='form-group form-check'>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    id='exampleCheck1'
                  />
                  <label class='form-check-label' for='exampleCheck1'>
                    Check me out
                  </label>
                </div>
                <button type='submit' class='btn btn-primary'>
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
