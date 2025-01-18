import React from 'react'
import FirstComp from './Components/FirstComp'
import { useSelector,useDispatch } from 'react-redux';
export default function App() {
  let count = 0;
  const dispatch = useDispatch();
  let globalCount = useSelector((state) => state.count);
  return (
    <div>
      <FirstComp count={count} />
      <h1>Global Count : {globalCount}</h1>
      <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"Decrement"})}}>Decrement</button>
    </div>
  )
}


// async function hoohaa() {
//   return 'hoohaa'
// }

// hoohaa().then(res=>console.log(res));