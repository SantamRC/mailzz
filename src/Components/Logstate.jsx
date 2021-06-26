import React from 'react'
import {Link} from "react-router-dom";

export default function Logstate() {

    const logout=()=>{
        localStorage.removeItem('name')
    }

   if(localStorage.getItem('name')){
       return (
        <li class="nav-item me-5" onClick={()=>logout()}>
           
                <a class="nav-link text-white">Logout</a>
           
        </li>
       )
   }else{
    return (
        <li class="nav-item me-5" >  
            <Link to='/login'>
                <a class="nav-link text-white" >Login</a>
            </Link>
            
        </li>
       )
   }
}
