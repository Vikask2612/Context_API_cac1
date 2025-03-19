// as

// import React, { useContext } from "react"
// import { DataContext } from "./context/UserContext"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import Section from "./components/Section"

// const App = () => {

//    const data = useContext(DataContext)
//     console.log(data)

//   return (
//     <>
//     <div className='text-black text-2xl'>This is UserContext! {data} </div>
//     <Footer/>
//     <Header/>
//     <Section/>   
    
//   </>
//   )
// }

// export default App
// --------------------------------------------------------------------

import React, { useContext } from "react"
import { DataContext } from "./context/UserContext"
// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import Section from "./components/Section"
import Login from "./components/Login"
import Profile from "./components/Profile"

const App = () => {

   const {user} = useContext(DataContext)

  return (
    <>
    <div className='text-black text-2xl'> 
      <h1>This is app.jsx</h1>
    </div>
    <Login/>
    <Profile/>
    {/* <Header/>
    <Footer/>
    <Section/> */}
  </>
  )
}

export default App


