import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function resume() {
    return (
        <div>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer>
        </div>
    )
}