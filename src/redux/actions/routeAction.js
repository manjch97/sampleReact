import * as types from '../constants/actionTypes'

export const routeChangeAction = (route) => async (dispatch, getState) => {
    try{
        dispatch({ type: types.ROUTE_CURRENT_LOCATION, payload: route});
    }catch(err){
        console.log(err);
    }
}