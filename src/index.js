import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import commentInput from './reducers/commentReducer';
import ratingInput from './reducers/ratingReducer';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = createStore(
    combineReducers({
        commentInput,
        ratingInput
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
