import React, { useState } from 'react';
import Head from 'next/head';
import Modal from './Modal.js';
import styles from '../styles/Hive.module.css';
// import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import { motion } from "framer-motion";
// import shuffle from '../public/shuffle.svg';
import { BiShuffle } from 'react-icons/bi';

const Hive = ({ word, anagram, isCorrect, timeOver, score, handleShuffle }) => {

  const [isShuffled, setIsShuffled] = useState(false);

  const outward = {
    0: {y: [null, -140], transition: { duration: 0.5 }},
    1: {x: [null, -115], y: [null, -70], transition: { duration: 0.5 }},
    2: {x: [null, 115], y: [null, -70], transition: { duration: 0.5 }},
    3: {x: [null, -115], y: [null, 70], transition: { duration: 0.5 }},
    4: {x: [null, 115], y: [null, 70], transition: { duration: 0.5 }},
    5: {y: [null, 140], transition: { duration: 0.5 }}
  }

  const inward = {
    0: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.16] }}),
    1: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.15] }}),
    2: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.15] }}),
    3: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.14] }}),
    4: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.13] }}),
    5: i => ({x: [null, 0], y: [null, 0], transition: { duration: 0.8, times: [0, (i + 1) * 0.11] }})
  }

  if (timeOver) {

    return (
      <div className={styles.hive}>
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

        <motion.svg className={styles.modalCell} viewBox="0 0 120 103.92304845413263"
          animate={{ scale: 4, x: "-38%", y: "-60%" }} transition={{ duration: 0.7 }}>
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
        </motion.svg>

        <Modal score={score} word={word} />

      </div>
    )

  } else {

    return (
      <div className={styles.hive}>
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
        <div className={styles.center} onClick={() => {
          handleShuffle();
          setIsShuffled(true);
          setTimeout(() => setIsShuffled(false), 600);
        }}>
          <motion.svg className={styles.centerCell} viewBox="0 0 120 103.92304845413263">
            <polygon className={styles.centerHexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
            {/* <text className={styles.questionMark} x="50%" y="50%" dy="0.35em">?</text> */}
          </motion.svg>
          <BiShuffle className={styles.shuffleIcon} />
        </div>
        {/* <motion.svg className={styles.cell} viewBox="0 0 120 103.92304845413263">
          <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
          <text className={styles.questionMark} x="50%" y="50%" dy="0.35em">?</text>
          <BiShuffle className={styles.shuffleIcon}/>
        </motion.svg> */}
        {anagram.split('').map((letter, i) => (
          <motion.svg key={i} custom={i} className={styles.cell} viewBox="0 0 120 103.92304845413263"
            animate={i.toString()} variants={isCorrect || isShuffled ? inward : outward}>
            <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
            <text className={styles.letter} x="50%" y="50%" dy="0.35em">{letter}</text>
          </motion.svg>))}
      </div>
    )

  }
}

//   return (
//     // <div className={styles.container}>
//       <div className={styles.hive}>
//         <svg>
//           <linearGradient id="gradient" x2="1" y2="1">
//             <stop offset="0%" stopColor="#405DE6"/>
//             <stop offset="20%" stopColor="#5851DB"/>
//             <stop offset="40%" stopColor="#833AB4"/>
//             <stop offset="60%" stopColor="#C13584"/>
//             <stop offset="80%" stopColor="#E1306C"/>
//             <stop offset="100%" stopColor="#FD1D1D"/>
//           </linearGradient>
//         </svg>

//         <motion.svg className={`${styles.cell} ${styles.center}`} viewBox="0 0 120 103.92304845413263"
//           animate={timeOver ? {scale: 6, x: -100, y: -100} : {scale: 1}} transition={{ duration: 0.7 }}
//         >
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263" fill="url(#gradient)"></polygon>
//           {/* <ShuffleRoundedIcon className={styles.shuffle} /> */}
//           {timeOver ? null :
//             <text className={styles.questionMark} x="50%" y="50%" dy="0.35em">?</text>
//           }
//         </motion.svg>
//         {timeOver ? null :
//           anagram.split('').map((letter, i) => (
//             <motion.svg key={i} custom={i} className={styles.cell} viewBox="0 0 120 103.92304845413263"
//               animate={i.toString()} variants={isCorrect ? inward : outward}
//             >
//               <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//               <text className={styles.letter} x="50%" y="50%" dy="0.35em">{letter}</text>
//             </motion.svg>
//         ))}

// {/* className={`${styles.cell} ${styles[i]}`} */}

//         {/* <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.one}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[0]}</text>
//         </svg>

//         <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.two}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[1]}</text>
//         </svg>

//         <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.three}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[2]}</text>
//         </svg>

//         <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.four}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[3]}</text>
//         </svg>

//         <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.five}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[4]}</text>
//         </svg>

//         <svg className={`${styles.cell} ${isCorrect ? styles.in : styles.six}`} viewBox="0 0 120 103.92304845413263">
//           <polygon className={styles.hexagon} points="3,51.96152422706631 30,3 90,3 117,51.96152422706631 90,100.92304845413263 30,100.92304845413263"></polygon>
//           <text className={styles.letter} x="50%" y="50%" dy="0.35em">{anagram[5]}</text>
//         </svg> */}

//       </div>
//     // </div>



export default Hive;

//stroke="white" strokeWidth="7.5"
// points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263"