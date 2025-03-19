// as

import React, { useState,useContext } from 'react'
// import UserContext from '../context/UserContext'
import { DataContext } from '../context/UserContext'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(DataContext)

    const handleSubmit = (e) =>{
        e.preventDefault()    //by default jab bhi ham submit krte hai to url  ke through 
                              // value kahi na kahi chli jaati hai..to woh ham nhi chahte
                              // ..thats why we use/write "e.preventDefault"
        setUser({username,password})
    }

  return (
    <>
    <div>
    <h2>Login</h2>
        <input
         className='py-2 text-black text-bold bg-gray-400'
         type="text"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         placeholder='username'
         />

        {"  "}

        <input 
         className='py-2 text-black text-bold bg-gray-400'
         type="text"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         
         placeholder='password'/>
        <button onClick={handleSubmit}>Submit!</button>
    </div>
</>
  )
}

export default Login