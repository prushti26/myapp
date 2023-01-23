import React, { useState } from 'react'
import myData from './MyData'

export default function MyDisplay() {
    const[data,setData] = useState(myData)
    const clearData =()=>{
        
    }
  return (
    <div >{data.map((value,index,array)=>{
        return(<div>{value.id}{value.name}{value.age}
        <img src= {value.image}></img>
        </div>)
    })}
    <button onClick={clearData}>clear</button>
    
    
    </div>
  )
}

