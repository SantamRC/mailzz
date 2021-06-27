import {useState} from 'react'
import axios from 'axios'
import {useHistory} from "react-router-dom";

export default function Login(props) {
    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const history=useHistory();

    let onSend=(e)=>{
        const body={
            Username:username,
            Password:password
        }
        axios.post('https://mailzz.herokuapp.com/login',body).then((res)=>{
            if(res.data.response=="logged"){
                localStorage.setItem('name',username)
            } 
            console.log(res.data)  
        }                
        )
        history.push('/')
        props.change('new')
    }

    return (
        <div className="container-fluid bg-dark bg-gradient text-white p-5" style = {{ minHeight : "100vh"}}>
            <div className='bg-transparent bg-gradient container p-5 text-white rounded-3'>
                
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" id="exampleInputEmail1" class="form-control" aria-describedby="emailHelp" onChange={(e)=>setUser(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label" >Password</label>
                    <input type="password"  id="exampleInputPassword1" class="form-control" onChange={(e)=>setPass(e.target.value)} />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label  class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button onClick={()=>onSend()} class="btn btn-secondary">Login</button>
                <hr />
                
            </div>
        </div>
    )
}
