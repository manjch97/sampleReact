
import * as types from '../constants/actionTypes'
import {Auth as authApi} from '../../services/Api'; 

export const loginAction = (payload) => async (dispatch, getState) => {
    let user = await authApi.login(payload.email, payload.password);
    console.log("******",dispatch);
    
    if(user){
        let localUser = {
                        prefix: user.prefix, 
                        email: user.email, 
                        firstname: user.firstname,
                        lastname: user.lastname,
                        middlename: user.middlename
                    };
        dispatch({ type: types.LOGIN, payload: user});
        dispatch({ type: types.LOGIN_LOCAL, payload: localUser});
    }
    return user;
}

export const signupAction = (payload) => async (dispatch, getState) => {
    let user = await authApi.register(payload);
    if(user){
        // Prepare local storage user
        let localUser = {
            prefix: user.prefix, 
            email: user.email, 
            firstname: user.firstname,
            lastname: user.lastname,
            middlename: user.middlename
        };
        dispatch({ type: types.REGISTER, payload: user});
        dispatch({ type: types.REGISTER_LOCAL, payload: localUser});
    }
    return user;
}

export const logoutAction = (payload) => async (dispatch, getState) => {
    dispatch({ type: types.LOGOUT, payload: {} });
}

export const userAvatarUpdateAction = (payload) => async (dispatch, getState) => {
    dispatch({ type: types.AVATAR_UPDATE, payload: payload });
}