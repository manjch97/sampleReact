import { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { useDispatch, useSelector } from "react-redux";
import { COOKIE_CONSENT_NAME } from "../../../constants/CommonConstants";
import { cookieConsentAction } from "../../../redux/actions/cookieConsentAction";
import { Account } from "../../../services/Api";
import { Modal, Row, Col } from "react-bootstrap";
import FocusLock from "react-focus-lock";
import { GetSpinner } from "../../../helper/CommonHelper";

const CookieCompliance = () => {

    const dispatch = useDispatch();
    const cookieConsentState = useSelector(
        state => state.cookieconsent
    );
    const [privacyState,setPrivacyState] = useState ({
        showPrivacyPopup: false,
        privacyContent: '',
        loading: true,
        dataLoaded: false,
    });

    const handlePrivacyPopup= async ()=> {
        if(!privacyState.dataLoaded){
            setPrivacyState({...privacyState, loading: true, showPrivacyPopup: true})
            const response = await Account.getPrivacyPolicy();
            console.log(privacyState)
            if(response){
                setPrivacyState({...privacyState,dataLoaded:true, loading: false,showPrivacyPopup: true, privacyContent: response})
            }else{
                setPrivacyState({...privacyState,dataLoaded:false, loading: false, showPrivacyPopup: true, privacyContent: 'Not able to load Privacy Content'})
            }
        }
    }
    const handleClose = () => {
        setPrivacyState({...privacyState,dataLoaded:false, loading: false, showPrivacyPopup: false})

      }

    let cookieConsentFlag = Cookies.e3ExpoConsentCookie;

    if(window.cordova){
        cookieConsentFlag = cookieConsentState?.cookieConsent;
    }
    let cookieConsent = null;
    if(!cookieConsentFlag){
      cookieConsent = (
               <div> 
                <CookieConsent cookieName={COOKIE_CONSENT_NAME}
                                onAccept={() => {
                                    cookieConsentAction({cookieConsent:true})(dispatch);
                                }}
                                buttonText="Accept" 
                                enableDeclineButton
                                declineButtonText="Decline"
                                onDecline={() => {
                                    cookieConsentAction({cookieConsent:false})(dispatch);
                                }}
                                //debug={true}
                                contentClasses="cookie_content"
                                buttonWrapperClasses="cookie_button_wrapper"
                                flipButtons
                                ariaAcceptLabel = "Accept cookies"
                                ariaDeclineLabel = "Decline cookies">
                    <div className="cookie_desc">This site uses cookies and similar technologies to enable website functionality, understand our site's performance, provide social media features, and customize site content.</div>
                </CookieConsent>
                <Modal show={privacyState.showPrivacyPopup} onHide={handleClose} size="md" keyboard={true} centered animation={false}>
                    <Col xs={12} className="py-2 mb-3">
                     <FocusLock>
                        <Modal.Header className="font-weight-light border-0" closeButton />
                            <Row className="text-center justify-content-center align-items-center m-auto ">
                                <h4 className="text-xl text-uppercase py-3">
                                    <span className="primaryColor">PRIVACY</span> POLICY
                                </h4>
                            </Row>
                            <Row>
                                <Col className="termScroll" tabIndex="1">
                                    <span>
                                        {!privacyState.privacyContent && <div className="d-flex justify-content-center align-items-center h-100"><GetSpinner /></div>}
                                        <div className="privacyData_container" dangerouslySetInnerHTML={{ __html: privacyState.privacyContent }} />
                                     </span>
                                </Col>
                            </Row>
                        </FocusLock>
                    </Col>
                </Modal>
                </div>
        );
      }
    
    return cookieConsent;
};

export default CookieCompliance;