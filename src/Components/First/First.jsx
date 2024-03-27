import React from 'react'
import { NavLink } from 'react-router-dom'
import Searchbar from '../Searchbar/Searchbar'
function First() {
  return (
    <div>
        <div>
            <Searchbar/>
        </div>
        <NavLink to={'login'}className='text-centre w-full flex p-6 '><button className='bg-green-500  m-auto p-5 rounded-full font-3xl text-white'>LOGIN/SIGNUP</button></NavLink></div>
    
  )
}

export default First