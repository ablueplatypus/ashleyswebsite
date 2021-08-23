import { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Posts } from "./pages/posts";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <div>
    <Router>
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
                <Link to="/">
                <span className='navbar-brand page-scroll' href='#page-top'>
                  Ashley Travel 🏔 🏖 🏝
                </span>{' '}
                </Link>
              </div>

              <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className='nav navbar-nav navbar-right'>
                
                  <li>
                  <Link to="/#about">  
                      About
                    </Link>
                  </li>

                  <li>
                  <Link to="/#services"> 
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/#portfolio">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/posts" replace>Posts</Link>
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
  
       <Switch>
        <Route exact path="/">
          <Header data={landingPageData.Header} />
          <About data={landingPageData.About} />
          <Services data={landingPageData.Services} />
          <Gallery />
          <Contact data={landingPageData.Contact} />
        </Route>
        
        <Route exact path="/posts">
            <Posts/>
            <Contact data={landingPageData.Contact} />
        </Route>
        </Switch>
     
     </Router>
    </div> 
  );
};

export default App;
