import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Score from '../components/Score.js';
import Timer from '../components/Timer.js';
import Hive from '../components/Hive.js';
import Input from '../components/Input.js';
import Modal from '../components/Modal.js';
import { getWord, shuffleWord } from '../components/Helpers.js';
import styles from '../styles/Single_Player.module.css';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { motion } from "framer-motion";


export default function Single_Player() {

  const [word, setWord] = useState('');
  const [anagram, setAnagram] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  // const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [timeOver, setTimeOver] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [open, setOpen] = useState(false);

  // Get initial word
  useEffect(() => {
    getWord().then((res) => {
      setWord(res.data.word);
      setAnagram(shuffleWord(res.data.word));
    })
    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 600);
  }, []);

  // Correct guess
  useEffect(() => {
    if (isCorrect) {
      setScore(score + 1);
      getWord().then((res) => {
        setWord(res.data.word);
        setAnagram(shuffleWord(res.data.word));
      })
    }
    setTimeout(() => setIsCorrect(''), 600);
  }, [isCorrect]);

  // Game over
  // useEffect(() => {
  //   if (timeOver) {
  //     setTimeout(() => setGameOver(true), 1000);
  //   }
  // }, [timeOver]);

  // Initialize time for timer
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3);

  return (
    <>
      <Head></Head>
      {/* <motion.div animate={{x: [0, 1000, 0], y: [0, 100, 0]}} transition={{ duration: 3, times: [0, 0.2, 1] }}>TEST</motion.div> */}
      <div className={styles.container}>
        {timeOver
          ? (
            <div className={styles.hive}>
                <Hive timeOver={timeOver} gameOver={gameOver} score={score}/>
            </div>
          )
          : (
            <div className={styles.game}>

              {/* <Modal open={open}></Modal> */}

              <div className={styles.top_left}>
                <EmojiEventsOutlinedIcon className={styles.icon}/>
              </div>

              <div className={styles.top_middle}>
                <Score score={score}/>
                <AccessAlarmIcon className={styles.icon} />
              </div>

              <div className={styles.top_right}>
                <Timer expiryTimestamp={time} setTimeOver={setTimeOver}/>
              </div>

              <div className={styles.hive}>
                <Hive anagram={anagram} isCorrect={isCorrect} timeOver={timeOver} gameOver={gameOver} />
              </div>
              <div className={styles.input}>
                <Input word={word} setIsCorrect={setIsCorrect} isCorrect={isCorrect} timeOver={timeOver}/>
              </div>
            </div>
        )}
      </div>
    </>
  )
}