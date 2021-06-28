import React from 'react'
import FrontPage from './Frontpage'
import History from './History'

export default function ProtectedRoute() {
    if(localStorage.getItem('name')){
        return <History />
    }else{
        return <FrontPage />
    }
}
