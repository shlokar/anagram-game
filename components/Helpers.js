import axios from 'axios';

export function getWord() {
  const options = {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_API_URL,
    params: {random: 'true', letters: 6, frequencyMin: 4},
    headers: {
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  };
  return axios.request(options);
}

export function shuffleWord(word) {
  const letters = word.split('');
  let oldLetter;
  for (let i = letters.length - 1; i >= 0; i--) {
    const rand = Math.floor(Math.random() * i);
    oldLetter = letters[i];
    letters[i] = letters[rand];
    letters[rand] = oldLetter;
  }
  return letters.join('');
}

export function isAnagram(word, guess) {
  const wordArr = word.split('').sort();
  const guessArr= guess.split('').sort();
  if (wordArr.length !== guessArr.length)
    return false;
  for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] !== guessArr[i]) {
          return false;
      }
  }
  return true;
}

// Returns a promise
export function isWord(guess) {
  const options = {
    method: 'GET',
    url: process.env.NEXT_PUBLIC_API_URL + guess,
    headers: {
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  };
  return axios.request(options); 
}