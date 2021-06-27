import {useState,useContext} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import Context from '../Helper/Context'
import GoogleLogin from 'react-google-login';

export default function Signup() {
    const [username,setUser]=useState("")
    const [password,setPass]=useState("")
    const {state,actions}=useContext(Context)

    let onSend=(e)=>{
        
        
        const body={
            Username:username,
            Password:password
        }
        axios.post('https://mailzz.herokuapp.com/signup',body).then((res)=>{
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

                    <GoogleLogin
                        clientId=""
                        buttonText="Login"
                        onSuccess={""}
                        onFailure={""}
                        cookiePolicy={'single_host_origin'}
                    />
                </h4>
            </div>
        </div>
    )
}
