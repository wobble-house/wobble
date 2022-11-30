import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://WOBBLE.HOUSE">WOBBLE HOUSE!</a>
        </h1>
      </main>
    </div>
  )
}
