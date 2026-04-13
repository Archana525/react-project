import React, { useState } from 'react'
import { DiBackbone } from 'react-icons/di'
import { email, z } from "zod"

const Regform = () => {
    const [register, setregister] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        contact: '',
        gender: '',

    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setregister({
            ...register, [name]: value
        })
    }
    const [errors, setError] = useState({})

    const userschema = z.object({
        fname: z.string().min(1, "First Name is required"),
        lname: z.string().min(1, "Last Name is required"),
        email: z.string().email("Invalid email format"),
        password: z.string().min(6, "Minimum 6 characters"),
        contact: z.string().min(10, "Contact must be of 10 digits ").max(10, "Contact must be of 10 digits").startsWith('98'),
        gender: z.string().min(1, "Please select gender")


    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const result = userschema.safeParse(register);
        if (!result.success) {
            const fieldError = [];
            result.error.issues.forEach((err) => {
                fieldError[err.path[0]] = err.message;


            })
            setError(fieldError);
        }
        else {
            alert("form submited successfully..");
        }
    }



    return (
        <div className='flex flex-col justify-center items-center pt-10 pb-10'>
            <h1 className='flex justify-center items-center text-3xl mb-5 text-orange-800 font-bold '>Registration Form</h1>

            <form onSubmit={handleSubmit} className='bg-gray-100  p-6 rounded-xl shadow-lg '>
                <div className=' grid grid-cols-2 gap-4'>
                    <div>
                        First Name:<input type="text" name='fname' id='fname' placeholder='Enter your first name' value={register.fname} onChange={handleChange}
                            className='w-full mb-3 p-2 border rounded' /> <p className='text-red-800'>{errors.fname}</p> <br />
                    </div>

                    <div> Last Name:<input type="text" name='lname' id='lname' placeholder='Enter your last name' value={register.lname} onChange={handleChange}
                        className='w-full mb-3 p-2 border rounded' /> <p className='text-red-800'>{errors.lname}</p> <br /></div>

                    <div>
                        Email:<input type="text" name='email' id='email' placeholder='Enter your email' value={register.email} onChange={handleChange}
                            className='w-full mb-3 p-2 border rounded' /> <p className='text-red-800'>{errors.email}</p><br />
                    </div>

                    <div>
                        Password:<input type="password" name='password' id='password' placeholder='Enter Password' value={register.password} onChange={handleChange}
                            className='w-full mb-3 p-2 border rounded' /><p className='text-red-800'>{errors.password}</p><br />
                    </div>
                    <div>

                        Contact:<input type="number" name='contact' id='contact' placeholder='Enter contact' value={register.contact} onChange={handleChange}
                            className='w-full mb-3 p-2 border rounded' /><p className='text-red-800'>{errors.contact}</p><br />

                    </div>
                    <div>
                        Gender:
                        <div className='flex gap-3 mt-2 mb-2'>
                            <label>
                                <input type="radio" name='gender' value='male' onChange={handleChange} />Male
                            </label>

                            <label>
                                <input type="radio" name='gender' value='male' onChange={handleChange} />Female
                            </label>
                            <label>
                                <input type="radio" name='gender' value='others' onChange={handleChange} />Others
                            </label> <br />
                             <p className='text-red-600'>{errors.gender}</p>



                        </div>
                    </div>
                   

                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 "> Submit</button>

            </form>
        </div>
        // <div className='flex justify-center items-center pt-10 pb-10'>
        //     <form onSubmit={handleSubmit} className='bg-gray-100  p-6 rounded-xl shadow-lg w-80'>

        //         <h1 className='flex justify-center items-center text-3xl mb-5 text-orange-800 font-bold'>Form</h1>

        //         Name:<input type="text" name='name' id='name' placeholder='Enter your name' value={register.name} onChange={handleChange} className='w-full mb-3 p-2 border rounded' /> <p className='text-red-800'>{errors.name}</p> <br />
        //         Email:<input type="text" name='email' id='email' placeholder='Enter your email' value={register.email} onChange={handleChange} className='w-full mb-3 p-2 border rounded' /> <p className='text-red-800'>{errors.email}</p><br />
        //         Password:<input type="password" name='password' id='password' placeholder='Enter Password' value={register.password} onChange={handleChange} className='w-full mb-3 p-2 border rounded' /><p className='text-red-800'>{errors.password}</p><br />


        //         <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700"> Submit</button>
        //     </form>


        //     <div className='flex justify-center bg-gray-100 mt-150 p-6 rounded-xl shadow-lg w-80'>

        //         Name: {register.name}
        //         Email: {register.email}
        //         password: {register.password}
        //     </div>
        // </div >

    )
}

export default Regform