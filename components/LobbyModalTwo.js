import React, { useState, useEffect } from 'react';
import styles from '../styles/LobbyModal.module.css';
import { motion } from "framer-motion";

const LobbyModalTwo = ({ username, setUsername }) => {

  const [shake, setShake] = useState(false);

  const handleClick = () => {
    console.log(username)
    if (username === '') {
      setShake(true);
      setTimeout(() => setShake(false), 2000);
    }
  }

  return (
    <div className={styles.main}>
      <motion.svg className={styles.modalCell} viewBox="0 0 120 103.92304845413263"
          initial={{ scale: 4, x: "-40%", y:"-40%" }} >
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
      </motion.svg>
      <motion.div className={styles.innerContent}>
        <input className={shake ? styles.shake : styles.username} placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <button className={styles.button} onClick={() => handleClick()}>Create game room</button>
      </motion.div>
    </div>
  )
}

export default LobbyModalTwo;