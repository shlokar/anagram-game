import React, { useState, useEffect } from 'react';
import styles from '../styles/Timer.module.css';
import { useTimer } from 'react-timer-hook';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const Timer = ({ expiryTimestamp }) => {

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
  } = useTimer({ expiryTimestamp, onExpire: () => console.log('timeout!') })

  return(
    <>
      <AccessAlarmIcon sx={{ fill: "url(#gradient)", fontSize: 55, opacity: 0.8, marginRight: 1 }} />
      <span className={styles.countdown}>{minutes}:</span>{seconds < 10 ? <span className={styles.countdown}>0</span> : null}<span className={styles.countdown}>{seconds}</span>
    </>
  )

}

export default Timer;