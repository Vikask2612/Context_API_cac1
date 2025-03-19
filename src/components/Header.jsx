import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Header = () => {

    const data = useContext(DataContext)

  return (
    <div>This is Header {data}</div>
  )
}

export default Header