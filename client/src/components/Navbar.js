import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar =()=>{
    const history = useHistory()
    const auth =useContext(AuthContext)
    const logoutHandler = event =>{
        event.preventDefault()
        auth.logout()
        history.push('/')

    }
    return(
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <a className="brand-logo">SLS</a>
                 <ul id="nav-mobile" className="right hide-on-med-and-down" >
                    <li><NavLink to='/create'>ss</NavLink></li>
                    <li> <NavLink to='/links'>LinksList</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выход</a></li>
                 </ul>

            </div>
        </nav>

    )
}