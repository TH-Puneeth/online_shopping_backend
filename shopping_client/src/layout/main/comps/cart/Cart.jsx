import { useState } from "react";
import LoginState from "../../../../authentication/LoginStatus";
import UserSignIn from "../../../../authentication/UserSignIn";

function Cart({updateMainContent}) {
    const [userLoggedIn, setUserLoggedIn] = useState();
    return ( 
        <>
            { LoginState.getStatus() ? <CartContainer />: <UserSignIn updateMainContent={updateMainContent} setUserLoggedIn={setUserLoggedIn}/>}
        </>
     );
}

function CartContainer(){
    
    return (
        <div>
            <CartTitle />
            <CartList />
        </div>
    )
}
function CartTitle(){
    return (
        <div>My Cart</div>
    )
}
function CartList(){
    return (
        <div>Cart List</div>
    )
}
export default Cart;