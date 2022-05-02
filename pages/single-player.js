import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Anagram from '../components/Anagram.js';
import { getWord, shuffleWord } from '../components/Helpers.js';

export default function Single_Player() {

  const [word, setWord] = useState('');
  const [anagram, setAnagram] = useState('');

  useEffect(() => {
    getWord().then((res) => {
      setWord(res.data.word);
      setAnagram(shuffleWord(res.data.word));
    })
  }, []);

  return (
    <>
      <Head></Head>
      <Anagram anagram={anagram}/>
    </>
  )
}