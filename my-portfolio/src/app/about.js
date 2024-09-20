"use client";
import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - Tonny Odhiambo</title>
        <meta name="description" content="About Tonny Odhiambo" />
      </Head>
      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/index">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
        </ul>

      </nav>

      <main className={styles.main}>
        <h1>About Me</h1>
        <p>
          I am Tonny Odhiambo, a Web Developer and Cloud Security Enthusiast. With a background in Strategic Management and certifications in cloud and network security, I am passionate about developing impactful solutions and securing cloud environments.
        </p>
        <p>Skills: JavaScript, TypeScript, Next.js, AWS, Cybersecurity</p>
      </main>
    </div>
  );
}
