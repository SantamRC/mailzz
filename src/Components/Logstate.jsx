import React from 'react'
import {Link,useHistory} from "react-router-dom";

export default function Logstate() {
    const history=useHistory();

    const logout=()=>{
        localStorage.removeItem('name')
        history.push('/')
    }

   if(localStorage.getItem('name')){
       return (
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-5">
            <Link to='scheduled'>
                <a class="nav-link text-white">History</a>
            </Link>
        </li>
        <li class="nav-item me-5" onClick={()=>logout()}>
            <a class="nav-link text-white">Logout</a>          
        </li>
        </ul>
       )
   }else{
    return (
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item me-5" >  
            <Link to='/login'>
                <a class="nav-link text-white" >Login</a>
            </Link>
        </li>
        </ul>
       
       )
   }
}
