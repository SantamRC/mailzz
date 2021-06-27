import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'
import Emails from './Emails'

export default function History() {
    const [username,setUser]=useState("")
    const [emails,setEmails]=useState()
    const get=()=>{
        axios.post('http://localhost:5000/dashboard',{"Username":"sayan"}).then((res)=>{
           // console.log(localStorage.getItem('name'))
            console.log(res.data[0].Username)
            setUser(res.data[0].Username)
        })
    }
    useEffect(()=>{
        axios.post('http://localhost:5000/dashboard',{"Username":"sayan"}).then((res)=>{
           // console.log(localStorage.getItem('name'))
            console.log(res.data[0])
            setUser(res.data[0].Username)
            setEmails(res.data[0].Emails)
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
