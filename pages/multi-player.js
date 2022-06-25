import Header from '../components/Header.js';
import LobbyModal from '../components/LobbyModal.js';
import styles from '../styles/Multi_Player.module.css';
// import { motion } from "framer-motion";

export default function Multi_Player() {

  return (
    <div className={styles.container}>
      <Header />
      <LobbyModal/>
      {/* <motion.svg className={styles.modalCell} viewBox="0 0 120 103.92304845413263"
          animate={{ scale: 4 }} transition={{ duration: 0.7 }}>
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
      </motion.svg> */}
      <svg className={styles.gradient}>
        <linearGradient id="gradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#405DE6"/>
          <stop offset="20%" stopColor="#5851DB"/>
          <stop offset="40%" stopColor="#833AB4"/>
          <stop offset="60%" stopColor="#C13584"/>
          <stop offset="80%" stopColor="#E1306C"/>
          <stop offset="100%" stopColor="#FD1D1D"/>
        </linearGradient>
      </svg>
    </div>
  );

}