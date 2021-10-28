import React, {useState} from 'react';
import ChildArea from './components/ChildArea';
import './App.css';

const App = () => {
// State
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);


// 関数
const onChangeText = (event) => {
  return setText(event.target.value);
}

const onClickOpen = () => {
  return setOpen(!open);
}



  return(
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea
        open={open}/>
    </div>
  )
}

export default App;