import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteConfig from "./components/routeconfig/RouteConfig";
import 'react-toastify/dist/ReactToastify.css';
import {initializeGTM} from './helper/GTMHelper';
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from "./error-handling/ErrorFallback";
import CookieCompliance from "./components/common/cookie/CookieCompliance";
import SessionHelper from "./components/common/session/SessionHelper"

initializeGTM(); // Init GTM
const App = () => {  
    return (
      <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Fragment>
        <RouteConfig/>
        {
          !window.cordova && 
          <CookieCompliance/>
        }
      </React.Fragment>
      </ErrorBoundary>
    );  
}
export default App
