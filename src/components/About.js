import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <div>
            <h1 className='d-flex justify-content-center text-center col-md-2 abouth1 mt-5'>Little About Me</h1>
            <p className='paragraph col-md-6 '>I currently work for Patriot Fire Protection Inc. This company specializes
                in building fire sprinkler systems
                for residential and commercial buildings. My tasks consist of deciphering blueprints and listing
                materials required for construction. Once the material is listed and the pipe is ready for fabrication,
                I will then send the charge outs to accounting to be processed and billed to the job. Then the listing
                will be released to the annex for picking material and paperwork sent to the shop for further
                fabrication.
                <br /><br />
                I have many hobbies and passions. The most important hobby/passion I have is to be self-sustaining and
                learn survival skills. I like to grow, fish, and hunt for my own food. I also have a good knowledge of
                bushcraft and making shelters. I really enjoy being in the woods and keeping a good knowledge of how our
                ancestors survived gives us a greater appreciation of today's world. On the flip side of things, I also
                like keeping my mind sharp. Learning new skills and techniques. Finding better and faster ways to
                complete a task. Learning how different types of food affect the body. Gardening and food preservation.
                My most recent interest and growing passion is complex coding. I was introduced to coding at my current
                job. I spend many hours on Google spreadsheets making forms, scripting, and implementing web design
                techniques to help the company stay organized. Making tools that have never been made before really
                intrigued me. I found I enjoy the coding aspect so much now I'm pursuing a career in it. My dream is to
                become a software engineer for a robotics company. Below are a few projects I have completed so far.
                There will be more projects coming as my knowledge increases.
            </p>
            <footer className="fixed-bottom">
                <div className='text-center icon'>
                    <a href='https://github.com/PatL8822' target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </footer >
        </div>
    )
}
