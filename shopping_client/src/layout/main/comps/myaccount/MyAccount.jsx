import { useState } from "react";
import LoginState from "../../../../authentication/LoginStatus";
import UserSignIn from "../../../../authentication/UserSignIn";
import UserDetails from "./UserDetails";

function MyAccount({updateMainContent}) {
    const [userLoggedIn, setUserLoggedIn] = useState(LoginState.getStatus())
    return ( 
        <div>
            {userLoggedIn ? <UserDetails /> : <UserSignIn updateMainContent={updateMainContent} setUserLoggedIn={setUserLoggedIn} />}
        </div>
     );
} 


export default MyAccount;