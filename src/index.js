import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import Counter from './components/Counter'
import counter from './redux/reducers'
import logger from 'redux-logger'


const store = createStore(
	counter,
	applyMiddleware(logger)
);
const rootE1 = document.getElementById('root');


const render = () => ReactDOM.render(
	<Counter 
		value={store.getState()}
		onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
		onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
	/>,
	rootE1
)

render()
store.subscribe(render)