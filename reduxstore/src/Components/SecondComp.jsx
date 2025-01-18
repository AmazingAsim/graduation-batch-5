import React from 'react'
import ThirdComp from './ThirdComp'
export default function SecondComp({count}) {
  return (
    <div>
        <ThirdComp count={count}/>
    </div>
  )
}
