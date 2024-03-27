import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-green-500 flex'>
        <div className='px-40 py-10'>
            
                <h1 className='p-3 text-lg font-semibold'>CONTACT US</h1>
                <li>shmr123@gmail.com</li>
                <li>Mobile-1 : 7013108450</li>
                <li>Mobile-2 : 8686335240</li>
            
        </div>
        <div className='px-35 py-10'>
        <h1 className='p-3 text-lg font-semibold'>ACTIVITIES</h1>
                <li>SUPPORT</li>
                <li>PROJECTS</li>
                <li>SERVICES</li>
            
        </div>
        <div className='px-40 py-10'>
            
                <h1 className='p-3 text-lg font-semibold'>SOCIAL</h1>
                <li>Git</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
            
        </div>  
    </div>
  )
}

export default Footer