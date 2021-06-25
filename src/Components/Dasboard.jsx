import React from 'react'
import {Data} from '../data'

export default function Dasboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {Data.map((info)=>
                <h1>{info.email}</h1>
            )}
        </div>
    )
}
