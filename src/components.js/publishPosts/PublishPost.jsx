import React from 'react';
import ControlledCarousel from './ControlledCarousel';
import stylesPpost from './PublishPost.module.css';

function PublishPost(props) {
  return (
    <div className={stylesPpost.boxLook}>
      {/* // array from body file being passed to the ControlledCarousel file through the props
    // of PublishPost in the nody file */}
      <ControlledCarousel arrayFromBody={props.arrayFromBody} />
    </div>
  );
}

export default PublishPost;
