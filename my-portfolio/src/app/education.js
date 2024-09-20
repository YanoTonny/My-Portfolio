"use client";
import Head from 'next/head';
import styles from '../styles/Education.module.css';

export default function Education() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Education - Tonny Odhiambo</title>
        <meta name="description" content="Tonny Odhiambo's Education" />
      </Head>
      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/index">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
        </ul>

      </nav>

      <main className={styles.main}>
        <h1>Education</h1>
        <ul>
          <li>
            <h2>Bachelor of Science in Strategic Management</h2>
            <p>Jomo Kenyatta University of Agriculture & Technology (2017-2021)</p>
          </li>
          {/* Add more education details as needed */}
        </ul>
      </main>
    </div>
  );
}
