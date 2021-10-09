
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth'
import authlocal from './authlocal'
import sidenav from './sidenav'
import cookieconsent from './cookieconsent'
import routechange from './routechange'
export default combineReducers({
  auth,
  authlocal,
  sidenav,
  cookieconsent,
  routechange,
  router: routerReducer
});