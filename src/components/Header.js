import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {


    const [btnNameReact, setbtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
   
    const {loggedInUser} = useContext(UserContext);

    //Subcribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-red-400 shadow-lg mb-2">
            <div className="logo-container">
              <img  className="w-24 h-auto" src = {LOGO_URL} />
            </div> 
           <div className="flex items-center">
            <ul className= "flex p-4 m-4">
                <li className="px-4">
                    Online Status: {onlineStatus ? "✅" : "🔴"}
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4"> 
                    <Link to ="/about">About Us</Link>
                </li>
                <li className="px-4">
                    <Link to ="/Contact"> Contact Us</Link>
                </li>
                <li className="px-4">
                    <Link to ="/grocery"> Grocery</Link>
                </li>
                <li className="px-4 font-bold">
                   <Link to ="/cart">Cart - ({cartItems.length}) Items</Link>       
                </li>
                
                  <button className="login" 
                 
                    onClick={() => {
                    
                    btnNameReact === "Login" ? setbtnNameReact("Logout") 
                    : setbtnNameReact("Login");
                    }}>

                    {btnNameReact}
                
                  </button>
                

                <li className="px-4 font-bold" >{loggedInUser}</li>
            </ul>

           </div>

        </div>
    )
}; 



export default Header;