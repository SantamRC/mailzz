import React from 'react'
import {Data} from '../data'

export default function Dasboard() {
    return (
<<<<<<< HEAD
        <div>
            <h1>Dashboard</h1>
            {Data.map((info)=>(
                <h1>{info.email}</h1>
            ))}
=======
        <div className="container">
            <h3>
                Username
            </h3>
            <ul className="list-group">
            {Data.map((info)=>
                <li className="list-group-item disabled" aria-disabled="true">{info.email}</li>
            )}
            </ul>

            <h3>
                Password
            </h3>
            <ul className="list-group">
            {Data.map((info)=>
                <li className="list-group-item disabled" aria-disabled="true">{info.password}</li>
            )}
            </ul>
>>>>>>> ed58baa52ac87c68d1f890409651e24dcbe7a6dd
        </div>
    )
}
