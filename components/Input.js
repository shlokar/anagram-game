import React, { useState } from 'react';
import styles from '../styles/Input.module.css';
import { isAnagram, isWord } from './Helpers.js';

const Input = ({ word, setIsCorrect }) => {

  const [guess, setGuess] = useState('');

  const checkGuess = (e) => {
    e.preventDefault();
    setGuess('');
    isWord(guess).then((res) => setIsCorrect(isAnagram(word, guess))).catch((err) => setIsCorrect(false));
  }

  return (
    <form onSubmit={(e) => checkGuess(e)}>
        <input className={styles.input} type="text" value={guess} onChange={(e) => setGuess(e.target.value)}></input>
    </form>
  );

}

export default Input;