import React, { useState, useEffect } from 'react';
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
      <AccessAlarmIcon />
      <span>{minutes}</span>:{seconds < 10 ? <span>0</span> : null}<span>{seconds}</span>
    </>
  )

}

export default Timer;