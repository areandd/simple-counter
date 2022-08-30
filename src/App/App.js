import './App.css';
import PropTypes from 'prop-types';

function App(props) {
  return (
    <div className="container" style={{display: "flex"}}>
      <div className="clock">
        <i className="fa-solid fa-clock"></i>
      </div>
      <div className="4">{props.digitFour}</div>
      <div className="3">{props.digitThree}</div>
      <div className="2">{props.digitTwo}</div>
      <div className="1">{props.digitOne}</div>
    </div>
  );
}


SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(){
  const four = Math.floor(counter/10000);
  const three = Math.floor(counter/1000);
  const two = Math.floor(counter/100);
  const one = Math.floor(counter/1);
  console.log(four, three, two, one);

  counter++;
})


export default App;
