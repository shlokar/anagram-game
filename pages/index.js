import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BiShuffle } from 'react-icons/bi';

export default function Home() {
  return (
    <div className={styles.container}>
      <svg className={styles.gradient}>
        <linearGradient id="gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(64, 93, 230, 0.7)"/>
          <stop offset="50%" stopColor="rgba(131, 58, 180, 0.7)"/>
          <stop offset="100%" stopColor="rgba(193, 53, 132, 0.7)"/>
        </linearGradient>
      </svg>
      <div className={styles.top}>
        <svg className={styles.top_hex_svg} viewBox="0 0 120 60">
          <polygon className={styles.top_hex_poly} points="3,80 30,30 90,30 117,80 90"></polygon>
        </svg>
      </div>
      <div className={styles.middle}>
        word-a-gram
      </div>
      <div className={styles.bottom}>
        <svg className={styles.bottom_hex_svg} viewBox="0 0 120 60">
          <polygon className={styles.bottom_hex_poly} points="3,80 30,30 90,30 117,80 90"></polygon>
        </svg>
      </div>
    </div>
  )
}
