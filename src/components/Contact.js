import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function contact() {
    return (
        <div>
            <h1 className='abouth1 text-center'>Contact Me</h1>
            <div className='form-group d-flex justify-content-around FormContainer'>
                <form>
                    <div className="form-group row">
                        <div className="col-md">
                            <input type="text" className="form-control text-center" placeholder="First name" name='FirstName' />
                        </div>
                        <div className="col-md">
                            <input type="text" className="form-control text-center" placeholder="Last name" name='LastName' />
                        </div>
                    </div>
                    <div className="form-group col-md">
                        <label for="Email">Email</label>
                        <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" name='userEmail' />
                        <small id="emailHelp" className="form-text text-muted">I will not share your email.</small>
                    </div>
                    <div className="form-group col-md">
                        <label for="exampleInputPassword1">Subject</label>
                        <input type="text" className="form-control text-center" id="exampleInputPassword1" placeholder="Subject" name='Subject' />
                    </div>
                    <div className="form-group col-md">
                        <textarea name='message' class="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-dark">Send</button>
                    </div>
                </form>
            </div>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822'><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer >
        </div>
    )
}
