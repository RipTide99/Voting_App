import React, { Fragment } from 'react'

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import decode from 'jwt-decode';
import { store } from '../store';
//  import { setToken } from '../services/api';
//  import { setCurrentUser } from '../store/actions';
//  import { addError } from '../store/actions/error';
import {setCurrentUser,addError,setToken} from '../store/actions';
//import {setToken} from '../store/actions';
import RouteViews from './RouteViews';
import Navbar from './NavBar';
if(localStorage.jwtToken){
    setToken(localStorage.jwtToken);
    try{
        store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
    }catch(err){
        store.dispatch(setCurrentUser({}));
        store.dispatch(addError(err));
    }
}

const App=()=> <Provider store={store}>
    <Router>
        <Fragment>    
    <Navbar/>
    <RouteViews/>
    </Fragment>
    </Router>
</Provider>



export default App;