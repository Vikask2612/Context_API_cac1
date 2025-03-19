
import React, { createContext } from 'react'
import { useState } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
  const [user, setUser] = useState()
       
  return (
    <DataContext.Provider value={{user,setUser}}>
      {children} 
    </DataContext.Provider>
  )
}

export default UserContext
