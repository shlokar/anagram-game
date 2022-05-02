import styles from '../styles/Anagram.module.css';

const Anagram = () => {
  return (
    <div className={styles.container}>
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
        <svg className={`${styles.cell} ${styles.center}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
          <text className={styles.questionMark} x="50%" y="50%" dy="0.35em">?</text>
        </svg>

        <svg className={`${styles.cell} ${styles.one}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">s</text>
        </svg>

        <svg className={`${styles.cell} ${styles.two}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">h</text>
        </svg>

        <svg className={`${styles.cell} ${styles.three}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">t</text>
        </svg>

        <svg className={`${styles.cell} ${styles.four}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">a</text>
        </svg>

        <svg className={`${styles.cell} ${styles.five}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">c</text>
        </svg>

        <svg className={`${styles.cell} ${styles.six}`} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
          <text className={styles.letter} x="50%" y="50%" dy="0.35em">r</text>
        </svg>

      </div>
    </div>
  )
}

export default Anagram;

//stroke="white" strokeWidth="7.5"
// points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"