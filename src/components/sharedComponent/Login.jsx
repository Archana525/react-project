import React, { useState } from "react"

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target

    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault() // ✅ VERY IMPORTANT

    if (!loginData.email || !loginData.password) {
      setError("All fields are required!")
      return
    }

    setError("")
    console.log("Login Data:", loginData)
    alert("Login Successful ✅")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form 
        onSubmit={handleSubmit}   // ✅ MUST BE HERE
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >

        <h2 className="text-2xl text-orange-800 font-bold mb-4 text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-2">
            {error}
          </p>
        )}

        {/* EMAIL */}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />

        {/* BUTTON */}
        <button
          type="submit"   // ✅ VERY IMPORTANT
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
        >
          Login
        </button>

      </form>
    </div>
  )
}

export default Login