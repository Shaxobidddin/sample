import { useState } from 'react';


function Counter() {
const [counter, setCounter]=useState(0)

const qoshish = () =>{
setCounter((state) => ++state)
}
const ayirish = () =>{
  setCounter((state)=> --state)
}
  return (
    <div className="Counterr">
      <div className='App_nav'>
       <div>
       {counter}
       </div>
        <button onClick={qoshish}>++</button>
        <button onClick={ayirish}>--</button>
      </div>
    </div>
  );
}

export default Counter;
