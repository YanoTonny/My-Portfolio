'use client'; // Mark this component as a Client Component

import Link from 'next/link';
import styles from './page.module.css'; // Ensure you have a CSS module file for styling

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Tonny Odhiambo</h1>
        <p className={styles.subtitle}>Web Developer | Cloud and Network Security Enthusiast</p>
      </header>

      <nav className={styles.navigation}>
        <ul>
          <li><Link href="/index">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
        </ul>

      </nav>
      
      <section className={styles.about}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p>
          I am a passionate web developer with experience in cloud and network security. 
          I hold a Bachelor of Science in Strategic Management and have worked on various projects involving 
          web development and cybersecurity. My goal is to leverage my skills to build innovative solutions and 
          contribute to the tech community.
        </p>
      </section>
      
      <section className={styles.skills}>
        <h2 className={styles.skillsTitle}>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Next.js</li>
          <li>Cloud Technologies (AWS, Azure)</li>
          <li>Network Security</li>
          <li>Database Management (MySQL, MongoDB)</li>
        </ul>
      </section>
      
      <section className={styles.projects}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <ul>
          <li>
            <h3>PoliceWatch</h3>
            <p>A web application for police accountability inspired by recent unrest in Kenya.</p>
          </li>
          <li>
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website to showcase my skills and projects.</p>
          </li>
        </ul>
      </section>
      
      <section className={styles.contact}>
        <h2 className={styles.contactTitle}>Contact</h2>
        <p>Email: <a href="mailto:yano.odhiambo@gmail.com">yano.odhiambo@gmail.com</a></p>
        <p>Phone: <a href="tel:+254705577676">+254705577676</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/tonny-odhiambo" target="_blank" rel="noopener noreferrer">linkedin.com/in/tonny-odhiambo</a></p>
      </section>
      
      <footer className={styles.footer}>
        <p>&copy; 2024 Tonny Odhiambo</p>
      </footer>
    </div>
  );
}
