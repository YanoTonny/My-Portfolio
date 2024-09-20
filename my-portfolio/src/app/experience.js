"use client";
import Head from 'next/head';
import styles from '../styles/Experience.module.css';

export default function Experience() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Experience - Tonny Odhiambo</title>
        <meta name="description" content="Tonny Odhiambo's Experience" />
      </Head>

      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/index">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/education">Education</Link></li>
        </ul>

      </nav>

      <main className={styles.main}>
        <h1>Experience</h1>
        <ul>
          <li>
            <h2>Strategy and Change Intern</h2>
            <p>Kenya Forest Service</p>
            <p>Worked on strategic planning and change management initiatives.</p>
          </li>
          {/* Add more experiences as needed */}
        </ul>
      </main>
    </div>
  );
}
