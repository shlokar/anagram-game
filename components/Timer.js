import React, { useState, useEffect } from 'react';
import styles from '../styles/Timer_Score.module.css';
import { useTimer } from 'react-timer-hook';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Timer = ({ expiryTimestamp, setTimeOver }) => {

  // useEffect(() => {
  //   const time = new Date();
  //   time.setSeconds(time.getSeconds + 60);
  //   start();
  // }, [])

  // const time = new Date();
  // time.setSeconds(time.getSeconds() + 60);
  // console.log(time);

  const {
    seconds,
    minutes,
    start,
    restart
  } = useTimer({ expiryTimestamp, onExpire: () => setTimeOver(true) })

  return(
    <>
      {/* <AccessAlarmIcon sx={{ fill: "url(#gradient)", fontSize: 55, opacity: 0.8, marginRight: 1 }} /> */}
      <span className={styles.text}>{minutes}:</span>{seconds < 10 ? <span className={styles.text}>0</span> : null}<span className={styles.text}>{seconds}</span>
    </>
  )

}

export default Timer;