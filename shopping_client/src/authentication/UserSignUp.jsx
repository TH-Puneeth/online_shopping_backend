import { useEffect } from "react";

let inputParentStyle = "h-[80px] mt-2 flex flex-col items-start justify-start"
let labelStyle = "w-[80%] h-[40%] m-auto text-sm flex items-end dark:text-gray-300";
let inputStyle = "w-[80%] h-[50%] m-auto pl-3 text-sm rounded-sm border border-gray-300 dark:text-gray-300 focus:outline-0 focus:border-2 focus:border-green-700";

export default function UserSignUp({userSignIn, updateMainContent}){

    return (
        <div className="w-[80%] md:w-[30%] m-auto mt-10 rounded-lg border border-gray-300">
            <h1 className="text-center text-lg mt-2">Sign Up</h1>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Full Name</label>
                <input className={inputStyle} type="text" id="name"/>
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Email</label>
                <input className={inputStyle} type="email" id="email" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>New Password</label>
                <input className={inputStyle} type="text" id="password" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Confirm Password</label>
                <input className={inputStyle} type="text"/>
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Phone Number</label>
                <input className={inputStyle} type="number" id="phone" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Country</label>
                <input className={inputStyle} type="text" id="country" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>State</label>
                <input className={inputStyle} type="text" id="state" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>City</label>
                <input className={inputStyle} type="text" id="city" />
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>Street Address</label>
                <textarea className={inputStyle} id="streetAddress" ></textarea>
            </div>
            <div className={inputParentStyle}>
                <label className={labelStyle}>ZIP/Post Code</label>
                <input className={inputStyle} type="number" id="postalCode" />
            </div>
            <button onClick={()=>handleUserSignup({userSignIn, updateMainContent})} className="block text-sm mt-5 w-[50%] h-[40px] m-auto rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 active:bg-fuchsia-600 flex items-center justify-center cursor-pointer">
                Sign up
            </button><br/>
        </div>
    )
}

function handleUserSignup({userSignIn, updateMainContent}){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    let streetAddress = document.getElementById("streetAddress").value;
    let postalCode = document.getElementById("postalCode").value;

    let user = JSON.stringify({
        "username":email,
        "password":password
    });
    let customer = JSON.stringify({
        "name":name,
        "email":email,
        "phone":phone,
        "country":country,
        "state":state,
        "city":city,
        "streetAddress":streetAddress,
        "postalCode":postalCode
    })
    let requestSuccess;
    fetch('http://localhost:8085/api/v1/user/add',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:user})
    .then(response => {
        if(response.status==201){
            requestSuccess = true;
        }
    })
    .then()
    fetch('http://localhost:8085/api/v1/customer/add',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:customer})
    .then(response => {
        if(response.status==201){
            requestSuccess = true;
        }
    })
    .then()
    if(requestSuccess == true){
        updateMainContent(userSignIn);
    }
}