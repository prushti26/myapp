import React, { useState } from 'react'

export default function MyCounter() {
    const [count, setcount] =useState(0)
    const mycounter =()=>{
      setcount(count+1);
    }
  return (
    <div>{count}
    <button onClick={mycounter}>Increment</button>
    </div>

  )
}
