import React, { useEffect, useState } from 'react'
import Counter from './Counter';

const Effects = () => {
// const [counter, setCounter] = useState(0);
const [data, setData] = useState(0);
// function callOnce() {
//     alert("ek bar chala...")
// }
// // callOnce();
// useEffect (()=>{
//     callOnce();
// },[])

// const handleChange = () => {
//     setCounter(counter + 1)
// }

const handleCount = () => {
    setData(data + 1)
}
  return (
    <div className='text-center text-2xl mt-10'>
        <h1>Use Effect Hook</h1>
        {/* <button onClick={handleChange} className='border px-2 rounded cursor-pointer py-1 mt-5'>count : {counter}</button>
        <h2 className='mt-3'>{counter}</h2><br /> */}
        <Counter data={data}/>
        <button onClick={handleCount} className='border px-2 rounded cursor-pointer py-1 mt-5'>Counter</button>
    </div>
  )
}

export default Effects;