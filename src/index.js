import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const storeInstance = createStore(
    () => {
        console.log('In reducer');
    },
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
