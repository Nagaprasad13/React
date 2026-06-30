import React,{useState}from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import { Body1 } from "./component/Body1";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import { About } from "./component/about";
import { Contact } from "./component/Contact";
import {Error} from "./component/Error"
const AppComponent=()=>(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
);
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppComponent/>,
        children:[
             {
                path:"/",
                element:<Body1/>
            },
             {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ],
        errorElement:<Error/>
    },
   
    ,

])
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

