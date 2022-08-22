import React from 'react'
import { Link } from 'react-router-dom'
import { Hme } from './home.styled'
import oral from './assets/icons8-tooth-whitening-64.png'
import braces from './assets/icons8-dental-braces-64.png'
import filling from './assets/icons8-filling-64.png'
import extraction from './assets/icons8-tooth-extraction-64.png'
import doc from './assets/util/doc.jpg'

export default function Home() {

  document.querySelector('title').innerText = 'Dr Naidoo | Dentist in Ga-rankuwa'
  return (
    <Hme>
    <div className='main'>
       <div className="intro">
        <div><p> Here at <strong> Dr Naidoo Dental Care </strong> we take pride in our work <br />
        ensuring that every <strong> Client </strong> walks away with a confident smile
        </p></div>
       
       </div>
       <div className="display">
         <div className="wrap">
         <img className='doc' src={doc} alt="docter" />
            <div className="desc">
               Dr Naidoo is based in Ga-rankuwa and with the help of his 
               wonderful team, they have been peforming wonderful dental
               surgeries for 6 years. They are confident that with the right 
               help everyone can <strong>smile with confidence</strong> 
            </div>
         </div>
       </div>
       <div className="services-half">
        <div className="card">
            <div className='card-head'>
               <h1>Oral Hygiene</h1>
               <img width={50} height={50} src={oral} alt="Oral hygiene" />
            </div>
            <div className="description">
               <p>Tooth whitening or tooth bleaching is the process of lightening the
                color of human teeth. Whitening is often desirable when teeth become 
                yellowed over time for a number of reasons, and can be achieved by changing 
                the intrinsic or extrinsic color of the tooth enamel.</p>
            </div>  
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Tooth Extraction</h1>
               <img width={50} height={50} src={extraction} alt="Oral hygiene" />
            </div>
            <div className="description">
               <p>
               A tooth extraction is a dental procedure during which your tooth is completely
                removed from its socket. Sometimes, people refer to this as `ulling` a tooth.
               </p>

            </div>  
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Dental Braces</h1>
               <img width={50} height={50} src={braces} alt="Oral hygiene" />
            </div>
            <div className="description">
               <p>Braces are dental tools that help correct problems with your teeth,
                  like crowding, crooked teeth, or teeth that are out of alignment. 
                  Many people get braces when they’re teenagers, but adults get 
                  them too. </p>
            </div>  
        </div>
        <div className="card">
            <div className='card-head'>
               <h1>Dental Filling</h1>
               <img width={50} height={50} src={filling} alt="Oral hygiene" />
            </div>
            <div className="description">
               <p>
               Dental fillings are single or combinations of metals, plastics,
               glass or other materials used to repair or restore teeth. One of
               the most popular uses of fillings is to “fill” an area of tooth that 
               your dentist has removed due to decay – “a cavity.” 
               </p>

            </div>  
        </div>
       </div>
       <div className="more-s"><Link className='a-s' to='services'>More...</Link></div>
       <div className="operating-hours">
        <div>
           <h3> Operating Hours: </h3> <br />

           Mon-Thu = 10:00 am - 05:00 pm <br />
           Fri-Sat = 10:00 am - 03:00 pm <br />
           Sun = closed 
        </div>
       </div>
       <div className="more-s"><Link className='a-s' to='contact'>Contact Us</Link></div>
    </div>
    </Hme>
  )
}
