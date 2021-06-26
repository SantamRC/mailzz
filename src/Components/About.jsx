import React from 'react'

export default function About() {
    return (
            <div className ="container-fluid bg-dark bg-gradient text-white p-5">
                <div className="container" style= {{ height : "100vh"}}>
                    <h1 class="display-4 text-muted">About Us</h1>
                    <p class="lead">We are two students with a passion for software development from 
                    <a href="http://nitdgp.ac.in/" className = "text-decoration-none text-white"> National Institute of Technology, Durgapur. </a>
                    </p>
                </div>
            </div>
    )
}
