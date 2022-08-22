import React from 'react'
import { Con } from './contact.styled'
import tel from './assets/contact/telephone.png'
import email from './assets/contact/email.png'

export default function Contact() {

  document.querySelector('title').innerText = 'Contact | Dr Naidoo'
  return (
    <div>
      <Con>
      <h3>We will answer you within 24 hours</h3>
      <div className="form">
      <div className="inputs">
        <div>
        <div>
          <label htmlFor="">Firstname</label><br />
          <input type="text" name=""  />
        </div>
        <div>
          <label htmlFor="">Lastname</label><br />
          <input type="text" name=""  />
        </div>
        <div>
          <label htmlFor="">Email</label><br />
          <input type="email" name=""  />
        </div>
        </div>
        <div>
        <div>
          <label htmlFor="">Phone</label><br />
          <input type='phone' name=""  />
        </div>
        <div>
          <label htmlFor="">How can we help you?</label><br />
          <textarea name="" cols="23" rows="5"></textarea>
        </div>
        </div>
        
        
      </div>
      </div>
      <div className="submit">
          <button>Submit</button>
       </div>
       <div className="location">

        </div>
       <div className="reachable">
        <div>
          <img src={tel} alt="" />
          <a  href="tel:+27678525100"> 067 852 5100</a>
        </div>
        <div>
          <img src={email} alt="" />
          <a  href="mailto:"> info@Naidoo.co.za</a>
        </div>
       </div>
       <div className="con-end">
       <div className="address">
        
        <div className="physical-add">
          <h3>Address</h3>
          Near Collanade Mall <br />
          1023 Verwood Avenue <br />
          Pretoria <br />
          Montana <br />
          7045
        </div>
        <div className="busines-hr">
          <h3>Busines Hours: </h3> <br />
          Mon-Thu = 10:00 am - 05:00 pm <br />
          Fri-Sat = 10:00 am - 03:00 pm <br />
          Sun = closed 
        </div>
        </div>
       </div>
      </Con>
    </div>
  )
}
