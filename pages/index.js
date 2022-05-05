import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <svg>
        <linearGradient id="gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(64, 93, 230, 0.7)"/>
          <stop offset="50%" stopColor="rgba(131, 58, 180, 0.7)"/>
          <stop offset="100%" stopColor="rgba(193, 53, 132, 0.7)"/>
        </linearGradient>
      </svg>
      <div className={styles.top}>
        <svg className={styles.top_hex_svg} viewBox="0 0 120 100">
          <polygon className={styles.top_hex_poly} points="3,51.96152422706631 30,12 90,12 117,51.96152422706631 90"></polygon>
        </svg>
      </div>
      <div className={styles.bottom}>
        {/* <svg className={styles.bottom_hex_svg}>
          <polyline className={styles.bottom_hex_poly} points="3,51.96152422706631 30,12 90,12 117,51.96152422706631 90" />
        </svg> */}
        <svg className={styles.bottom_hex_svg} viewBox="0 0 120 100">
          <polygon className={styles.bottom_hex_poly} points="3,-51.96152422706631 30,12 90,12 117,-51.96152422706631 90"></polygon>
        </svg>
      </div>
    </div>
  )
}
