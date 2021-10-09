import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../store/utility';

const authInitialState = {
  user: undefined,
  loginStatus: false
}

const reducer = (state = authInitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return updateObject(
        state, { user: action.payload, loginStatus: true }
      );
    case actionTypes.REGISTER:
      return updateObject(
        state, { user: action.payload, loginStatus: false }
      );
    case actionTypes.LOGOUT:
      return updateObject(
        state, { user: undefined, loginStatus: false }
      );
    case actionTypes.AVATAR_UPDATE:
      const newState = { ...state };
      if(newState.user){
        newState.user.avatarUrl = action.payload.avatarUrl
      }else{
        newState.user = {avatarUrl:action.payload.avatarUrl}
      }
      return updateObject(
        state, newState
      );
    default: return state;
  }
};

export default reducer;