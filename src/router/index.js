import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Pos from '../views/Pos';
import About from '../views/About';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Pos}/>
          <Route exact path="/about" component={About} />
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;