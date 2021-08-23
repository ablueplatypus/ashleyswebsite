import { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Contact } from "./components/contact";
import { Posts } from "./pages/posts.jsx";
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
        <div>
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
                <a className='navbar-brand page-scroll' href='#page-top'>
                  Ashley Travel 🏔 🏖 🏝
                </a>{' '}
                </Link>
              </div>

              <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                <ul className='nav navbar-nav navbar-right'>
                
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
                    <Link to="/posts">Posts</Link>
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
        </div>
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
        </Route>
        </Switch>
     
     </Router>
    </div> 
  );
};

export default App;
