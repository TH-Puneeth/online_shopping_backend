import Home from "../../main/comps/home/Home";
import Cart from "../../main/comps/cart/Cart";
import MyAccount from "../../main/comps/myaccount/MyAccount";
import MainContent from "../../main/MainContent";
import UserSignIn from "../../../authentication/UserSignIn";
import LoginState from "../../../authentication/LoginStatus.js";
import { useState } from "react";

export default function Navigation({updateMainContent}){
    const navButtonStyle = "block w-fit dark:text-gray-300 h-8 text-lg md:text-sm mt-4 md:mt-0  md:text-white md:hover:bg-transparent md:p-0 md:w-fit md:h-fit md:text-left ml-5 md:mr-5 md:border-0 cursor-pointer md:hover:border-b-2 md:hover:border-white";
    const navStyle = "hidden absolute bottom-0 top-0 left-0 right-0 bg-white md:block md:static md:w-auto md:bg-transparent md:text-black md:flex md:items-center md:justify-evenly md:text-sm";
    const [userLoggedIn, setUserLoggedIn] = useState(LoginState.getStatus())
    let signBtn;
    if(userLoggedIn){
        signBtn = <button id="signin-btn" onClick={()=>{
                const viewportWidth = window.innerWidth;
                if(viewportWidth<680){
                    document.getElementById("nav").style.display='none';
                }
                updateMainContent(<div>Please wait</div>);
                LoginState.setStatus(false);
                setUserLoggedIn(false)
                updateMainContent(<Home updateMainContent={updateMainContent} />)
            }} className={navButtonStyle}>
                Sign out
            </button>
        
    }
    else{
        signBtn = <button id="signin-btn" onClick={()=>{
                updateMainContent(<UserSignIn updateMainContent={updateMainContent} current={<Home updateMainContent={updateMainContent} />} setUserLoggedIn={setUserLoggedIn} />)
                const viewportWidth = window.innerWidth;
                if(viewportWidth<680){
                    document.getElementById("nav").style.display='none';
                }
            }} className={navButtonStyle}>
                Sign in
            </button>
    }
    return(
        <>
        <button onClick={()=>{
            document.getElementById("nav").style.display='block';
        }} className=" h-[50%] w-[10%] md:hidden border-0 border-white flex flex-col items-center justify-evenly gap-[4%] mr-2">
            <div className="border-2 border-white dark:white rounded-full h-[2px] w-[30px]"></div>
            <div className="border-2 border-white dark:border-gray-200 rounded-full h-[2px] w-[30px]"></div>
            <div className="border-2 border-white dark:border-gray-200 rounded-full h-[2px] w-[30px]"></div>
        </button>
        <nav id="nav" className={navStyle} >
            <div className="md:hidden bg-red-700 dark:bg-black h-14 flex items-center justify-end">
                <button onClick={()=>{
                    document.getElementById("nav").style.display='none';
                }} className="w-[40px] h-[40px] mr-2">
                    <svg className="w-[100%] h-[100%]">
                        <line x1={10} y1={10} x2={30} y2={30} className="stroke-white dark:stroke-white stroke-4" />
                        <line x1={10} y1={30} x2={30} y2={10} className="stroke-white dark:stroke-white stroke-4" />
                    </svg>
                </button>
            </div>
            <button id="home-btn" onClick={() =>{
                
                updateMainContent(<Home updateMainContent={updateMainContent} />)
                const viewportWidth = window.innerWidth;
                if(viewportWidth<680){
                    document.getElementById("nav").style.display='none';
                }
                if(viewportWidth<680){
                    document.getElementById("home-btn").style.borderBottom='solid 2px oklch(50.5% 0.213 27.518)';
                }
                else{
                    document.getElementById("home-btn").style.borderBottom='solid 2px white';
                }
                document.getElementById("cart-btn").style.borderBottom='none';
                document.getElementById("myaccount-btn").style.borderBottom='none';

            }} className={navButtonStyle}>
                Home
            </button>
            <button id="cart-btn" onClick={()=> {
                updateMainContent(<Cart updateMainContent={updateMainContent} />)
                const viewportWidth = window.innerWidth;
                if(viewportWidth<680){
                    document.getElementById("nav").style.display='none';
                }
                if(viewportWidth<680){
                    document.getElementById("cart-btn").style.borderBottom='solid 2px red';
                }
                else{
                    document.getElementById("cart-btn").style.borderBottom='solid 2px white';
                }
                document.getElementById("home-btn").style.borderBottom='none';
                document.getElementById("myaccount-btn").style.borderBottom='none';
            }} className={navButtonStyle}>
                Cart
            </button>
            <button id="myaccount-btn" onClick={()=>{
                updateMainContent(<MyAccount updateMainContent={updateMainContent} />)
                const viewportWidth = window.innerWidth;
                if(viewportWidth<680){
                    document.getElementById("nav").style.display='none';
                }
                if(viewportWidth<680){
                    document.getElementById("myaccount-btn").style.borderBottom='solid 2px oklch(50.5% 0.213 27.518)';
                }
                else{
                    document.getElementById("myaccount-btn").style.borderBottom='solid 2px white';
                }
                document.getElementById("cart-btn").style.borderBottom='none';
                document.getElementById("home-btn").style.borderBottom='none';
            }} className={navButtonStyle}>
                My Account
            </button>
            {
                signBtn
            }
            
        </nav>
        </>
    );
}
