import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Progress from '../Progress/Progress';
import RatingCard from '../RatingCard/RatingCard';
import CommentCard from '../CommentCard/CommentCard';
import SummarySubmit from '../SummarySubmit/SummarySubmit';
import AdminView from '../AdminView/AdminView';

import 'typeface-roboto';
import './App.css';

class App extends Component {
  render() {
    const formText = {
      p1: {
        question: 'How are you feeling today?',
        lowRange: 'I\'m very stressed.',
        highRange: 'I\'m feeling great!',
        nextPage: '/form/p2',
        dataKey: 'feeling'
      },
      p2: {
        question: 'How well do you understand today\'s material?',
        lowRange: 'I\'m totally lost.',
        highRange: 'I\'ve got this!',
        nextPage: '/form/p3',
        dataKey: 'understanding'
      },
      p3: {
        question: 'Did you feel supported by Prime staff today?',
        lowRange: 'I feel abandoned.',
        highRange: 'I feel supported!',
        nextPage: '/form/comment',
        dataKey: 'support'
      }
    }
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/form" />} />
          <Route path="/" component={Header} />
          <br/>
          <Route path="/form" render={(props)=><Progress {...props} step={this.props.store.currentPage}/>} />
          <Route path="/form" exact render={(props)=><RatingCard {...props} text={formText.p1}/>} />
          <Route path="/form/p2" render={(props)=><RatingCard {...props} text={formText.p2}/>} />
          <Route path="/form/p3" render={(props) => <RatingCard {...props} text={formText.p3} />} />
          <Route path="/form/comment" component={CommentCard} />
          <Route path="/admin" component={AdminView} />
          <Route path="/form" component={SummarySubmit} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (store) => {
  return {store}
};

export default connect(mapStateToProps)(App);