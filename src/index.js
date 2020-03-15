import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/rootReducer'
import rootSagas from './sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware();
const store= createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas)

ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
