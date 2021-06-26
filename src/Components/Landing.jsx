import {useState,useContext} from 'react'
import Context from '../Helper/Context'
import Frontend from './Frontpage'
import History from './History'

export default function Landing() {
    const {state,actions}=useContext(Context)

   if(localStorage.getItem('name')){
       return <History />
   }else{
       return <Frontend />
   }
}
