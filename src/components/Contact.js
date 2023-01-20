import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function contact() {
    return (
        <div>
            <h1 className='abouth1 d-flex justify-content-center text-center col-md-2 mt-5'>Contact Me</h1>
            <div className='form-group d-flex justify-content-around FormContainer row col-md-3'>
                <form>
                    <div className="form-group row">
                        <div className="col-md">
                            <input type="text" className="form-control text-center border-dark" placeholder="First name" name='FirstName' required={true} />
                        </div>
                        <div className="col-md">
                            <input type="text" className="form-control text-center border-dark" placeholder="Last name" name='LastName' required={true} />
                        </div>
                    </div>
                    <div className="form-group col-md">
                        <input type="email" className="form-control text-center border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" name='userEmail' required={true} />
                        <small id="emailHelp" className="form-text text-muted">I will not share your email.</small>
                    </div>
                    <div className="form-group col-md">
                        <input type="text" className="form-control text-center border-dark" id="exampleInputPassword1" placeholder="Subject" name='Subject' required={true} />
                    </div>
                    <div className="form-group col-md">
                        <textarea name='message' className="form-control border-dark" aria-label="With textarea" required={true} placeholder='Message Here'></textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer >
        </div>
    )
}
