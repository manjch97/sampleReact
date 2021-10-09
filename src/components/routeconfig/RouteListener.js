import { useLocation, withRouter } from "react-router-dom";
import React from "react";
import {toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import {firePageViewEvent} from './../../helper/GTMHelper'
import { routeChangeAction } from "../../redux/actions/routeAction";
import { getCurrentLocation } from "../../services/AuthService";
const RouteListener = () =>{
  const location = useLocation();
  const currentLoggedinUser = useSelector(
    state => state.auth.user
  );
  const dispatch = useDispatch();
  React.useEffect(async () => {
    toast.dismiss();
      if(getCurrentLocation() === location.pathname){
        return;
      }
      console.log("Path Changes",location.pathname);
      await routeChangeAction({path:location.pathname})(dispatch);
      firePageViewEvent(currentLoggedinUser,location.pathname);
      window.scrollTo(0,0)
  }, [location.pathname]);
  return null;
}

export default RouteListener;