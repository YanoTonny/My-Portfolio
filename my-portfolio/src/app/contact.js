import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Tonny Odhiambo</title>
        <meta name="description" content="Contact Tonny Odhiambo" />
      </Head>

      <main className={styles.main}>
        <h1>Contact</h1>
        <p>You can reach me at:</p>
        <p>Email: yano.odhiambo@gmail.com</p>
        <p>Phone: +254705577676</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/tonny-odhiambo" target="_blank" rel="noopener noreferrer">linkedin.com/in/tonny-odhiambo</a></p>
      </main>
    </div>
  );
}
