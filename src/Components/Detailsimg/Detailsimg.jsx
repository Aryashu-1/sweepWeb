import React from 'react'
import './Detailsimg.css'
function Detailsimg() {
  return (
    <div>
        {/* Profile 2 */}
        <div className="profile">
          <div className="profile-image">
            {/* Place two images for profiles */}
            <img src="https://th.bing.com/th/id/OIP.opQMJL7gZpzDZDMbHSWyFQAAAA?rs=1&pid=ImgDetMain" alt="Profile 2"/>
            <img src="https://az505806.vo.msecnd.net/cms/b0609254-aba6-48bf-8471-8ca389c943ff/693d7e28-034e-497f-9be5-01539daedca6.jpg" alt="Profile 2"/>
            {/* Add more images for Profile 2 if needed */}
          </div>
          <div className="profile-name">
            {/* Profile name is to be specified here */}
            <h2>Calangute Beach</h2>
            <div className="profile-bio">
            Calangute Beach, also known as the "Queen of Beaches", is the longest beach in North Goa, stretching from Candolim to Baga. It's a popular tourist destination known for its lively atmosphere, water sports activities, delicious food, and vibrant nightlife.
            </div>
          </div>
        </div>
    </div>
  )
}

export default Detailsimg
