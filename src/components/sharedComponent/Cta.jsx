import React from 'react'

const Cta = () => {
  return (
    <section>
        <div className='bg-red-600 text-center py-28 px-4'>
         <h1 className='text-3xl font font-bold text-white'>Ready to get</h1>
        <p className='mt-4 text-white font-bold'>Register for exams or try a free mock tests.</p>

        <div className='mt-8 flex justify-center gap-4'>
        <button className='bg-gray-700 text-white px-4 py-2 rounded-lg  hover:bg-gray-500'>Mock Tests</button>
        <button className='border-2 border-white bg-red-600 text-black px-4 py-2 rounded-lg  hover:bg-gray-300'>Sign up free</button>
      </div>
    </div>
    </section>
    
  )
}

export default Cta