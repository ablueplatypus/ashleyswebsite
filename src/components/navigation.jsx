import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
   { /* <Router>
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Ashley Travel 🏔 🏖 🏝
          </a>{' '}
        </div>

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> 
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a> 
            </li>

            <li>
              <a href='#services' className='page-scroll'>
                Portfolio
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              {/* <a href='#posts' className='page-scroll'>
                Posts
              </a> 
              <Link to="/posts">Posts</Link>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> 
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </Router> 

          */}
  )
}
