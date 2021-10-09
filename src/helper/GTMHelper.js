import TagManager from 'react-gtm-module';
import { Cookies } from "react-cookie-consent";
import { COOKIE_CONSENT_NAME } from "../constants/CommonConstants";
import { useSelector } from 'react-redux';
const AnalyticsPayload = require('./../constants/AnalyticsPayload.json');
import {getCookieConsent} from './../services/AuthService';
export const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
    auth: process.env.REACT_APP_GTM_AUTH,
    preview: process.env.REACT_APP_GTM_PREVIEW,
}

export const pageViewData = {
    dataLayer: {
        Event: 'PageView',
        userId: '',
        pagePath: ''
    }
}

export const firePageViewEvent = (userInfo, path) => {

    if(window.cordova){
        let cookieConsentFlag = getCookieConsent();
        if(!cookieConsentFlag){
            return;
        }
        if(cookieConsentFlag === "false"){
            return;
        }
    }else{
        const cookie = Cookies.get(COOKIE_CONSENT_NAME);
        if (cookie === undefined || cookie === "false") {
            return;
        }
    }
    try {
        const dataLayerObj = { ...pageViewData };
        dataLayerObj.dataLayer.userId = userInfo?.id ? userInfo.id : 'Guest User'
        dataLayerObj.dataLayer.pagePath = path;
        pushDataLayer(dataLayerObj.dataLayer);
    } catch (err) {
        console.log("Error while sending dl");
    }

}

export const fireClickEvent = (userInfo, path, eventName, eventData) => {
    
    if(window.cordova){
        let cookieConsentFlag = getCookieConsent();
        if(!cookieConsentFlag){
            return;
        }
        if(cookieConsentFlag === "false"){
            return;
        }
    }else{
        const cookie = Cookies.get(COOKIE_CONSENT_NAME);
        if (cookie === undefined || cookie === "false") {
            return;
        }
    }

    try {
        let dataLayerObject = null;
        console.log(eventName);
        if (AnalyticsPayload[eventName]) {
            dataLayerObject = { ...AnalyticsPayload[eventName] };
        } else {
            return;
        }
        dataLayerObject.userId = userInfo?.id ? userInfo.id : 'Guest User'
        dataLayerObject.pagePath = path;
        dataLayerObject.eventData = eventData;
        pushDataLayer(dataLayerObject);
    } catch (err) {
        console.log("Error while sending dl");
    }

}

export const initializeGTM = () => {
    TagManager.initialize(tagManagerArgs)
}

const pushDataLayer = (dataObject) => {
    window.dataLayer.push(dataObject);
    //TagManager.dataLayer(dataObject)
}

