import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Portfolio() {
    return (
        <div>
            <div className='row d-flex justify-content-around col-lg-6 cardContainer1 mt-5'>
                <div className='card col-md-3 h-50'>
                    <img className="card-img-top" src='images/trivia.jpg' alt="image Trivia" />
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">Trivia</h5>
                        <h6 className='mb-3'>
                            <a href='https://github.com/samlee088/Big-Bad-Brain-Blender-Buster' className='githubLink' target="_blank"><i>Github Repo</i></a>
                        </h6>
                        <a href="https://big-bad-brain-blender-buster.herokuapp.com/" className="btn btn-dark text-center" target="_blank" >Go here</a>
                    </div>
                </div>
                <div className='card col-md-3 h-50'>
                    <img className="card-img-top" src="images/event2.jpg" alt="Card image cap" />
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">See an Event?</h5>
                        <h6 className='mb-3'>
                            <a href='https://github.com/abrowncownow/event-booker' className='githubLink' target="_blank"><i>Github Repo</i></a>
                        </h6>
                        <a href="https://abrowncownow.github.io/event-booker/" className="btn btn-dark text-center" target="_blank">Go here</a>
                    </div>
                </div>
                <div className='card col-md-3 h-50'>
                    <img className="card-img-top" src="images/Thunder_lightning.jpg" alt="Card image cap" />
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">Weather App</h5>
                        <h6 className='mb-3'>
                            <a href='https://github.com/PatL8822/WeatheApp' className='githubLink' target="_blank"><i>Github Repo</i></a>
                        </h6>
                        <a href="https://patl8822.github.io/WeatheApp/" className="btn btn-dark text-center" target="_blank">Go here</a>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-around col-lg-6 cardContainer2">
                <div className='card col-md-3 h-50'>
                    <img className="card-img-top" src="images/running-in-woods.jpg" alt="Card image cap" />
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">Fitness Tracker</h5>
                        <h6 className='mb-3'>
                            <a href='https://github.com/jesterb0206/fit-nuts' className='githubLink' target="_blank"><i>Github Repo</i></a>
                        </h6>
                        <a href="https://fit-nuts.herokuapp.com/" className="btn btn-dark text-center" target="_blank">Go here</a>
                    </div>
                </div>
                <div className='card col-md-3 h-50'>
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">RESERVED FOR FUTURE PROJECTS</h5>
                        <a href="#" className="btn btn-dark text-center">Go here</a>
                    </div>
                </div>
                <div className='card col-md-3 h-50'>
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body cardTitleAndBtn">
                        <h5 className="card-title">RESERVED FOR FUTURE PROJECTS</h5>
                        <a href="#" className="btn btn-dark text-center">Go here</a>
                    </div>
                </div>
            </div>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer >
        </div>
    )
}
