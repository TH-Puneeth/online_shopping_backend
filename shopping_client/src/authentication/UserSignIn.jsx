import { useState } from "react";
import UserSignUp from "./UserSignUp";
import LoginState from "./LoginStatus"
import ServerIPAddress from "../url/ServerIP";

let inputParentStyle = "h-[80px] mt-2 flex flex-col items-start justify-start"
let labelStyle = "w-[80%] h-[40%] m-auto text-sm flex items-end dark:text-gray-300";
let inputStyle = "w-[80%] h-[50%] m-auto pl-3 text-sm rounded-sm border border-gray-300 dark:text-gray-300 shadow-white  dark:border-gray-400 focus:outline-1 dark:focus:border-green-700 dark:focus:border-2";

export default function UserSignIn({updateMainContent, current, setUserLoggedIn}){
    const [errorMessage, setErrorMessage] = useState("Sign in");
    return (
        <div className="w-[80%] md:w-[40%] m-auto mt-10 rounded-lg border border-gray-300 dark:border-gray-400">
            <h1 className="text-center text-md md:text-lg mt-2 dark:text-gray-300">{errorMessage}</h1>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Email</label>
                <input className={inputStyle} type="email" id="email" placeholder="Enter Email here" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Password</label>
                <input className={inputStyle} type="password" id="password" placeholder="Enter Password here" />
            </div>
            <button onClick={()=>handleSignIn({setUserLoggedIn, updateMainContent, current, setErrorMessage})} className="block text-sm mt-5 w-[50%] h-[40px] m-auto rounded-full bg-red-700 dark:bg-gray-800 text-white hover:bg-red-800 active:bg-red-700 flex items-center justify-center cursor-pointer hover:dark:bg-black hover:dark:border-1 hover:dark:border-green-500">
                Sign in
            </button>
            <button onClick={()=>updateMainContent(<UserSignUp updateMainContent={updateMainContent} userSignIn={<UserSignIn updateMainContent={updateMainContent} />} />)} className="w-full text-[80%] text-center mt-2 mb-2 text-blue-900 dark:text-blue-300 hover:text-blue-950 dark:hover:text-blue-400 hover:underline cursor-pointer">
                If you don't have account, please click here to create account.
            </button>
        </div>
    );
}

function handleSignIn({setUserLoggedIn, updateMainContent, current, setErrorMessage}){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;
    
    let url = ServerIPAddress +'/api/v1/user/get/'+ email + '/' + password;
    fetch(url,{
        method:'POST',
    })
    .then(response =>{
        if(response.status==302){
            LoginState.setStatus(true)
            setUserLoggedIn(LoginState.getStatus())
            updateMainContent(current)
            return response.status;
        }
        return response.json();
    })
    .then(data=>{ 
        if(data==302){
            return
        }
       if(data.statusCode==401 || data.statusCode==404){
            setErrorMessage("Invalid Username or Password")
        }
    })
    .catch(error =>console.log(error))
}