import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'
import Emails from './Emails'

export default function History() {
    const [username,setUser]=useState("")
    useEffect(()=>{
        axios.post('https://mailzz.herokuapp.com/dashboard',{"Username":localStorage.getItem('name')}).then((res)=>{
           // console.log(localStorage.getItem('name'))
            console.log(res.data[0])
            setUser(res.data[0].Username)
        })
    },[])
    return (
        <div className = "container-fluid bg-dark bg-gradient text-white" style= {{ minHeight : "100vh"}}>
            
            <div className="container ">
                <br />

            <h1>
                History
            </h1>
            
           {/* <button onClick={()=>get()}>Get History</button> */}
           <Emails />

           <p>
                To schedule a new email click on the button below.
           </p>

           <Link to='/create'>
                <button type="button" class="btn btn-secondary">Schedule</button>
            </Link>

            </div>
           
        </div>
    )
}
