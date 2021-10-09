import * as actionTypes from '../constants/actionTypes';
import { updateObject } from '../store/utility';

const sideNavInitialState = {
    videos: {
        loading: true,
        data: []
    },
    schedule:{
        loading:true,
        data:[]
      },
    activePeople:{
        loading:true,
        data:[]
    }
}

const reducer = (state = sideNavInitialState, action) => {
    switch (action.type) {           
        case actionTypes.SIDE_CUSTOMER_VIDEOS:
            return updateObject(
                state, { videos: { data: action.payload?action.payload:[], loading: action.loading } }
            );
        case actionTypes.CLEAR_SIDE_CUSTOMER_VIDEOS:
            return updateObject(
                state, { videos: { data: [], loading: action.loading } }
            );
        
        case actionTypes.SIDE_CUSTOMER_SCHEDULE:
            return updateObject(
                state, { schedule: { data: action.payload?action.payload:[], loading: action.loading } }
            );
        case actionTypes.CLEAR_SIDE_CUSTOMER_SCHEDULE:
            return updateObject(
                state, { schedule: { data: [], loading: action.loading } }
            );

        case actionTypes.SIDE_ACTIVE_PEOPLE:
            return updateObject(
                state, { activePeople: { data: action.payload?action.payload:[], loading: action.loading } }
            );
        case actionTypes.CLEAR_SIDE_ACTIVE_PEOPLE:
            return updateObject(
                state, { activePeople: { data: [], loading: action.loading } }
            );

        default: return state;
    }
};

export default reducer;