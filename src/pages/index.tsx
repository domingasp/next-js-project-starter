import Head from 'next/head';
import Button from '../common/components/Button/Button';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter</title>
        <meta
          name="description"
          content="Starter generated by create next app, then tweaked"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Button>Hello</Button>
        </div>
      </main>
    </div>
  );
}

export default Home;
