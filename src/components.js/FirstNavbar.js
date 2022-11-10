import React from "react";
import LoginSignUpBtn from "./LoginSignUpBtn";
import logo from "./logoWave.jpeg";

function FirstNavbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" class="d-inline-block align-text-top"></img>
            ChillWave
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="ms-auto">
              <LoginSignUpBtn />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FirstNavbar;
