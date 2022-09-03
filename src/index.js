import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useEffect, useState } from 'react';

const SimpleCounter = () => {
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  let [days, setDays] = useState(0);
  
 
  useEffect (() => {
      setInterval(() => {
      setSeconds(seconds+1);
      if (seconds===5) {
        setMinutes(minutes+1);
        setSeconds(0);      
      }
      if (minutes===59) {
        setHours(hours+1);
        setSeconds(0);  
        setMinutes(0);
      }
      if (hours===24) {
        setDays(days+1);
        setSeconds(0);  
        setMinutes(0);
        setHours(0);

      }
    
      
    }, 1000)

  }, [seconds, minutes, hours, days])
  
    return (
      <div className="container" style={{display: "flex"}}>
        <div className="clock">
          <i className="fa-solid fa-clock"></i>
        </div>
        
        <div className="days">{days}</div>
        <div className="hours">{hours}</div>
        <div className="minutes">{minutes}</div>
        <div className="seconds">{seconds}</div>
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SimpleCounter />
  </React.StrictMode>
);