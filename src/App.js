import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


import './App.css';

// Components
import Home from './components/pages/HomeComponent';
import Work from './components/pages/WorkComponent';

// Work Pages
// These will be turned into one dynamic template
import YoungTalent from './components/pages/work/yt/YtComponent';
import Power2Max from './components/pages/work/Power2Max/Power2MaxComponent';
import PlaySportsGroup from './components/pages/work/PlaySportsGroup/PlaySportsGroupComponent';

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
                <Route path="/work/young-talent" component={YoungTalent} />
                <Route path="/work/play-sports-network" component={PlaySportsGroup} />
                <Route path="/work/power2max" component={Power2Max} />
              </main>
              
              <Footer></Footer> 
            </React.Fragment>
          </Router> 
      </React.Fragment>
    );
  }
}

export default App;

