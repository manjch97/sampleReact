import { toast } from 'react-toastify';
import { Offline, Online } from "react-detect-offline";
import React from "react";

const toastOptions = {
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
}

export const displayToastError = (message, toastId) =>{
    toast.error(message, {
        ...toastOptions,
        toastId: "error_id"
      });
}

export const ErrorMessage = (props) =>{
    console.log("ErrorMessage props",props);
    
    return (
        <React.Fragment>
            <Offline polling={{url:process.env.REACT_APP_NETWORK_CHECK_URL}}>Please check the Network connection...</Offline>
            {props.errorMessage}
        </React.Fragment>
    )

}

export const displayToastErrorWithOfflineMode = (message, toastId) =>{
    toast.error(<ErrorMessage errorMessage={message}/>, {
        ...toastOptions,
        toastId: "error_id"
      });
}

export const displayToastInfo = (message, toastId) =>{
    toast.info(message, {
        ...toastOptions,
        toastId: "info_id"
      });
}

export const displayToastSuccess = (message, toastId) =>{
    toast.success(message, {
        ...toastOptions,
        toastId: "success_id"
      });
}

export const displayToasttoastWarning = (message, toastId) =>{
    toast.warning(message, {
        ...toastOptions,
        toastId: "warning_id"
      });
}
