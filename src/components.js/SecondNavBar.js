import React from 'react';

function SecondNavbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg bg-dark navbar-dark'>
        <div class='container-fluid'>
          <div class='ms-auto mb-0'>
            <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <a class='nav-link active' aria-current='page' href='#'>
                    Home
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Events
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Missed Connections
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default SecondNavbar;
