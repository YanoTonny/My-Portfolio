"use client";
import Head from 'next/head';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Tonny Odhiambo</title>
        <meta name="description" content="Tonny Odhiambo's Projects" />
      </Head>
      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/index">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
        </ul>

      </nav>

      <main className={styles.main}>
        <h1>Projects</h1>
        <ul>
          <li>
            <h2>PoliceWatch</h2>
            <p>A web application for police accountability in Kenya.</p>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </main>
    </div>
  );
}
