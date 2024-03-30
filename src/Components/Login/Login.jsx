import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginCheckContext } from "../../Contexts/LoginCheckContext";
import axios from 'axios';
import { DetailsCOntext } from "../../Contexts/Details";

function Login() {
  
  let [loggedIn,setLoggedIn]= useContext(LoginCheckContext)
  let [admin,setAdmin] = useContext(DetailsCOntext)
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  async function handleFormSubmit(User) {

    let res=  await axios.post('http://localhost:4000/admin-api/login',User)

    if(res.data.message === "Login Succesfull"){
      setLoggedIn(true);
      setAdmin(res.data.user)
    navigate('/Admindashboard')
    }
    else{
      alert(`${res.data.message}`)

    }
    
   
  }
  return (
    <div className=" h-screen bg-gray-100 ">
    <div className="flex h-screen ">
      <div className="w-[60%] h-screen ">
        <img className="h-full" src='https://envirowaste.com.au/wp-content/uploads/2023/09/Digital-Transformation-in-Waste-Managemen-Everything-You-Need-to-Know-1000x640.jpg'></img>
      </div>
    
    
    <div className="w-[40%] rounded-md m-auto ">
      <div className="text-center"> <h1 className=" mx-6 my-3 text-green-600 font-semibold text-2xl">Sign In</h1></div>
      
      <form className="px-10 m-2" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="py-3">
          {" "}
          <h1 className="text-xl text font-semibold">Username</h1>
          <input
            className=" w-full p-2 rounded-md border-2 border-black"
            type="text"
            {...register("name", { required: true })}
          ></input>
        </div>
        {errors.name?.type === "required" && (
          <h3 className=" text-red-700">*required</h3>
        )}
        <div className="py-3">
          <h1 className="text-xl font-semibold">Password</h1>
          <input
            id="Pass"
            className=" w-full p-2 rounded-md border-2 border-gray-500"
            type="password"
            {...register("password", { required: true, minLength: 8 })}

          ></input>
          {errors.password?.type === "required" && (
            <h3 className=" text-red-700">*required</h3>
          )}
          {errors.password?.type === "minLength" && (
            <h3 className=" text-red-700">
              Password must be atleat 8 cahracters
            </h3>
          )}
        </div>
        <div className="text-center p-4">
         <button
            type="submit"
            className=" bg-green-600 w-[50%] text-lg rounded-xl p-3 text-white hover:bg-blue-700 "
          >
            Sign In
          </button>
        </div>
      </form>
   
    </div>
    </div>
  </div>
  );
}

export default Login;