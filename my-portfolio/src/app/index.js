"use client";
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tonny Odhiambo - Portfolio</title>
        <meta name="description" content="Tonny Odhiambo's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
        </ul>

      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tonny Odhiambo's Portfolio
        </h1>
        <p className={styles.description}>
          I am a Web Developer and Cloud Security Enthusiast.
        </p>
        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h3>About Me &rarr;</h3>
              <p>Learn more about my background and skills.</p>
            </a>
          </Link>
          <Link href="/projects">
            <a className={styles.card}>
              <h3>Projects &rarr;</h3>
              <p>Check out the projects I have worked on.</p>
            </a>
          </Link>
          <Link href="/experience">
            <a className={styles.card}>
              <h3>Experience &rarr;</h3>
              <p>See my professional experience and internships.</p>
            </a>
          </Link>
          <Link href="/education">
            <a className={styles.card}>
              <h3>Education &rarr;</h3>
              <p>Details about my academic background.</p>
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.card}>
              <h3>Contact &rarr;</h3>
              <p>Get in touch with me.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
