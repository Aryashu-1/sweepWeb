import React from 'react'
import './Detailsimg.css'
function Detailsimg(props) {
  let vehicleurl = props.vehicleUrl
  let driverurl = props.driverUrl
  return (
    <div>
        {/* Profile 2 */}
        <div className="profile">
          <div className="profile-image">  
            {/* Place two images for profiles */}
            <img src={`${vehicleurl}`} alt="Profile 2"/>
            <img src={`${driverurl}`} alt="Profile 2"/>
            {/* Add more images for Profile 2 if needed */}
          </div>

        </div>
    </div>
  )
}

export default Detailsimg
