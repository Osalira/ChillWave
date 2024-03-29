import React, { useState } from 'react';
import PostsBody from './post/PostsBody';
import ControlledCarousel from './publishPosts/ControlledCarousel';
import styles from './publishPosts/PublishPost.module.css';
import ListUsersLog from './ListUsersLog';

function Body(props) {
  // ---------------this is the array for users------------
  const logUsers = props.listUsers;
  //---------------end of the array for users------------
  const [postArray, setPostArray] = useState([]);

  function addNotes(noteObjectFromPostsBodytFile) {
    setPostArray((prevData) => {
      return [...prevData, noteObjectFromPostsBodytFile];
    });
  }

  return (
    <div>
      <div className='bodyClass text-bg-light p-3'>
        <div className='row'>
          <div className='col-md-9'>
            <div className='textPostBox '>
              <div className={styles.boxLook}>
                <ControlledCarousel arrayFromBody={postArray} />
              </div>
              {/* // Take the array that is ubpdated with the object from postsBody file 
        // and send them to PUBLISHPOST FILE through the props (arrayFromBody) */}
              {/* <PublishPost arrayFromBody={postArray} /> */}
            </div>
            <h1>Post Something</h1>
            <div>
              {/* // the transferNote referes to the addNotes function in this file that
          // recieves the object data being created in the PostsBodyFile and put it
          // in an array in the function addNotes on this file */}
              <PostsBody transferNote={addNotes} />
            </div>
          </div>
          <div class='col-md-3'>
            {logUsers.map((userinfo, index) => {
              return (
                <div>
                  <p id={index}>{userinfo}</p>
                </div>
              );
            })}
            <ListUsersLog />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
