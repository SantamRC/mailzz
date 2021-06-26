import React from 'react'
import {Link} from "react-router-dom";

export default function Frontpage() {
    return (
        <div>
            
            <div class="container-fluid bg-light rounded-3 p-5">
            <div className="container">
            <h1 class="display-4">Mailzz</h1>
            <p class="lead">This is a simple hero unit,
             a simple jumbotron-style component for calling extra attention to featured content or information.
             <br />
             You can get started by clicking the button below.
             </p>

            </div>
            
            
    
            </div>

            <br />

            <div className="container">
            <h3>Send recurring mails </h3>
            <br />
            <Link to='/create'>
                <button type="button" class="btn btn-primary">Get Started</button>
            </Link>

            </div>
            
        </div>
    )
}
