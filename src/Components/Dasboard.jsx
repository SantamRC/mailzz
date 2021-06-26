import React from 'react'
import {Data} from '../data'

export default function Dasboard() {
    return (
        <div className="container">
            <button type="button" class="btn btn-primary ">History</button>
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
        </div>
    )
}
