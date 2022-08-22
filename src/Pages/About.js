import React from 'react'
import { Abo } from './about.styled'
import about from './assets/util/about.jpg'

export default function About() {

  document.querySelector('title').innerText = 'About | Dr Naidoo'
  return (
    <div>
      <Abo>
        <h1>Dr Naidoo Dental Practice</h1><br />
      <div className="intro">
        <img src={about} alt="" />
      </div>
      <div className="about">
        <p><strong> Dr Zahid Naidoo </strong> obtained Bachelors of Surgical Dentistry at
          university of Pretoria and did his residency at Dr Goerge Mukhari
          Hospital. He has <strong> 10 years of experience </strong> in Dentistry and his private
          Practice has been here for 5 years. He has helped an estimate of <strong> 400 clients </strong>
          and perfomed <strong> 235 surgeries </strong>and with the quality of his service it is his
          desire to help more clients.
        </p>
      </div>
      </Abo>
    </div>
  )
}
