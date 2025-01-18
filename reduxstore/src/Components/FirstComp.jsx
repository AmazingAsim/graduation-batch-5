import React from 'react'
import SecondComp from './SecondComp'
export default function FirstComp({count}) {
  return (
    <div>
        <SecondComp count={count}/>
    </div>
  )
}
