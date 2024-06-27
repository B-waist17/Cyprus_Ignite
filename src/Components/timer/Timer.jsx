import React, { useEffect, useRef, useState } from 'react'
import './timer.css'


const Timer = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () =>{
    const eventDate = new Date('Nov 01, 2024 00:00:00').getTime();

   interval = setInterval(() => {
    
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(interval.current);
    }else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);
    }
  }, 1000);

  };
  
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className='timerMain'>
      <div className='timerContent'>
        <h1>{timerDays}</h1>
        <p>Days</p>
      </div>
      <div className='timerContent'>
        <h1>{timerHours}</h1>
        <p>Hours</p>
      </div>
      <div className='timerContent'>
        <h1>{timerMinutes}</h1>
        <p>Minutes</p>
      </div>
      <div className='timerContent'>
        <h1>{timerSeconds}</h1>
        <p>Seconds</p>
      </div>
    </div>
  )
}

export default Timer
