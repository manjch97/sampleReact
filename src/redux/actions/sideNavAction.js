import * as types from '../constants/actionTypes'
import {Customer as customerApi, Global as globalApi} from '../../services/Api'; 

export const getCustomerSideVideosAction = () => async (dispatch, getState) => {
    let videos = null;
    try{
        videos = await customerApi.getCustomerVideos();
        dispatch({ type: types.SIDE_CUSTOMER_VIDEOS, payload: videos, loading : false});
    }catch(err){
        console.log(err);
    }
    return videos;
}

export const getCustomerSchedulesAction = () => async (dispatch, getState) => {
    let schedules = null;
    try{
        schedules = await customerApi.getCustomerSchedules();
        dispatch({ type: types.SIDE_CUSTOMER_SCHEDULE, payload: schedules, loading : false});
    }catch(err){
        console.log(err);
    }
    
    return schedules;
}

export const getCustomerActivePeopleAction = () => async (dispatch, getState) => {
    let activePeople = null;
    try{
        activePeople = await globalApi.getActivePeople();
        dispatch({ type: types.SIDE_ACTIVE_PEOPLE, payload: activePeople, loading : false});
    }catch(err){
        console.log(err);
    }
    
    return activePeople;
}