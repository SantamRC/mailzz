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

                <div className="container bg-transparent bg-gradient text-white" >

                <table class="table text-white">
                <thead>
                    <tr>   
                    <th scope="col">Title</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Body</th>
                    <th scope="col">Reciepent</th>
                    <th scope="col">CC</th>
                    <th scope="col">Type</th>
                    </tr>
                </thead>

                     {emails.map((item)=>(
                
               
                    <tbody>
                        <tr>
                        <th scope="row">{item.title}</th>
                        <td>{item.subject}</td>
                        <td>{item.body}</td>
                        <td>{item.recipient}</td>
                        <td>{item.cc}</td>
                        <td>Recurring</td>
                        </tr>
                    </tbody>                      
               ))} </table>
                 
           </div>
           </div>
       )
   }
}
