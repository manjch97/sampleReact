import React, { Component } from "react";
import { Button, Col, Row, Table, Badge, Image } from 'react-bootstrap';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Select from 'react-select';
import { GetSimpleAvatar, GetCircleImage, WebHeader, GetSpinner } from "../../../../helper/CommonHelper";
import SideNavMain from "../../../common/sidenav/SideNavMain";
import BoothHeader from "../../BoothHeader";
import { BoothDetails } from "../../../../services/Api";
import { fireClickEvent } from "../../../../helper/GTMHelper";
import { PopulateMetaTags } from "../../../../helper/CommonHelper";
import back from "../../../../assets/img/booths/red_back.svg";
import './Event.scss';

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
});

class ShowAllRequest extends Component {

    state = {
        boothId: this.props.match?.params?.boothId,
        loading: true,
        allrequests: [],
        industryTypeArray: [],
        industryFilter: ""
    }

    componentDidMount() {
        this.getAllBoothRequests();
    }

    getAllBoothRequests = () => {
        this.setState({ loading: true });
        BoothDetails.getAllBoothRequests(this.state.boothId).then(response => {
            // Hanldle Response
            this.setState(prevState => ({
                ...prevState.allrequests,
                allrequests: response,
                loading: false
            }));
        }).catch(err => {
            this.setState({ loading: false });
            console.log(err);
        })
    }

    acceptOrDenyRequestApiCall = (requestId, isAccepted) => {
        this.setState({ loading: true });

        const payLoad = {
            "requestId": requestId,
            "isAccepted": isAccepted
        };
        BoothDetails.updateBoothRequest(this.state.boothId, payLoad).then(response => {
            // Hanldle Response
            this.setState({ loading: false });
            this.getAllBoothRequests();
        }).catch(err => {
            this.setState({ loading: false });
            console.log(err);
        })
    };

    acceptButtonClickHandler = (event, requestId) => {
        event.preventDefault();
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_accept_button_click", { "requestId": requestId });
        this.acceptOrDenyRequestApiCall(requestId, "true");
    }

    denyButtonClickHandler = (event, requestId) => {
        event.preventDefault();
        fireClickEvent({ id: this.props.currentUser?.id }, this.props.history.location.pathname, "booth_deny_button_click", { "requestId": requestId });
        this.acceptOrDenyRequestApiCall(requestId, "false");
    }

    handleRequestChange = (event) => {
     
        if(event) {
            this.setState(state => ({
                industryFilter: event.value
            }));
        }
    }

    backtobot = () => {
        this.props.history.push("/booths/1/");
    };

    render() {
        let requestsData = null;

        if (this.state.loading === true) {
            requestsData = <GetSpinner />;
        } else {
            this.state.industryTypeArray = [];
            requestsData = (
                <React.Fragment>
                    {this.state.allrequests?.map((item, i) => {
                        this.state.industryTypeArray.push({ label: item.industryType, value: item.industryType });
                        return (
                            <tbody key={item.requestId} style={{ display: this.state.industryFilter != "" && this.state.industryFilter != item.industryType ? 'none' : '' }}>
                                <tr>
                                    <td>
                                        <Row className="d-flex align-items-center mb-0">
                                            <div className="avatarWin">
                                                <GetSimpleAvatar avatarUrl={item.avatarUrl} avatarInitial={item.avatarInitial} />
                                            </div>
                                            <Col className="px-0 justify-content-center align-items-center">
                                                <p className="m-0 ">{item.customerName}</p>
                                            </Col>
                                        </Row>
                                    </td>
                                    <td>
                                        <p className="font-weight-bold mb-0">{item.requestsTimeSlot}</p>
                                    </td>
                                    <td>
                                        <Row className="d-flex align-items-center mb-0">
                                            <div className="avatarWin">
                                                <GetCircleImage imageUrl={item.eventLogoUrl} />
                                            </div>
                                            <Col className="px-0 justify-content-center align-items-center">
                                                <p className="m-0 ">{item.eventName}</p>
                                            </Col>
                                        </Row>
                                    </td>
                                    <td>
                                        <p className="font-weight-bold mb-0">{item.industryType}</p>
                                    </td>
                                    <td className="text-xs-center btnWidth">
                                        <Button variant="success" className="greenBG mr-2" size="sm" onClick={(event) => this.acceptButtonClickHandler(event, item.requestId)}>
                                            ACCEPT
                                </Button>
                                        <Button variant="danger" className="greenBG" size="sm" onClick={(event) => this.denyButtonClickHandler(event, item.requestId)}>
                                            DENY
                            </Button>

                                    </td>
                                </tr>

                            </tbody>
                        )
                    })}
                </React.Fragment>
            );

        }

        return (
            <React.Fragment>
                <PopulateMetaTags title={"E3 Expo Event-Booth-All Request"} description={"E3 Expo Event-Booth-All Request"} />
                <WebHeader props={this.props} />
                <main className="e3-main-wrapper">
                    <SideNavMain />
                    <section className="e3-content-wrapper">
                        <div className="containerspace">
                            <BoothHeader props={this.props} />
                            <div>
                                <div className="d-flex bd-highlight mb-2">
                                    <div className="p-2 bd-highlight">
                                        <h6 className="font-weight-bold text-24 text-dark">ALL REQUESTS</h6>
                                    </div>
                                    <div className="ml-auto p-2 bd-highlight" onClick={this.backtobot}>
                                        <Image src={back} className="cursor" /><p className="back-btns text-underline cursor">Back to booth</p>
                                    </div>
                                </div>
                                <div id="allRequestTable" className="right-scroll" tabIndex="0">
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Requests Time Slot</th>
                                                <th>Event</th>
                                                <th className="req_dropdown">
                                                    <Select
                                                        options={[...new Map(this.state.industryTypeArray.map(item => [JSON.stringify(item), item])).values()]}
                                                        placeholder="Select One"
                                                        onChange={(e) => { this.handleRequestChange(e) }}
                                                        classNamePrefix="e3_customrequest"
                                                    />  
                                                    </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        {requestsData}
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps)(withRouter(ShowAllRequest));