import React, { useState } from 'react';
import SelectCategories from './SelectCategories';

function PostsBody(props) {
  const [postNote, setPostNote] = useState({
    title: '',
    address: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPostNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function sendInputsToBodyFile(event) {
    // Call the function addNotes in the Body file through the props of PostsBody
    // and Pass it the value of the object PostNotes which will in turn be placed in a
    // array in the body file
    props.transferNote(postNote);

    setPostNote({
      title: '',
      address: '',
      content: '',
    });

    event.preventDefault();
  }

  return (
    <div>
      <div className='postBox'>
        <form>
          <div className='inputPostBox'>
            <input
              name='title'
              value={postNote.title}
              placeholder='title'
              className='titlePost'
              onChange={handleChange}
            />
          </div>
          <div className='inputPostBox'>
            <input
              name='address'
              value={postNote.address}
              placeholder='address only for invitation events'
              className='addressTitlePost'
              onChange={handleChange}
            />
          </div>
          <div className='textPostBox'>
            <textarea
              name='content'
              value={postNote.content}
              placeholder='Describe your event...'
              rows='3'
              className='textAreaPost'
              onChange={handleChange}
            />
          </div>

          <div className='selectSection'>
            <div className='boxCategorie'>
              <p>Categorie :</p>
            </div>
            <div className='selectCategories'>
              <SelectCategories />
            </div>
          </div>

          <div className='postButtonDiv'>
            <button
              onClick={sendInputsToBodyFile}
              type='button'
              className='btn btn-primary buttonPost'
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostsBody;
