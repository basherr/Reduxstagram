import { compose, createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import data
import posts from './data/posts';
import comments from './data/comments';

// assign data to object
const defaultState = {
    posts, comments
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// hot reloading
if(module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextReducers = require('./reducers/index').default;
        store.replaceReducer(nextReducers);
    })
}

export default store;