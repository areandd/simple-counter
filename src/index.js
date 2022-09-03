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

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';
// import { useEffect, useState } from 'react';

// function SimpleCounter() {
//   const [digitOne, setDigitOne] = useState();
//   const [digitTwo, setDigitTwo] = useState();
//   const [digitThree, setDigitThree] = useState();
//   const [digitFour, setDigitFour] = useState();

//   useEffect (() => {
//     let counter = 0;
//     setInterval(function(){
//       const four = Math.floor(counter/1000);
//       const three = Math.floor(counter/100);
//       const two = Math.floor(counter/10); 
//       const one = Math.floor(counter/1);

//       console.log(four, three, two, one);

//       setDigitOne(one);
//       setDigitTwo(two);
//       setDigitThree(three);
//       setDigitFour(four);

//       counter++;
//     }, 777)

//   }, [])
  
//   return (
//     <div className="container" style={{display: "flex"}}>
//       <div className="clock">
//         <i className="fa-solid fa-clock"></i>
//       </div>
//       <div className="4">{digitFour}</div>
//       <div className="3">{digitThree}</div>
//       <div className="2">{digitTwo}</div>
//       <div className="1">{digitOne}</div>
  
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <SimpleCounter />
//   </React.StrictMode>
// );