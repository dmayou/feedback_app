import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Progress from '../Progress/Progress';
import RatingCard from '../RatingCard/RatingCard';
import CommentCard from '../CommentCard/CommentCard';
import SummarySubmit from '../SummarySubmit/SummarySubmit';
import axios from 'axios';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    const formText = {
      p1: {
        question: 'How are you feeling today?',
        lowRange: 'I\'m very stressed.',
        highRange: 'I\'m feeling great!',
        nextPage: '/p2'
      },
      p2: {
        question: 'How well do you understand today\'s material?',
        lowRange: 'I\'m totally lost.',
        highRange: 'I\'ve got this!',
        nextPage: '/p3'
      },
      p3: {
        question: 'Did you feel supported by Prime staff today?',
        lowRange: 'I feel abandoned.',
        highRange: 'I feel supported!',
        nextPage: '/comment'
      }
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Progress step={this.props.store.currentPage}/>
          <Route path="/" exact render={(props)=><RatingCard {...props} text={formText.p1}/>} />
          <Route path="/p2" render={(props)=><RatingCard {...props} text={formText.p2}/>} />
          <Route path="/p3" render={(props) => <RatingCard {...props} text={formText.p3} />} />
          <Route path="/comment" component={CommentCard} />
          {/* <CommentCard /> */}
          <SummarySubmit />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
  return {store}
};

export default connect(mapStateToProps)(App);