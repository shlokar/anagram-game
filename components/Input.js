import React, { useState } from 'react';
import styles from '../styles/Input.module.css';
import { isAnagram, isWord } from './Helpers.js';
import Box from '@mui/material/Box';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
// import TextField from '@mui/material/TextField';

const Input = ({ word, isCorrect, setIsCorrect, timeOver }) => {

  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const checkGuess = (e) => {
    e.preventDefault();
    setGuess('');
    isWord(guess)
      .then((res) => {
        if (isAnagram(word, guess)) {
          setIsCorrect(true);
        } else {
          setIsCorrect(false);
          setMessage('Must use each letter once');
          setTimeout(() => setMessage(''), 1000);
        }
      })
      .catch((err) => {
        setIsCorrect(false);
        setMessage('Must form a valid dictionary word');
        setTimeout(() => setMessage(''), 1000);
      });
  }

  return (
    <form onSubmit={(e) => checkGuess(e)}>
      <div>{message}</div>
      {/* <TextField id="standard-basic" label="Standard" variant="standard" color="secondary"/> */}
      <div className={styles.inputContainer}>
        <span className={styles.borderLeft}></span>
        {timeOver
          ? <input disabled className={styles.input}></input>
          : <input className={`${styles.input} ${isCorrect === false ? styles.shake : null}`} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}>
          </input>
        }
        {/* <input className={`${styles.input} ${isCorrect === false ? styles.shake : null}`} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}>
        </input> */}
        <span className={styles.iconContainer}>
          <KeyboardReturnIcon className={styles.icon}/>
        </span>
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