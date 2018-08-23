import React, { Component, PropTypes} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

import { reducer } from "redux";

// import createSagaMiddleware from 'redux-saga';


// import { helloSaga } from './sagas';

import App from './components/app';

import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

import FilterableProductTable from './components/filterableProductTable';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


// create a redux store with our reducer above and middleware
// let store = createStore(
  // reducer,
  // compose(applyMiddleware(sagaMiddleware), reduxDevTools)
// );

// run the saga
// sagaMiddleware.run(watcherSaga);

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(helloSaga);

// const action = type => store.dispatch({type});

// create new component should produce some HTML
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// es6 syntax 
// take this component's generated HTMl and put it on the page (in the DOM)
		console.log(createStoreWithMiddleware(reducers).getState(),'-----initial store');


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/app" component={App} />
					<Route path="/posts/new" component={PostsNew} />
					<Route path="/posts/:id" component={PostsShow} />
					<Route path="/posts" component={PostsIndex} />
					<Route path="/" component={FilterableProductTable} />

				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
	, document.getElementsByClassName('container')[0]);



// import { createStore } from 'redux';
// function todosReducer (state=[], action){
// 	switch (action.type){
// 		case: 'Add_TODO':
// 			return state.concat(action.text);
// 		default:
// 			return state;
// 	}
// }
// const store = createStore(todosReducer, ['Use Redux']);

// store.dispatch({type:'Add_TODO',text:'Read the docs'});
// console.log(store.getState());



