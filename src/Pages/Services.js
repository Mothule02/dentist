import React from 'react'
import oral from './assets/icons8-tooth-whitening-64.png'
import braces from './assets/icons8-dental-braces-64.png'
import filling from './assets/icons8-filling-64.png'
import extraction from './assets/icons8-tooth-extraction-64.png'
import { Sev } from './services.styled'
import {Link} from 'react-router-dom'
import att from './assets/util/sev.gif'

export default function Services() {

  document.querySelector('title').innerText = 'Services | Dr Naidoo'
  return (
    <div>
      <Sev>
      <div className="att">
        <img src={att} alt="" />
      </div>
      <div className="guide">
        <div>
          <div>If you want to find more about your desired service,<br />
            the page will explain What to expect during procedure,<br />
             Disadvantages, Advantages, Benefits and After-Care
            
            
          </div>
        </div>
      </div>
      <div className="services">
        <div className="card">
            <div className='card-head'>
               <h1>Oral Hygiene</h1>
               <img width={50} height={50} src={oral} alt="Oral hygiene" />
            </div>
            <div className="description">
               <p>Tooth whitening or tooth bleaching is the process of lightening the
                color of human teeth. Whitening is often desirable when teeth become 
                yellowed over time for a number of reasons.</p>
            </div>
            <div className="more-info">
              <Link className='ext-a' to='/services/teeth-whitening'>Read More...</Link>
            </div>  
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Tooth Extraction</h1>
               <img width={50} height={50} src={extraction} alt="Oral hygiene" />
            </div>
            <div className="description">
              <p>A tooth extraction is a dental procedure during which
                 your tooth is completely removed from its socket. Sometimes,
                people refer to this as `ulling` a tooth.</p>
            </div>  
            <div className="more-info">
              <Link className='ext-a' to='/services/tooth-extraction'>Read More...</Link>
            </div>
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Dental Braces</h1>
               <img width={50} height={50} src={braces} alt="Oral hygiene" />
            </div>
            <div className="description">
              <p>Braces are dental tools that help correct problems with your 
                teeth, like crowding, crooked teeth, or teeth that are out of 
                alignment. Many people get braces when they’re teenagers, but 
                adults get them too.</p>
            </div>  
            <div className="more-info">
              <Link className='ext-a' to='/services/dental-braces'>Read More...</Link>
            </div>
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Tooth Fillings</h1>
               <img width={50} height={50} src={filling} alt="Oral hygiene" />
            </div>
            <div className="description">
              <p>Dental fillings are single or combinations of metals, plastics, glass 
                used to repair or restore teeth. One of the most popular 
                uses of fillings is to “fill” an area of tooth that your dentist has removed 
                due to decay – “a cavity.”</p>
            </div> 
            <div className="more-info">
              <Link className='ext-a' to='/services/dental-fillings'>Read More...</Link>
            </div> 
        </div>
        </div>
        </Sev>
    </div>
  )
}
