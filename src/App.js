import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './App.scss';

// Components
import Home from './components/pages/HomeComponent';
import Work from './components/pages/WorkComponent';
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
                <Route path="/" exact={true} component={Home} />
                <Route path="/work" component={Work} />
              </main>
            </React.Fragment>
          </Router> 
          <Footer></Footer> 
      </React.Fragment>
    );
  }
}

export default App;

