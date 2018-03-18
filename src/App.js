import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import './App.scss';

// Components
import Home from './components/pages/HomeComponent';
import Work from './components/pages/WorkComponent';

// Work Pages
// These will be turned into one dynamic template
import Yt from './components/pages/work/yt/YtWorkComponent';

import Footer from './components/molecules/footer/FooterComponent';
import Header from './components/molecules/header/HeaderComponent';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Router>
            <React.Fragment>
              <Header></Header>

              <main>
                <Route path="/" exact component={Home} />
                <Route path="/work" exact component={Work} />
                <Route path="/work/young-talent" component={Yt} />
                <Route path="/macgregor-smith" component={Yt} />
                <Route path="/control-tech" component={Yt} />
              </main>
              
              <Footer></Footer> 
            </React.Fragment>
          </Router> 
      </React.Fragment>
    );
  }
}

export default App;

