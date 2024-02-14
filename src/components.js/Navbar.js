import React from 'react';
import SecondNavbar from './SecondNavBar';
import FirstNavbar from './FirstNavbar';

function Navbar(props) {
  return (
    <div>
      <FirstNavbar
        modalState={props.modalState}
        modalStateU={props.modalStateU}
      />

      <SecondNavbar />
    </div>
  );
}

export default Navbar;
