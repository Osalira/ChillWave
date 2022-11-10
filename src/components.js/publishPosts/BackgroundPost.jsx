import React from 'react';
import styles from './Background.module.css';

import background from '../../assets/image/background.jpeg';

function BackgroundPost(props) {
  return (
    <div
      className={styles.article}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h3 className={styles.header}>{props.title}</h3>
      <p className={styles.header}>{props.address}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default BackgroundPost;
