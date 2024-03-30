import React, { useState } from 'react'
import { DetailsCOntext } from '../Contexts/Details'
function Details({children}) {
    let [admin,setAdmin] = useState({})
  return (
    <div>
      <DetailsCOntext.Provider value={[admin,setAdmin]}>
            {children}
      </DetailsCOntext.Provider>
    </div>
  )
}

export default Details
