import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'
import Emails from './Emails'

export default function History() {
    const [username,setUser]=useState("")
    useEffect(()=>{
        axios.post('http://localhost:5000/dashboard',{"Username":localStorage.getItem('name')}).then((res)=>{
           // console.log(localStorage.getItem('name'))
            console.log(res.data[0])
            setUser(res.data[0].Username)
        })
    },[])
    return (
        <div>
            <Link to='/create'>
                <button type="button" class="btn btn-success">Create</button>
            </Link>
            
           <h1>Username: {username}</h1>
           {/* <button onClick={()=>get()}>Get History</button> */}
           <Emails />
           
        </div>
    )
}
