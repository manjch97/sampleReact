import * as types from '../constants/actionTypes'

export const cookieConsentAction = (cookieConsent) => async (dispatch, getState) => {
    try{
        dispatch({ type: types.COOKIE_BANNER_CONSENT, payload: cookieConsent});
    }catch(err){
        console.log(err);
    }
}