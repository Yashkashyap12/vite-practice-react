import React, { useEffect } from 'react'


const Counter = ({data}) => {
    function handleCounter ()  {
    console.log("handle counter call...");
}
// handleCounter();
useEffect(()=>{
    handleCounter();
},[])
  return (
    <div>
        <h1>Counter Value {data}</h1>
    </div>
  )
}

export default Counter;