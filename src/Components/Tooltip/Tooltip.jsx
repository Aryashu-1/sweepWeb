import React from 'react'
import './Tooltip.css'
function Tooltip() {
  return (
    <div>
       <div className="card">
        
        <div className="text">
          <div className="title">
         
            <div className="tooltip">
              <div className="tooltip-spacing">
              
                <div className="tooltip-bg1"></div>
                <div className="tooltip-bg2"></div>
                <div className="tooltip-text ">?</div>
              </div>
            </div>
            <svg className="popup-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" height="130" width="300">
              <path d="M36.5 12.695c15.9-2.4 32.556-4.284 82.977-3.815 79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022z" fill="#303030" stroke="#000" />
            </svg>
            <svg className="popup-outline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" height="130" width="300">
              <g stroke-width="2" stroke-linecap="round">
                <path className="popup-outline-left" d="M233.5 129s-1.992-7.686-32.218-14c-17.933-5.043-118.204 3.687-163.51-2.544-21.317-2.932-33.706-8.26-34.228-27.022L2.272 39.717c-.46-16.58 12.34-23.718 34.23-27.022 15.897-2.4 32.554-4.284 82.975-3.815" fill="none" stroke="#303030" />
                <path className="popup-outline-right" d="M119.477 8.88c79.67.74 121.785.26 145.294 5.51 18.483 4.13 34.333 11.696 33.382 32.11l-1.696 36.39c-1.01 21.68-11.678 29.377-21.934 30.838-14.884 2.12-29.72 3.52-54.512-.848C232.522 118.263 233.5 129 233.5 129" fill="none" stroke="#303030" />
              </g>
            </svg>
            <div className="popup-text">
              <div className='my-4 '>
              <h1>Plastic,  Cardboard,  Metal,  Paper</h1>
              </div>
            
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Tooltip
