import {useState,useContext} from 'react'
import Context from '../Helper/Context'

export default function Scheduled() {
    const {state,actions}=useContext(Context)
    const [username,setUser]=useState("")

    const change=()=>{
        localStorage.setItem('name',username)
        actions({type:'setState',payload:username})
    }

    return (
        <div>
           {<h4>THe user name is:{state}</h4>}
           <input type="text" placeholder="Username" onChange={(e)=>setUser(e.target.value)} ></input>
           <button type="button" class="btn btn-primary" onClick={()=>change()} >Change</button>
        </div>
    )
}
