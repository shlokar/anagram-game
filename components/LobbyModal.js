import styles from '../styles/LobbyModal.module.css';
import { motion } from "framer-motion";

const LobbyModal = () => {

  return (
    <motion.svg className={styles.modalCell} viewBox="0 0 120 103.92304845413263"
        animate={{ scale: 4, x: "-38%", y: "-35%" }} transition={{ duration: 0.7 }}>
        <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
    </motion.svg>
  )
}

export default LobbyModal;