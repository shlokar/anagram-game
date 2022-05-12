import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Input.module.css';
import { isAnagram, isWord } from './Helpers.js';
import Box from '@mui/material/Box';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { motion } from "framer-motion";
// import TextField from '@mui/material/TextField';

const Input = ({ word, isCorrect, setIsCorrect, timeOver }) => {

  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleBlur = () => {
    inputEl.current.focus();
  }

  const checkGuess = (e) => {
    e.preventDefault();
    isWord(guess)
      .then((res) => {
        if (isAnagram(word, guess)) {
          setIsCorrect(true);
          setGuess('');
        } else {
          setIsCorrect(false);
          setMessage('Must use each letter once');
          setTimeout(() => setMessage(''), 1300);
          setTimeout(() => setGuess(''), 1300);
        }
      })
      .catch((err) => {
        setIsCorrect(false);
        setMessage('Must form a valid dictionary word');
        setTimeout(() => setMessage(''), 1300);
        setTimeout(() => setGuess(''), 1300);
      });
  }

  return (
    <form onSubmit={(e) => checkGuess(e)}>
      <div>{message}</div>
      {/* <TextField id="standard-basic" label="Standard" variant="standard" color="secondary"/> */}
      <div className={`${styles.input_container} ${isCorrect === false ? styles.shake : null}`}>
        {/* <span className={`${styles.border_left} ${isCorrect === false ? styles.shake : null}`}></span> */}
        {/* {timeOver
          ? <input disabled className={styles.input}></input>
          : <input className={`${styles.input} ${isCorrect === false ? styles.shake : null}`} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}>
          </input>
        } */}
        <div className={styles.textCont}>
          <div className={styles.textDisplay}>
            {guess.split('').map((letter, i) => <span key={i}>{letter}</span>)}
            <div className={styles.caret}>
          </div>
          </div>
          <span className={styles.icon_container}>
            <KeyboardReturnIcon className={styles.icon}/>
          </span>
          <input className={styles.input} ref={inputEl} onBlur={() => handleBlur()} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}>
          </input>
        </div>
        {/* <inpu243ut> */}
        {/* <span className={styles.icon_container}>
          <KeyboardReturnIcon className={styles.icon}/>
        </span> */}
      </div>
      {/* <input className={`${styles.input} ${isCorrect === false ? styles.shake : null}`} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}>
      </input>
      <div className={iconContainer}>
        <KeyboardReturnIcon className={styles.icon}/>
      </div> */}
      {/* <KeyboardReturnIcon className={styles.icon}/> */}
      {/* <div>{message}</div> */}
    </form>
  );

}

export default Input;