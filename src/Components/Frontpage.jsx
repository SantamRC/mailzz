import React from 'react'
import {Link} from "react-router-dom";

export default function Frontpage() {
    return (
        <div>
            <h1>Mailzz</h1>
            <h3>Send recurring mails </h3>
            <Link to='/login'>
                <button type="button" class="btn btn-primary">Get Started</button>
            </Link>
           
        </div>
    )
}
