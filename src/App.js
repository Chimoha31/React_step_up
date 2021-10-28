import React, {useState, useCallback} from 'react';
import ChildArea from './components/ChildArea';
import './App.css';

const App = () => {
  console.log("App");
// State
  const [text, setText] = useState("");

  const [open, setOpen] = useState(false);


// 関数
const onChangeText = (event) => setText(event.target.value);

const onClickOpen = () => setOpen(!open);

const onClickClose = useCallback(() => setOpen(false), [setOpen]);


  return(
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>

      {/* ChildArea Components */}
      <ChildArea
        open={open}
        onClickClose={onClickClose}
        />
    </div>
  )
}

export default App;