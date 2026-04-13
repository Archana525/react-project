import React, { useState } from 'react'

const Counter = () => {

  const [count,setCount] = useState(0)
  return (
    <div className='flex justify-center items-center gap-4 h-screen  '>
      <button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition' onClick={()=>{
        
        setCount(count+1)
      }}>
        +
      </button>

      <div>Count: {count} </div>

      {count<=0? (<div> <button className=' disabled:cursor-not-allowed  ' disabled>-</button> </div>):(<div>
        <button className=' px-4 py-2  bg-blue-600 text-white rounded-lg hover:bg--700 transition text-xl font-semibold' onClick={()=>{
          setCount(count-1)
        

        }}>-</button>

      </div>)}

      {/* <button className='' onClick={()=>{
        setCount(count-1)
      }}>
        -
      </button> */}
    </div>
  )
}

export default Counter