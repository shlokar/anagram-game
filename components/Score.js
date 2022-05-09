import React, { useState } from 'react';
import styles from '../styles/Timer_Score.module.css';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Score = ({ score }) => {

  return (
    <>
      <EmojiEventsOutlinedIcon className={styles.icon} />
      <div className={styles.scoreTextCont}>
        <span className={styles.text}>{ score }</span>
      </div>
    </>
  )

}

export default Score;