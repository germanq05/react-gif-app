import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Context</Link>
            <div className="container-fluid">
                <div className="navbar-nav" id="navbarNav">
                    <NavLink end activeclassname="active" className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink end activeclassname="active" className="nav-item nav-link" to="./about">About</NavLink>
                    <NavLink end activeclassname="active" className="nav-item nav-link" to="./login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}