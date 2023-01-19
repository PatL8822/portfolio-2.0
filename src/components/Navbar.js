import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <div className='text-center mb-2'>
                        <img className='profilePic' src='images/mypic.jpg' alt="My Image" />
                    </div>
                    <nav className='nav navbar navbar-expand-md'>
                        <ul>
                            <CustomLink to="/">About</CustomLink>
                            <CustomLink to="/portfolio">Portfolio</CustomLink>
                            <CustomLink to="/contact">Contact</CustomLink>
                            <CustomLink to="/resume">Resume</CustomLink>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer > */}
        </div >
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvePath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvePath.pathname, end: true })

    return (
        < li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li >
    )

}