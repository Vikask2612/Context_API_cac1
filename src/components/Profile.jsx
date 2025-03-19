import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

function Profile() {
    const {user} = useContext(DataContext)
 
    if(!user) return <div>Please Login</div>        

    return <div>Welcome {user.username}</div>  
}

export default Profile

