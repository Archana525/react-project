import { useState } from "react"
import Nav from "./components/sharedComponent/Nav"
import Product from "./components/Product"
import Regform from "./components/sharedComponent/Regform"
import Login from "./components/sharedComponent/Login"

function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState("home")

  return (
    <div className={isDarkMode ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>

      {/* Navbar */}
      <Nav 
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        setPage={setPage}
      />

      {/* Pages */}
      {page === "home" && <Product />}
      {page === "login" && <Login />}
      {page === "register" && <Regform />}

    </div>
  )
}

export default App





// import Card from "./components/Card"
// import Counter from "./components/Counter"
// import Navbar from "./components/sharedComponent/Navbar"
// import Nav from "./components/sharedComponent/Nav"
// import Hero from "./components/sharedComponent/Hero"
// import Cta from "./components/sharedComponent/Cta"
// import Product from "./components/Product"
// import Regform from "./components/sharedComponent/Regform"
// import Login from "./components/sharedComponent/Login"
// import { useState } from "react"

// function App() {
//   const [isDarkMode, setDarkMode] = useState(false)
//    const [page, setPage] = useState("home");

//   return (
//     <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>

//       <>
//         {/* <h1 className="text-blue-700 font-bold">Paragraph</h1>

//     <p className="bg-red-700 text-green-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
//     Hic minima iure repudiandae dolore eum voluptate, veritatis <br />
//     nisi, aspernatur consectetur inventore, praesentium distinctio <br />
//     officia eius ipsa tempore libero porro numquam atque!</p>
//     <i className="bg-amber-500 text-amber-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio rerum ipsam corporis tenetur quasi quia illo,<br />
//     npm install tailwindcss @tailwindcss/vite maxime labore numquam culpa fugiat. Sit dolor placeat aut autem ut esse aperiam.</i> */}

//         {/* <div className=" flex justify-center items-center">

//      <form action="" className="bg-green-200 border-2 w-fit p-5 ">
//      First Name: <br /><input type="text" id="fname" name="fname" placeholder="Enter your First name" className=" bg-amber-50 border-2 w-fit p-2 " /><br /><br />

//      Last Name: <br /><input type="text" id="lname" name="lname" placeholder="Enter your last name"className="  bg-amber-50 border-2 w-fit p-2" /><br /><br />

//      Address: <br /><input type="text" id="address" name="address" placeholder="Enter your address" className="  bg-amber-50 border-2 w-fit p-2" /><br /><br />

//      Contact: <br /> <input type="number" id="contact" name="contact" placeholder="Enter your contact"className="  bg-amber-50 border-2 w-fit p-2" /><br /><br />
//      Email: <br /> <input type="text" id="email" name="email" placeholder="Enter your email" className="  bg-amber-50 border-2 w-fit p-2" /><br /><br />
//      <div className="flex justify-center items-center"> 
//       <button className="  bg-amber-50 border-2 w-fit p-2">Submit</button><br />
//       </div>

//     </form>

//    </div> */}

//        <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>

//       {/* ✅ Navbar */}
//       <Nav 
//         isDarkMode={isDarkMode} 
//         setDarkMode={setDarkMode}
//         setPage={setPage}
//       />

//       {/* ✅ Page Rendering */}
//       {page === "home" && <Product />}
//       {page === "login" && <Login />}
//       {page === "register" && <Regform />}

  

//           {/* <Nav isDarkMode={isDarkMode} setDarkMode={setDarkMode}/> */}
//           {/* <Hero/>
//     <Cta/> */ }
//           <Product />
//            <Regform /> 
//            <Login/>


//           {/* <Navbar/>
//           {/* <Counter/> */}
//           {/* <Card/> */}
//         </div>
//         {/* <div className="flex justify-center items-center gap-10 "> */}

//         {/* <Card/>
//    <Card/> */}


//         {/* </div> */}

//       </>
//     </div>
//   )
// }
// // components n props
// // form text api
// export default App
