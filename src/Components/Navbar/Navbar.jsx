import React, { useContext } from "react";
import "./Navbar.css";
import { LoginCheckContext } from "../../Contexts/LoginCheckContext";
import { NavLink } from "react-router-dom";

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
      <NavLink to="admin/profile">
      <div> 
        <img className="w-18 h-14 flex rounded-full object-fill" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-1024.png"></img>
       </div></NavLink> 
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
