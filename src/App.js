
import './App.css';
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import logo from './Pages/assets/icons8-tooth-cleaning-65.png'
import contact from './Pages/assets/contact/telephone.png'
import email from './Pages/assets/contact/email.png'


function App() {

  const [state, setState] = React.useState(window.innerWidth <= 550 ? true : false)
  
  function onClick() {
    state ? setState(false) : setState(true) 
    
  }
  function None() {
    if (window.innerWidth <= 550) {
      
      setTimeout(()=>{
        setState(true)
      },200)
    }
    
  }
  
  return (
    <div className="App">
      
      <header className="App-header">
        <div className='contact'>
            <div>
              <a href='tel:+27678525100'>
                {window.innerWidth <= 770 && '067 852 5100'}<img src={contact} alt="Phone" />
              </a>
            </div>
            <div>
              <a href="mailto:info@naidoo.co.za">
                {window.innerWidth <= 770 && 'info@naidoo.co.za'}<img src={email} alt="Email"/>
              </a>
            </div>
        </div>
        <div className="logo"><img src={logo} alt="Logo" /></div>
        
        <div style={{display:`${state ? 'none' : 'flex'}`}} className='header-links'>
        
          <NavLink className='a' to='' onFocus={None}>Home</NavLink>
          <NavLink className='a' to='services' onFocus={None}>Services</NavLink>
          <NavLink className='a' to='contact' onFocus={None}>Contact</NavLink>
          <NavLink className='a' to='about' onFocus={None}>About</NavLink>
        </div>
        
        <div className="lines" onClick={onClick}> 
          <div className={!state ? 'c-1' : undefined}> </div>
          <div className={!state ? 'c-2' : undefined}> </div>
          <div className={!state ? 'c-3' : undefined}> </div>
        </div>
      </header>
      
      <div className="App-content">
        
        <Outlet/>
      </div>
      <footer className="App-footer">
        <div className="f-s">
          <div>
          <h4>Contact Us</h4>
          <ul>
            <li><a href="tel:+27678525100">067 852 5100</a></li>
            <li><a href="mailto:info@Naidoo.co.za">info@Naidoo.co.za</a></li>
            
          </ul>
          </div>
          <div>
          <h4>About Us</h4>
          <ul>
            <li><Link className='a-footer' to='services'>Services</Link></li>
            <li><Link className='a-footer' to='contact'> Address </Link></li>
          </ul>
          </div>
        </div>
        <div className="copyright"> © Naidoo Dental Studio 2022</div>
      </footer>
    </div>
  );
}

export default App;
