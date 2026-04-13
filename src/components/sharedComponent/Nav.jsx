import React, { useState } from 'react'
import HeroImg from '../../assets/logo.jpg'
import { TiWeatherSunny } from "react-icons/ti";
import { FaMoon } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = ({ setDarkMode, isDarkMode, setPage }) => {

  const [open, setOpen] = useState(false)

  const navitems = [
    { name: "Home", page: "home" },
    { name: "Products", page: "home" },
    { name: "Contact", page: "contact" },
  ]

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 left-0 z-50">
      
      <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 py-4'>

        {/* Logo */}
        <img 
          src={HeroImg} 
          alt="logo" 
          className='h-10 sm:h-12 md:h-14 cursor-pointer'
          onClick={() => setPage("home")}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
          {navitems.map((val, i) => (
            <div
              key={i}
              onClick={() => setPage(val.page)}
              className="cursor-pointer hover:text-red-600 transition"
            >
              {val.name}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex gap-4 items-center">

          {/* Dark Mode Toggle */}
          <div
            onClick={() => setDarkMode(!isDarkMode)}
            className="cursor-pointer text-xl text-gray-600 dark:text-gray-300"
          >
            {isDarkMode ? <FaMoon /> : <TiWeatherSunny />}
          </div>

          {/* Login */}
          <button
            onClick={() => setPage("login")}
            className="text-gray-700 dark:text-gray-300 hover:text-red-600"
          >
            Login
          </button>

          {/* Register */}
          <button
            onClick={() => setPage("register")}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white dark:bg-gray-900 shadow">

          {navitems.map((val, i) => (
            <div
              key={i}
              onClick={() => {
                setPage(val.page)
                setOpen(false)
              }}
              className="cursor-pointer hover:text-red-600"
            >
              {val.name}
            </div>
          ))}

          {/* Dark Mode */}
          <div
            onClick={() => setDarkMode(!isDarkMode)}
            className="text-xl cursor-pointer"
          >
            {isDarkMode ? <FaMoon /> : <TiWeatherSunny />}
          </div>

          {/* Login */}
          <button
            onClick={() => {
              setPage("login")
              setOpen(false)
            }}
            className="text-gray-700 dark:text-gray-300"
          >
            Login
          </button>

          {/* Register */}
          <button
            onClick={() => {
              setPage("register")
              setOpen(false)
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Sign up
          </button>
        </div>
      )}
    </header>
  )
}

export default Nav










// import React, { useState } from 'react'
// import HeroImg from '../../assets/logo.jpg'
// import { TiWeatherSunny } from "react-icons/ti";
// import { FaMoon } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = ({ setDarkMode, isDarkMode }) => {

//   const [open, setOpen] = useState(false)

//   const navitems = [
//     { name: "Home", path: "/home" },
//     { name: "About", path: "/about" },
//     { name: "Courses", path: "/courses" },
//     { name: "Mock Tests", path: "/mocktests" },
//     { name: "Contact", path: "/contact" },
//   ]

//   return (
//     // <header className="bg-white shadow sticky top-0 left-0">

//     <header className="bg-white dark:bg-gray-900 shadow sticky top-0 left-0">
//       <div className='flex justify-between items-center px-4 sm:px-6 md:px-10 py-4'>

//         {/* Logo */}
//         <img src={HeroImg} alt="logo" className='h-10 sm:h-12 md:h-14' />

//         {/* Desktop Menu */}
//         {/* <div className="hidden md:flex gap-6 text-gray-600 font-medium"> */}
//         <div className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
//           {navitems.map((val, i) => (
//             <div key={i} className="cursor-pointer hover:text-red-600">
//               {val.name}
//             </div>
//           ))}
//         </div>

//         {/* Right Section */}
//         <div className="hidden md:flex gap-4 items-center">
//           <TiWeatherSunny className="text-xl text-gray-600" onClick={() => {
//             setDarkMode(!isDarkMode)
//           }} /> 
 

     

//            <button className="text-gray-700 dark:text-gray-300"> Login</button>

//           <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
//             Sign up
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setOpen(!open)}>
//             {open ? <HiX size={24} /> : <HiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow">
//           {navitems.map((val, i) => (
//             <div key={i} className="cursor-pointer hover:text-red-600">
//               {val.name}
//             </div>
//           ))}

//           <TiWeatherSunny className="text-xl text-gray-600" />

//           <button className="text-gray-700">Login</button>

//           <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
//             Sign up
//           </button>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navbar