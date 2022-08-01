import React from 'react';
import './first_page.css';

export default function FirstPage() {
  return (
    <div className='first_page'>
        <div className='nav_sec'>
          <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <a className="navbar-brand text-white font-bold" href="/">Omega</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-3 mr-2 mb-lg-0">
                    <li className="nav-item dropdown mr-4">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#f04037"}}>
                          Demos
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="/">Action</a></li>
                          <li><a className="dropdown-item" href="/">Another action</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link mr-4 text-white" aria-current="page" href="/">Pages</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link text-white" href="/">Support</a>
                      </li>
                      <li className='nav-item'>
                        <button className='nav-link px-10 ml-4 text-white' style={{backgroundColor: "#f04037",padding:"12px",borderRadius:"5px"}}>Get Started</button>
                      </li>
                      
                      
                    </ul>
                    
                  </div>
                </div>
              </nav>

                  
              
        </div>

        <div className='container body_sec'>
            <div className = "body_sec_left mt-10 ml-0">
                <h1 className='big_text font-bold text-5xl mt-24 text-white'>Get your next <br/>landing pages. </h1>
                <h1 className='small_text text-white text-sm mt-6'>
                  Create custom landing pages with Omega that convert <br/>more visitors than any website.With lots of unique blocks, <br/>
                  you can easily build a page without coding.

                </h1>
                <button className='mt-5' style={{backgroundColor: "#f04037",padding:"12px",borderRadius:"5px"}}>Start 14 Days free trial</button>
                <h1 className='mt-3 text-white'>No credit required</h1>
            </div>
            <div className='body_sec_right mt-6'>
              <img src='https://cdn.zeplin.io/6046e8c08dc5a8130f8b8a34/assets/89DF6E05-3B21-4878-BCC0-7921787B9138.png' />
            </div>
    
        </div>
        

    </div>
    
  )
}
