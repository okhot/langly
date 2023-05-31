import Image from 'next/image'
import styles from './page.module.css'
import { SignIn } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className={styles.main}>
      <SignIn />
    </main>
  )
}
