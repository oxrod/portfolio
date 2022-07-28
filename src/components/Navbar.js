import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setExpandNavbar(false)
    }, [location])
    return (
        <div className='navbar' id={expandNavbar ? 'open' : 'close'}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpandNavbar((prev) => !prev)
                }}><ReorderRoundedIcon /></button>
            </div>
            <div className='links'>
                <Link className='link' to={"/"}>Accueil</Link>
                <Link className='link' to={"/projects"}>Projets</Link>
                <Link className='link' to={"/experience"}>Expérience</Link>
            </div>
        </ div>
    )
}

export default Navbar