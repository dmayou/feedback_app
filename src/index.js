import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import ratingInput from './reducers/ratingReducer';
import currentPage from './reducers/currentPageReducer';
import feedbackSubmission from './reducers/feedbackSubmissionReducer';
import feedbackList from './reducers/feedbackListReducer';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = createStore(
    combineReducers({
        ratingInput,
        currentPage,
        feedbackSubmission,
        feedbackList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
