import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../store/utility';

const initialState = {

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ROUTE_CURRENT_LOCATION: return updateObject( state, action.payload );
    default: return state;
  }  
};

export default reducer;