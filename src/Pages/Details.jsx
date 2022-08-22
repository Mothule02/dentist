import { Det } from './details.styled'
import React from 'react'
import { useParams } from 'react-router-dom'
import details from '../Dental.json'


export default function Details() {
  const {name} = useParams()
  const title = name.split('-').join(' ')
  document.querySelector('title').innerText = `${title} | ${details[name].head}`
  return (
    <div>
      <Det>
       <h1>{name}</h1>
       <h2>{details[name].head}</h2>
       <div className="desc">
        <p>{details[name].description}</p>
       </div>
       <div className="recommended">
        <h2>{details[name].recommended.head}</h2>
        <h4 className="intro">{details[name].recommended.intro}</h4>
        <div className="points">
          <ul>
            {details[name].recommended.points.map((point, i)=>{
              return <li key={i}>{point}</li>

            })}
          </ul>
        </div>
        </div>
       <div className="benefits">
        <h2>{details[name].benefits.head}</h2>
        <h4 className="intro">{details[name].benefits.intro}</h4>
        <div className="points">
          <ul>
            {details[name].benefits.points.map((point, i)=>{
              return <li key={i}>{point}</li>

            })}
          </ul>
        </div>
       </div>
       <div className="risks">
        <h2>{details[name].risks.head}</h2>
        <h4 className="intro">{details[name].risks.intro}</h4>
        <div className="points">
          <ul>
            {details[name].risks.points.map((point, i)=>{
              return <li key={i}>{point}</li>

            })}
          </ul>
        </div>
       </div>
       <div className="aftercare">
        <h2>{details[name].aftercare.head}</h2>
        <h4 className="intro">{details[name].aftercare.intro}</h4>
        <div className="points">
          <ul>
            {details[name].aftercare.points.map((point, i)=>{
              return <li key={i}>{point}</li>

            })}
          </ul>
        </div>
       </div>
      </Det>
    </div>
  )
}
