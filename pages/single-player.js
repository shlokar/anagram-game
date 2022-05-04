import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Score from '../components/Score.js';
import Timer from '../components/Timer.js';
import Hive from '../components/Hive.js';
import Input from '../components/Input.js';
import { getWord, shuffleWord } from '../components/Helpers.js';
import styles from '../styles/Single_Player.module.css';
import { motion } from "framer-motion";


export default function Single_Player() {

  const [word, setWord] = useState('');
  const [anagram, setAnagram] = useState('');
  const [isCorrect, setIsCorrect] = useState('');
  // const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

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
    setTimeout(() => setIsCorrect(''), 1000);
  }, [isCorrect]);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  return (
    <>
      <Head></Head>
      {/* <motion.div animate={{x: [0, 1000, 0], y: [0, 100, 0]}} transition={{ duration: 3, times: [0, 0.2, 1] }}>TEST</motion.div> */}
      <div className={styles.container}>
        <div className={styles.score}>
          <Score score={score}/>
        </div>
        <div className={styles.timer}>
          <Timer expiryTimestamp={time}/>
        </div>
        <div className={styles.hive}>
          <Hive anagram={anagram} isCorrect={isCorrect}/>
        </div>
        <div className={styles.input}>
          <Input word={word} setIsCorrect={setIsCorrect} isCorrect={isCorrect}/>
        </div>
      </div>
    </>
  )
}