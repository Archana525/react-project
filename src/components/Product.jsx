// useeffect

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";

const Product = () => {
    const [product, SetProduct] = useState([])
    const [Search, setSearch] = useState("")
    const [visibleitems, setvisible] = useState(5)
    // const fetchData = async () => {
    //     const res = await fetch('https://dummyjson.com/products')
    //     const data = await res.json()
    //     SetProduct(data.products)
    // }

    const fetchData = async () => {
        const res = await axios.get('https://dummyjson.com/products')
        SetProduct(res.data.products)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const showMore = () => {
        setvisible(prev => prev + 5)
    }

    const filterProduct = product.filter((product) => product.title.toLowerCase().includes(Search.toLowerCase()))
    return (

        <div className='p-3 sm:p-5 md:p-6'>

          
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-orange-800'>
                PRODUCT TABLE
            </h2>

           
            <div className='flex justify-center p-3 sm:p-5 border border-orange-600'>
                <input
                    type="text"
                    placeholder='Search products'
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-3 py-2 border rounded-lg outline-none'
                />
            </div>

        
            <div className="overflow-x-auto mt-4">
                <table className='w-full border text-orange-700 text-xs sm:text-sm md:text-base'>

                    <thead className='bg-red-300'>
                        <tr>
                            <th className='border p-1 sm:p-2'>ID</th>
                            <th className='border p-1 sm:p-2'>Image</th>
                            <th className='border p-1 sm:p-2'>Title</th>
                            <th className='border p-1 sm:p-2'>Price</th>
                            <th className='border p-1 sm:p-2'>Rating</th>
                            <th className='border p-1 sm:p-2'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filterProduct.slice(0, visibleitems).map((val) => (
                            <tr key={val.id} className='text-center'>

                                <td className='border p-1 sm:p-2'>{val.id}</td>

                                <td className='border p-1 sm:p-2'>
                                    <img
                                        src={val.thumbnail}
                                        alt="product"
                                        className='h-8 sm:h-10 md:h-14 lg:h-16 mx-auto object-contain'
                                    />
                                </td>

                                <td className='border p-1 sm:p-2'>{val.title}</td>

                                <td className='border p-1 sm:p-2 text-blue-600'>
                                    $ {val.price}
                                </td>

                                <td className='border p-1 sm:p-2 text-orange-600 flex justify-center items-center gap-1'>
                                    <FaStar /> {val.rating}
                                </td>

                                <td className='border p-1 sm:p-2'>
                                    <button className='
                                        bg-red-600 text-white 
                                        px-2 sm:px-4 md:px-6 
                                        py-1 sm:py-2 
                                        text-xs sm:text-sm md:text-base 
                                        rounded-lg hover:bg-red-700'>
                                        Add to cart
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
            <div className="flex justify-center">
                <button
                    className='mt-5 bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 text-sm sm:text-base'
                    onClick={showMore}
                >
                    Show More
                </button>
            </div>

        </div>
    )
}


// return (
//     <div className='grid grid-cols-5 justify-items-center mt-5 gap-5'>
//         {product.map((val, i)=>{
//             return (
//                 <div className='flex flex-col bg-red-100 border-2 border-red-700 rounded-lg pt-3 mt-2 h-96 w-70 shadow shadow-red-900' >
//              {/* {val.title} */}

//                <div className='flex justify-center'>
//                  <img src={val.thumbnail} alt="images" className='h-44 max-auto' />
//                </div>

//                <div className='text-x font-bold text-center text-bold text-red-800 '>
//                 {val.title}
//                </div>

//                <div className='line-clamp-2 text-xs mt-2 ml-2 mr-2 text-red-700 text-center'>
//                 {val.description}
//                </div>

//                <div className='flex justify-evenly text-xl  gap-10 '>
//                <div className=' text-blue-600'>{val.price}</div>
//                <div className=' text-orange-600 flex items-center gap-1'> <FaStar />{val.rating}</div>
//                </div>

//                <div className='ml-5 w-60 bg-red-600 text-white p-2 rounded-sm text-center mt-5 cursor-pointer'>
//                 <button className=' font-bold cursor-pointer'>Add to Cart</button>
//                </div>
//                 </div>

//             )
//         })}
//     </div>
// )}

export default Product