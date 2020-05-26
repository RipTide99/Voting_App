import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const DEFAULT_STATE={
    error:{message:null}
};
export const store=createStore(
rootReducer,
DEFAULT_STATE,
compose(
    applyMiddleware(thunk),
    //window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
)
);