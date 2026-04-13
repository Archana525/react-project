import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gray-400 text-center py-28 px-4'>
      <h1 className='text-4xl font-bold text-gray-900'>
        Your path to success starts here
      </h1>

      <p className='mt-4 text-gray-700'>Courses, mock tests, and exam registration for Medical, Engineering, and Paramedical.</p>

      <div className='mt-8 flex justify-center gap-4'>
        <button className='bg-red-600 text-white px-4 py-2 rounded-lg  hover:bg-red-700'>Browse Courses</button>
        <button className='bg-white text-black px-4 py-2 rounded-lg  hover:bg-gray-300'>Free Mock Tests</button>
      </div>

    </div>
  )
}

export default Hero