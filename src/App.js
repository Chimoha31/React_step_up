import React, {useState} from 'react';
import './App.css';

const App = () => {
// State
  const [count, setCount] = useState(0);


// 関数
const onClickCountUp = () => {
  setCount(count + 1);

}


  return(
    <div className="App">
      <h1>Test</h1>
      <h2>This is Text This is test</h2>
      <p>{count}</p>
      <button onClick={onClickCountUp}>Count Up</button>
    </div>
  )
}

export default App;