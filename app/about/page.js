import React from 'react';

// import styles from '../styles/About.module.css'
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <div
      // className={styles.highlight}
      className={`${styles.highlightscss} content`}
    >
      <h2>About Page</h2>
      <button className='btn btn-primary'>Primary</button>
    </div>
  );
};


export default About;
