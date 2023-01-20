import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import pdf from '../Pat\'s resume.pdf'

export default function resume() {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <iframe className='col-lg-6 p-0'
                    src={pdf} width="100%" height="600" title="pdf document"></iframe>
            </div>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer>
        </div>
    )
}