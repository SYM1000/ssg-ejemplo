import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Esta es la <a>Actividad 7!</a>
        </h1>

        <p className={styles.description}>
          Creado por{' '}
          <code className={styles.code}>Santiago Yeomans</code>
        </p>

        <div className={styles.grid}>
          <Link href="/postOne" >
            <div className={styles.card}>
              <h2>Primer Post &rarr;</h2>
              <p>Este es el primer ejemplo de un post creado.</p>
            </div>
          </Link>

          <Link href="/postTwo">
            <div className={styles.card}>
              <h2>Segundo Post &rarr;</h2>
              <p>Después de ver el primer post, este es el post que tiene que ver.</p>
            </div>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
