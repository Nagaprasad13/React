import { LOGO_URL } from "../utils/constant";
import {useState} from "react";

const Header=()=>{
    let [btnName,setButtonName]=useState("Login");
    return (
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>                
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        <button className="Login" onClick={()=>{
            if(btnName==="Login"){
                setButtonName("Logout");
            }
            else{
                setButtonName("Login");
            }
        }}>{btnName}</button>
    </div>
)}

export default Header;