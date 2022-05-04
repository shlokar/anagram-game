import React, { useState } from 'react';
import styles from '../styles/Timer_Score.module.css';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Score = ({ score }) => {

  return (
    <>
      <EmojiEventsOutlinedIcon sx={{ fill: "url(#gradient)", fontSize: 55, opacity: 0.8, marginRight: 1 }}/>
      <span className={styles.text}>{ score }</span>
    </>
  )

}

export default Score;