import React,{useState}from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import { Body1 } from "./component/Body1";
const AppComponent=()=>(
    <div className="app">
        <Header/>
        <Body1/>
    </div>
);


const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<AppComponent/>);
