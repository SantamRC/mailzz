import React from 'react'
import {Link} from "react-router-dom";

export default function Frontpage() {
    return (
        <div class="container-fluid bg-gradient bg-dark text-white p-5" style= {{ height : "100vh"}}>
            
            <div >
                <div className="container">
                <h1 class="display-4 text-muted">Mailzz</h1>
                <p class="lead">This is a web app where users can login and send recurring mails to the recipients
                <br />
                You can get started by clicking the button below.
                </p>

                <br />

                <h3>Send recurring mails </h3>
                <Link to='/signup'>
                    <button type="button" class="btn btn-secondary">Get Started</button>
                </Link>

            <hr />


            </div>

            


            </div>

            

            
        </div>
    )
}
