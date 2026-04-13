import React from 'react'
import HeroImg from '../../assets/logo.jpg'
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Navbar = () => {
    const navitems=[
        {
            name:"Home",
            path:"/home",
            icon:<FaHome/>
        },
         {
            name:"About",
            path:"/about",
            icon:<IoIosInformationCircle/>
        },
         {
            name:"Services",
            path:"/services",
            icon:<MdOutlineDesignServices/>
        },
         {
            name:"Contact",
            path:"/contact",
            icon:<IoMdContact/>
        },
    ]
  return (

    <div className='flex gap-20  justify-center p-4 bg-white-300 '>
        <img src={HeroImg} alt="image" className=' absolute top-0 left-10 w-16 size-18 ' />





        {navitems.map((val,i)=>{
            return(
                <div>
                  {val?.icon}  <li className=' list-none'>{val.name}</li>
                </div>
            )
        })}
    </div>
  )
}

export default Navbar