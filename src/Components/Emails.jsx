import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Emails() {
    const [emails,setEmails]=useState()
    useEffect(()=>{
        axios.post('https://mailzz.herokuapp.com/dashboard',{"Username":localStorage.getItem('name')}).then((res)=>{
           // console.log(localStorage.getItem('name'))
            console.log(res.data[0])
            setEmails(res.data[0].Emails)
        })
    },[])
   if(!emails){
       return <div></div>
   }else{
       return(
           <div>
               {emails.map((item)=>(
               <div className="card d-block w-50 m-auto mt-1 bg-dark" >
                   <div className="card-body">
                   <h5 class="card-title text-center text-white">Title: {item.title}</h5>
                   <h5 class="card-title text-center text-white">Subject: {item.subject}</h5>
                   <h5 class="card-title text-center text-white">Body: {item.body}</h5>
                   <h5 class="card-title text-center text-white">Recipient: {item.recipient}</h5>
                   </div>
               </div>
               ))}
           </div>
       )
   }
}
