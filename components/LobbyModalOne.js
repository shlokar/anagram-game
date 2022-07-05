import styles from '../styles/LobbyModal.module.css';
import { motion } from "framer-motion";

const LobbyModalOne = () => {

  return (
    <div className={styles.main}>
      <motion.svg className={styles.modalCell} viewBox="0 0 120 103.92304845413263"
          animate={{ scale: 4, x: "-40%", y:"-40%" }} transition={{ duration: 0.7 }}>
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
      </motion.svg>
      <motion.div className={styles.buttons}
        initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <button className={styles.button}>Start new game</button>
        <span className={styles.or}>or</span>
        <button className={styles.button}>Join by game link</button>
      </motion.div>
    </div>
  )
}

export default LobbyModalOne;