import React from 'react'
import {Link} from "react-router-dom";
import Logstate from './Logstate'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark bg-gradient py-3">
                <div class="container">
                    <a class="navbar-brand text-white" href="/">Mailzz</a>
                    <button class="navbar-toggler " 
                    type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>

                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-5">
                            <Link to='about-us'>
                                <a class="nav-link active text-white text-decoration-none" aria-current="page" >About-Us</a>
                            </Link>
                        </li>
                        <Logstate />
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
