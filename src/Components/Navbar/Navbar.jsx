import React, { useContext } from "react";
import "./Navbar.css";
import { LoginCheckContext } from "../../Contexts/LoginCheckContext";

const Navbar = () => {
  let [loggedIn,setLoggedIn] = useContext(LoginCheckContext)
  let navbar = ["Home", "About", "Login"];
  if(loggedIn){
    return(
      <div>
      <nav className="flex align-center justify-between p-3 text-center " >
        <div className="mx-70 align-center flex object-contain">
          <a href='http://localhost:3000/'><div className="flex">
            
            <img
              className="w-10 h-16 flex rounded-full object-fill"
              src="https://static.vecteezy.com/system/resources/thumbnails/006/720/912/small/green-leaf-natural-leaf-icon-logo-design-template-vector.jpg"
              alt=""
            ></img>
            <h1 className="text-center  text-4xl px-2 py-2">SWEEP</h1>
          </div></a>
        </div>
       <div> 
        <h1>Profile</h1>
       </div>
      </nav>
    </div>
    )
  }
  return (
    <div>
      <nav className="flex align-center justify-between p-3 text-center " >
        <div className="mx-70 align-center flex object-contain">
          <a href='http://localhost:3000/'><div className="flex">
            
            <img
              className="w-10 h-16 flex rounded-full object-fill"
              src="https://static.vecteezy.com/system/resources/thumbnails/006/720/912/small/green-leaf-natural-leaf-icon-logo-design-template-vector.jpg"
              alt=""
            ></img>
            <h1 className="text-center  text-4xl px-2 py-2">SWEEP</h1>
          </div></a>
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;
