import styles from '../styles/Hive.module.css';
import { motion } from "framer-motion";

const Hive = ({ anagram, isCorrect }) => {

  const outward = {
    0: {y: [null, -140], transition: { duration: 0.5 }},
    1: {x: [null, -115], y: [null, -70], transition: { duration: 0.5 }},
    2: {x: [null, 115], y: [null, -70], transition: { duration: 0.5 }},
    3: {x: [null, -115], y: [null, 70], transition: { duration: 0.5 }},
    4: {x: [null, 115], y: [null, 70], transition: { duration: 0.5 }},
    5: {y: [null, 140], transition: { duration: 0.5 }},
  }

  const inward = {
    0: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.2] }}),
    1: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.15] }}),
    2: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.15] }}),
    3: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.15] }}),
    4: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.15] }}),
    5: i => ({x: [null, 0], y: [null, 0], transition: { duration: 1, times: [0, (i + 1) * 0.15] }})
  }

  return (
    // <div className={styles.container}>
      <div className={styles.hive}>
        <svg>
          <linearGradient id="gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="#405DE6"/>
            <stop offset="20%" stopColor="#5851DB"/>
            <stop offset="40%" stopColor="#833AB4"/>
            <stop offset="60%" stopColor="#C13584"/>
            <stop offset="80%" stopColor="#E1306C"/>
            <stop offset="100%" stopColor="#FD1D1D"/>
          </linearGradient>
        </svg>

        <motion.svg className={`${styles.cell} ${isCorrect ? styles.in : styles.center}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
          <text className={styles.questionMark} x="50%" y="50%" dy="0.35em">?</text>
        </motion.svg>

        {anagram.split('').map((letter, i) => (
          <motion.svg key={i} custom={i} className={styles.cell} viewBox="0 0 120 103.92304845413263"
            animate={i.toString()} variants={isCorrect ? inward : outward}
          >
            <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
            <text className={styles.letter} x="50%" y="50%" dy="0.35em">{letter}</text>
          </motion.svg>
        ))}

{/* className={`${styles.cell} ${styles[i]}`} */}

        {/* <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.one}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[0]}</text>
        </svg>

        <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.two}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[1]}</text>
        </svg>

        <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.three}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[2]}</text>
        </svg>

        <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.four}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[3]}</text>
        </svg>

        <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.five}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[4]}</text>
        </svg>

        <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.six}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[5]}</text>
        </svg> */}

      </div>
    // </div>
  )
}

export default Hive;

//stroke="white" strokeWidth="7.5"
// points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"