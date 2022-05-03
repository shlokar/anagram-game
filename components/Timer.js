import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

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
    <div>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  )

}

export default Timer;