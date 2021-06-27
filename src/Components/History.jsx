import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'

export default function History() {
    const [data,setData]=useState({})
    const get=()=>{
        axios.get('http://localhost:5000/dashboard',{
            Username:localStorage.getItem('name')
        }).then((res)=>{
            setData(res)
            console.log(data)
        })
    }
    return (
        <div>
           User logged in
        </div>
    )
}
