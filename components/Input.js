import React, { useState } from 'react';
import styles from '../styles/Input.module.css';
import { isAnagram, isWord } from './Helpers.js';

const Input = ({ word, isCorrect, setIsCorrect }) => {

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
        <input className={isCorrect === false ? styles.inputShake : styles.input} type="text" value={guess} onChange={(e) => setGuess(e.target.value.toLowerCase())}></input>
        <div>{message}</div>
    </form>
  );

}

export default Input;