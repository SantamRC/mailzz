import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="/">Mailzz</a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-5">
                            <Link to='about-us'>
                                <a class="nav-link active text-white" aria-current="page" >About-Us</a>
                            </Link>
                        </li>
                        <li class="nav-item me-5">
                            <Link to='/dashboard'>  
                                <a class="nav-link text-white">Dashboard</a>
                            </Link>
                        
                        </li>
                        <li class="nav-item me-5">
                            <Link to='/history'>  
                                <a class="nav-link text-white">History</a>
                            </Link>
                        </li>
                        <li class="nav-item me-5">
                            <Link to='/login'>  
                                <a class="nav-link text-white">Login</a>
                            </Link>
                        
                        </li>

                        <li class="nav-item me-5">
                            <Link to='/scheduled'>  
                                <a class="nav-link text-white">Scheduled</a>
                            </Link>
                        
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
