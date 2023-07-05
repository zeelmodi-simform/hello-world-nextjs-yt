import React from 'react';

// import styles from '../styles/About.module.css'
import styles from '../styles/About.module.scss'
import Head from 'next/head';

export const metadata = {
  title: 'About Codevolution',
  description: 'Free Tutorials on Web Development',
}

const About = () => {
  return (
    <>
      {/* <Head >
        <title>About Codevolution</title>
        <meta name="description" content="Free Tutorials on Web Development" />
      </Head> */}
    <div
      // className={styles.highlight}
      className={`${styles.highlightscss} content`}
      >
      <h2>About Page</h2>
      <button className='btn btn-primary'>Primary</button>
    </div>
    </>
  );
};


export default About;
