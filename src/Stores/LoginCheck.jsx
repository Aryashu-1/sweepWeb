import React, { useState } from 'react'
import { LoginCheckContext } from '../Contexts/LoginCheckContext'
function LoginCheck({children}) {
    let [loggedIn,setLoggedIn] = useState(false)
  return (
    <div>
      <LoginCheckContext.Provider value={[loggedIn,setLoggedIn]}>
            {children}
      </LoginCheckContext.Provider>
    </div>
  )
}

export default LoginCheck
