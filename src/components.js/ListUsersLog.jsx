import React from 'react';
import * as Realm from 'realm-web';
import { useState, useEffect } from 'react';

function ListUsersLog() {
  const [userNames, setUserNames] = useState([]);

  useEffect(async () => {
    const REALM_APP_ID = 'products-xrals';
    const app = new Realm.App({ id: REALM_APP_ID });
    // Create an anonymous credential
    const credentials = Realm.Credentials.anonymous();
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      const allNames = await user.functions.customersName();
      setUserNames(allNames);
    } catch (error) {
      console.error(error);
    }
    w;
  }, []);

  return (
    <div>
      <main class='d-flex flex-nowrap'>
        <div class='b-example-divider b-example-vr'></div>

        <div class='d-flex flex-column align-items-stretch flex-shrink-0 bg-white Lstyle'>
          <a
            href='/'
            class='d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom'
          >
            <svg class='bi pe-none me-2' width='30' height='24'>
              <use xLinkHref='#bootstrap' />
            </svg>
            <span class='fs-5 fw-semibold'>People connected</span>
          </a>
          <div class='list-group list-group-flush border-bottom scrollarea overflow-auto ttt'>
            {/* rendering some names using a serverless function from Mongodb  */}

            {userNames &&
              userNames.map((userName) => {
                return (
                  <div>
                    <a
                      href='#'
                      class='list-group-item list-group-item-action active py-3 lh-sm'
                      ariaCurrent='true'
                    >
                      <div class='d-flex w-100 align-items-center justify-content-between'>
                        <strong class='mb-1' key={userName._id}>
                          {userName.name}
                        </strong>
                        <small>Wed</small>
                      </div>
                      <div class='col-10 mb-1 small'>
                        <div>Distance: 15Km</div>
                        <div>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            class='bi bi-chat-text'
                            viewBox='0 0 16 16'
                          >
                            <path d='M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z'></path>
                            <path d='M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z'></path>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>

        <div class='b-example-divider b-example-vr'></div>
      </main>
    </div>
  );
}

export default ListUsersLog;
