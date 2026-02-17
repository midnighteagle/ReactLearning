import './App.css';

import { useState } from 'react';

function App() {
  
  let [counter,setCounter] = useState(15)

  // Increase the counter.
  //let counter = 15;

  const addValue =()=>{
    // console.log("value added",Math.random());
    
    //counter = counter + 1;
    //Assignment
    if(counter <20){
      setCounter(counter + 1);
      console.log("clicked here", counter);
    }
  } 

  // Decrease the count.
  const removeValue = () =>{
    //Assignment
    if(counter >0){

      setCounter(counter - 1);
    }
  }

  return (
    <>

      <h1>Chai Aur Code </h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value </button>
      <br />
      <button
      onClick={removeValue}
      >remove Value </button>
      <p>Footer : </p>

    </>
  )
}

export default App
