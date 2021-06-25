import React from 'react'
import Navbar from './Navbar'

export default function Frontpage() {
    return (
        <div>
            <Navbar />
            <h1>Mailzz</h1>
            <h3>Send recurring mails </h3>
            <button type="button" class="btn btn-primary">Get Started</button>
        </div>
    )
}
