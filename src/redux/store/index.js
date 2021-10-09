
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { saveToLocalStorage,loadFromLocalStorage } from './localStorage'
import throttle from 'lodash/throttle'

const middleWare = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleWare.push(createLogger());
}

const store = process.env.NODE_ENV != 'production'
? createStore(rootReducer,loadFromLocalStorage(),composeWithDevTools(applyMiddleware(...middleWare)))
: createStore(rootReducer,loadFromLocalStorage(),compose(applyMiddleware(...middleWare)));

store.subscribe(
  throttle(() => { 
      saveToLocalStorage({
          authlocal: store.getState().authlocal,
          cookieconsent: store.getState().cookieconsent
        }
      );
  },1000));
export default store;