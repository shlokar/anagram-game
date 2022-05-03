import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Score from '../components/Score.js';
import Timer from '../components/Timer.js';
import Hive from '../components/Hive.js';
import Input from '../components/Input.js';
import { getWord, shuffleWord } from '../components/Helpers.js';
import styles from '../styles/Single_Player.module.css';


export default function Single_Player() {

  const [word, setWord] = useState('');
  const [anagram, setAnagram] = useState('');

  useEffect(() => {
    getWord().then((res) => {
      setWord(res.data.word);
      setAnagram(shuffleWord(res.data.word));
    })
    // const time = new Date();
    // time.setSeconds(time.getSeconds() + 600);
  }, []);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);

  return (
    <>
      <Head></Head>
      <div className={styles.container}>
        <div className={styles.score}>
          <Score/>
        </div>
        <div className={styles.timer}>
          <Timer expiryTimestamp={time}/>
        </div>
        <div className={styles.hive}>
          <Hive anagram={anagram}/>
        </div>
        <div className={styles.input}>
          <Input/>
        </div>
      </div>
    </>
  )
}