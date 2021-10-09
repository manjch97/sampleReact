import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../store/utility';

const authInitialState = {
  localUser: undefined
}

const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_LOCAL:
    case actionTypes.REGISTER_LOCAL: return updateObject( state, {localUser: action.payload} );
    case actionTypes.LOGOUT_LOCAL: return updateObject( state, {localUser: undefined} );
    default: return state;
  }  
};

export default reducer;