import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from 'react-bootstrap';
import { DemoInvitesList } from '../DemoInvitesList/DemoInvitesList';
import { GamesDemos } from "../../../../services/Api";
import { GetSpinner } from "../../../../helper/CommonHelper";
import { fireClickEvent } from '../../../../helper/GTMHelper'
import { GAME_DEMOS_MAX_RECORDS } from "../../../../constants/CommonConstants";
import InfiniteScroll from "react-infinite-scroll-component";

const mapStateToProps = (state) => ({
    currentUser: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({});

class GameInvite extends Component {

    state = {
        demoInvites: undefined,
        loading: true,
        hasMore: true,
        page: 1
    }

    componentDidMount() {
        this.getDemoInvites(this.state.page);
        fireClickEvent({ id: this.props?.currentUser?.email }, this.props.history?.location?.pathname, "gamedemos_demoinvites_click", { userId: this.props?.currentUser?.email });
    }

    //Get the Demo Invites from the server
    getDemoInvites = async (pageNumber) => {
        if(GAME_DEMOS_MAX_RECORDS <= pageNumber){
            this.setState({ 
                loading: false, 
                hasMore: false
            });
            return;
        }
        const payload = {
                            "paginationDetails":{
                                "page": pageNumber
                            }
                        };
        console.log("About to call Game DEMO Invites api with payload: ", payload);
        const response = await GamesDemos.getDemoInvites(payload);

        if(response && response.length >=1) {
            this.setState(prevState => ({
                    page : pageNumber, 
                    demoInvites: prevState.demoInvites? prevState.demoInvites.concat(response) : response,
                    loading: false
            }));
        }else{
            this.setState({ 
                loading: false, 
                hasMore: false
            });
        }
    }

    fetchMoreGameInvites = () => {
        this.getDemoInvites(this.state.page + 1);
    }

    render() {
        let gameInviteData = null;

        if (this.state.loading === true) {
            gameInviteData = <GetSpinner />;
        }else if(this.state.demoInvites){
            gameInviteData = (<React.Fragment>
               
                    <Row>
                        <Col>
                            <DemoInvitesList demoInvites = {this.state.demoInvites} 
                                             fetchMoreGameInvites = {this.fetchMoreGameInvites}
                                             hasMore = {this.state.hasMore}/>
                        </Col>
                    </Row>
                
            </React.Fragment>);
          }
        return gameInviteData;
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GameInvite));
