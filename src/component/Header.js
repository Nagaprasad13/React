import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    let [btnName,setButtonName]=useState("Login");
    return (
    <div className="header">
        <div className="logo">
            <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>                
                <li><Link to="/about">About Us</Link></li>
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