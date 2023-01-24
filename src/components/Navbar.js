import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomLink from './CustomLink'

export default function Navbar() {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <div className='text-center mb-2 row d-flex align-items-baseline justify-content-center'>
                        <img className='profilePic' src='images/mypic.jpg' alt="My Image" />
                        <h1 className='font-italic'>Pat Lubak</h1>
                    </div>
                    <nav className='justify-content-around nav navbar navbar-expand-sm navbar-light bg-dark'>
                        <ul className='nav navbar-nav'>
                            <CustomLink to="/portfolio-2.0/">About</CustomLink>
                            <CustomLink to="/portfolio-2.0/portfolio">Portfolio</CustomLink>
                            <CustomLink to="/portfolio-2.0/contact">Contact</CustomLink>
                            <CustomLink to="/portfolio-2.0/resume">Resume</CustomLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </div >
    )
}