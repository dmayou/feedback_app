import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Progress from '../Progress/Progress';
import RatingCard from '../RatingCard/RatingCard';
import SummarySubmit from '../SummarySubmit/SummarySubmit';
import axios from 'axios';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Progress />
          <Route path="/test" exact component={RatingCard} />
          <RatingCard />
          <SummarySubmit />
        </div>
      </Router>
    );
  }
}

export default App;
