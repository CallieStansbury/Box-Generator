import React, { useState } from 'react';
import './App.css';
import Boxform from './Components/Boxform';
import Box from './Components/Box';


function App() {
  const [ formState, setFormState ] = useState([
    { color: "purple", height:200, width:200},
    { color: "green", height:200, width:200},
    { color: "pink", height:200, width:200},
    { color: "orange", height:200, width:200},
  ])

  return (
    <div className="App">
      <Boxform formState={formState} setFormState={setFormState} />
      <div className="Boxcontainer">
        {formState.map((box, i) => (
          <Box key={i} color={box.color} height={box.height} width={box.width} />
        ))}
      </div>
    </div>
  );
}
export default App;
