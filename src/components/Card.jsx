import React, { useState } from 'react'
import HeroImg from '../assets/stock photo.jpg'
const Card = () => {
  const [show, setShow] = useState(false)
  const [clicked, setClicked] = useState(false)

  

  return (
    <div className={``}>
      <div className={ ` absolute top-20 left-10 bg-green-600 border w-80 h-90 border-green-700 rounded-lg ${show ? 'block' : 'hidden'}`}>
        <img src={HeroImg} alt='image' className='w-20 p-2' />
        <h1 className=' text-white text-2xl p-2'>Card Title</h1>
        <h2 className=' text-white text-2xl p-2'>Card Sub-title</h2>
        <p className=' text-white p-2 text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid officia deserunt ex, hic maxime obcaecati! Esse quisquam assumenda sint, quos error minima nulla velit est, officia repudiandae quo doloremque maxime.</p>


      </div>

      <button className='  absolute top-115 left-10 w-16 size-10  bg-green-600 text-white rounded-lg text-white-500  ' onClick={() => {
        setShow(!show)
        setClicked(true)
      }}>

        {show ? 'Hide' : 'Show'}
      </button>

      {clicked && !show && (
        <p className='absolute top-130 left-10 text-red-600'>
          Card is hidden
        </p>
      )}



    </div>
  )
}

export default Card