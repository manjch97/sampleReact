import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { WebHeader } from "../../../../helper/CommonHelper";
import { Account, Customer } from "../../../../services/Api";
import {Col,Container,Row,Form, Card,Button} from "react-bootstrap";
import TermofService from "../../signup/Terms";
import { Scrollbars } from 'react-custom-scrollbars';
import Congradulations from "./Congradulations";
import { Redirect } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import './Setting.scss';

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
const mapDispatchToProps = (dispatch) => ({});

class Setting extends Component {
    state = {
        showCongratulations: false,
        redirect: "",
        settings: {
            email: [],
            notifications: []
        },
        isLoading: false,
        terms: { Agreed: false, readTermsOfServices: false, privacyPolicy: "", termsOfServices: "", errors: {} },
        saveSettings: {dailye3:false,activityOverview:false,dailychat:false,yourActivity:false,dailyresponse:false,
        newContent:false,upcomingSchedule:false,newReward:false,reminder:false,directMessage:false}
    }

    emailSettingChangeHandler = emailSetting => {
        const settings = this.state.settings.email;
        const updatedSettings = [];

        settings.map(setting => {
            const updatedSetting = {...setting};
            if(updatedSetting.settingId === emailSetting.settingId){
                updatedSetting.isSelected = !emailSetting.isSelected;
            }
            updatedSettings.push(updatedSetting);
        });

        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                email: updatedSettings
            }
        }));
    }
    notificationsSettingChangeHandler = notificationSetting => {
        const settings = this.state.settings.notifications;
        const updatedSettings = [];

        settings.map(setting => {
            const updatedSetting = {...setting};
            if(updatedSetting.settingId === notificationSetting.settingId){
                updatedSetting.isSelected = !notificationSetting.isSelected;
            }
            updatedSettings.push(updatedSetting);
        });

        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                notifications: updatedSettings
            }
        }));
    }

    handleScroll = (event) => {
        const target = event.target;
        
        const val1 = Math.ceil(target.scrollHeight - target.scrollTop)+5;
        const val2 = Math.ceil(target.scrollHeight - target.scrollTop)-5;
        const val3 = target.clientHeight;
        if (val1 >= val3 && val2 <= val3) { // Adjust for Android as well
          //scroll to the bottom of Terms of Services
          this.setState((prevState) => ({terms: {...prevState.terms, readTermsOfServices: true}}));
      }};
      
    getTermsPolicyHandler = async () => {
        this.setState({ termsloading: true });
        const payLoad = { type: "settings" }
        this.setState({termsloading: true});
        const response = await Account.getTermsOfService(payLoad);
        const policy = { ...this.state.terms };
        if (response) {
          policy["termsOfServices"] = response.terms;
        } else {
          policy["termsOfServices"] = "Sorry! We are unable to fecth Terms of Services at this time. Please contact Admin";
        }
        this.setState((prevState) => ({ terms: { ...prevState.terms, termsOfServices: response.terms }, termsloading: false }));
        console.log(this.state.terms);
    }
    
    getPrivacyPolicyHandler = async () => {
        this.setState({ termsloading: true });
        const response = await Account.getPrivacyPolicy();
    
        if (response) {
          this.setState((prevState) => ({ terms: { ...prevState.terms, privacyPolicy: response.privacypolicy },  termsloading: false }));
        } else {
          const policy = "Sorry! We are unable to fecth Privacy Policy at this time. Please contact Admin";
          this.setState((prevState) => ({ terms: { ...prevState.terms, privacyPolicy: policy },  termsloading: false }));
        }
      }

    componentDidMount() {
          this.getCustomerSettings();
    }

    getCustomerSettings = () => {
        this.setState({ isLoading: true });
        Customer.getCustomerSettings().then(response => {
            this.setState({settings: response, isLoading: false});
        }).catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        })
    }
    sendCustomerSettings = () => {
        this.setState({ isLoading: true });

        const emailSettings = this.state.settings.email;
        const updatedEmailSettings = [];

        emailSettings.map(setting => {
            const updatedSetting = {"settingId": setting.settingId, "isSelected": setting.isSelected};
            updatedEmailSettings.push(updatedSetting);
        });
        const notificationSettings = this.state.settings.notifications;
        const updatedNotificationSettings = [];

        notificationSettings.map(setting => {
            const updatedSetting = {"settingId": setting.settingId, "isSelected": setting.isSelected};
            updatedNotificationSettings.push(updatedSetting);
        });

        const payload = {"email": updatedEmailSettings, "notifications": updatedNotificationSettings};

        Customer.updateCustomerSettings(payload).then(response => {
            this.setState({isLoading: false, showCongratulations: !this.state.showCongratulations});
        }).catch(err => {
            this.setState({ isLoading: false });
            console.log(err);
        })
    }

    showCongratulationsToggle = () => {
        this.setState({showCongratulations: !this.state.showCongratulations});
    }

    congratutionsOnHideHandler = () => {
        this.setState({ redirect: "/dashboard" });
    }


    termsClickHandler = () => {
        this.setState((prevState) => ({terms: {...prevState.terms, Agreed: !this.state.terms.Agreed}}));
        console.log(this.state.terms);
    };
    
    termsAgreedHanlder = () => {
         this.setState((prevState) => ({terms: {...prevState.terms, Agreed: true}}));
         console.log(this.state.terms);
    };

    getEmailAndNotificationSettings = (setting, type) => {
        return <React.Fragment key = {setting.settingId + Math.random()}>
                    <div className="my-2 pt-1"></div>
                    <Card className="BGColor p-3 settingCard">
                        <div className="text-align">{setting.description} </div>
                        <div className="switch-button"> 
                            <Form.Switch id= {setting.settingId} 
                                        className="settingsSwitch"
                                        label="" 
                                        onChange={e => {return type === "email" ? this.emailSettingChangeHandler(setting) : this.notificationsSettingChangeHandler(setting)}} 
                                        onKeyPress={e => {return type === "email" ? this.emailSettingChangeHandler(setting) : this.notificationsSettingChangeHandler(setting)}} 
                                        checked={setting.isSelected}/>
                            </div>
                    </Card>
                </React.Fragment>
    }

    render(){
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        let emailSettings = null;
        let notificationSettings = null;

        if(this.state.settings && this.state.settings.email){
            emailSettings = this.state.settings.email.map(setting => this.getEmailAndNotificationSettings(setting, "email"));
        }
        
        if(this.state.settings && this.state.settings.notifications){
            notificationSettings = this.state.settings.notifications.map(setting => this.getEmailAndNotificationSettings(setting, "notifications"));
        }

        const settingsHeader = (
                <Row className="text-center justify-content-center align-items-center m-auto">
                    <Col className="text-center">
                        <h4 className="text-xl text-uppercase font-weight-bold"> Settings</h4>
                        <h6 className="my-2 notifyMessage text-md">We'll Notify You About:</h6>
                    </Col>
                </Row>
        );

        return (
            <React.Fragment>
                <WebHeader props={this.props}/>
                <main className="py-4 e3-main-wrapper">
                    <Col md={{ span: 8, offset: 2 }} xs={12} className="py-3">
                        <Container className="shadow-box-setting">
                            <div className="d-none d-md-block">
                                {settingsHeader}
                            </div>
                            <div className="mobile d-block d-md-none">
                                <div className="my-4"></div>
                                {settingsHeader}
                            </div>
                            <Scrollbars autoHeight
                               autoHeightMin={20}
                               autoHeightMax={430}
                               universal={true}
                               renderView={props => <div style={{paddingRight: '10px', ...props.style}} />} 
                               renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}>
                                <div className="my-2 pt-2"></div>
                                <Row xs={1} md={1} xl={2}>
                                <Col>
                                    <span className="text-uppercase text-x1 ml-2 font-weight-bold">Email</span>
                                    {emailSettings}
                                </Col>

                                <Col>
                                    <span className="text-uppercase text-x1 font-weight-bold">Push Notifications</span>
                                    {notificationSettings}
                                </Col>
                            </Row>
                            </Scrollbars>
                            <div className="my-1 pt-1"></div>
                            <Row>
                                <Col className="text-center PrimaryBtn">
                                    <Button variant="primary" className="my-2" size="sm" onClick = {this.sendCustomerSettings} >Save</Button>
                                    <Congradulations show = {this.state.showCongratulations} 
                                                     onHide = {this.congratutionsOnHideHandler}
                                                     showCongratulationsToggle = {this.showCongratulationsToggle} />
                                </Col>
                            </Row>
                            <div className="my-1 pt-1"></div>
                            <Row>
                                <Col>
                                    By turning on mobile notifications you agree to our terms{" "}<TermofService  handleScroll={this.handleScroll}
                                      readTermsOfServices={this.state.terms.readTermsOfServices}
                                      termsAgreedHanlder = {this.termsAgreedHanlder}
                                      getTermsPolicyHandler = {this.getTermsPolicyHandler}
                                      termsOfServices = {this.state.terms.termsOfServices}
                                      className="payterm_link" />{" "}of Use and {" "}
                                      <PrivacyPolicy getPrivacyPolicyHandler = {this.getPrivacyPolicyHandler} privacyPolicy = {this.state.terms.privacyPolicy} />{" "} 
                                    to receiving text and push notifications. Texts may be sent using automatic telephone dialing systems. Message and data rates may apply.
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </main>
            </React.Fragment>
        );
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Setting));