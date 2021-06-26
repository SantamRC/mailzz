import {useState,useContext} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import Context from '../Helper/Context'

export default function Signup() {
    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const {state,actions}=useContext(Context)

    let onSend=(e)=>{
        
        
        const body={
            Username:username,
            Password:password
        }
        axios.post('http://localhost:5000/signup',body).then((res)=>{
            console.log(res)     
        }                
        )
        //const run=()=>actions({type:'setState',payload:username})
        localStorage.setItem('name',username)
        console.log("The state is: "+state)
    }

    return (
        <div className="container-fluid bg-dark bg-gradient text-white p-5" style = {{ minHeight : "100vh"}}>
            <div className='w-50 me-auto ms-auto mt-5 bg-transparent bg-gradient p-4 text-white rounded-3'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" >Username</label>
                    <input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setUser(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" >Password</label>
                    <input type="password"  id="exampleInputPassword1" onChange={(e)=>setPass(e.target.value)} />
                </div>
                <div class="mb-3 ">
                    <input type="checkbox" id="exampleCheck1" />
                    <label for="exampleCheck1">Remember Me</label>
                </div>
                <button  onClick={()=>onSend()} class="btn btn-secondary">Signup</button>
                <hr />
                <h4>
                    Else Sign up with Google
                    <br />
                    <br />

                    <button type="button" class="btn btn-primary" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                        </svg> Sign up
              </button>
                </h4>
            </div>
        </div>
    )
}
