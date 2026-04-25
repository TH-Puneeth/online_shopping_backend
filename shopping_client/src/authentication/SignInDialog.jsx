import UserSignIn from "./UserSignIn";

export default function SignInDialog({updateMainContent,setUserLoggedIn, current}){
    return (
        <div className="w-[70%] md:w-[30%] h-[150px] m-auto mt-[150px] border border-gray-300 rounded-md ">
            <div className="w-[100%] h-[60%] flex items-center justify-center">Please Sign in</div>
            <div className="w-[100%] h-[40%] flex items-center justify-between">
                <button onClick={()=>updateMainContent(current)} className="text-sm ml-2 w-[25%] h-[60%] rounded-sm cursor-pointer dark:text-gray-300 border border-gray-300">
                    Back
                </button>
                <button onClick={()=>updateMainContent(<UserSignIn updateMainContent={updateMainContent} current={current} setUserLoggedIn={setUserLoggedIn} />)} className="text-sm mr-2 w-[50%] h-[60%] rounded-sm cursor-pointer text-white bg-red-700">
                    Go to Sign in
                </button>
            </div>
        </div>
    )
}