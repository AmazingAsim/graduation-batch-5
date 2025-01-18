import React from 'react'
import { useDispatch } from 'react-redux'
export default function ForthComp({count}) {
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Forth Component</h1>
        <h2>count :  {count}</h2>
        <button onClick={()=>{dispatch({type:"set_count",payload:750})}}>set count to 750</button>
    </div>
  )
}
