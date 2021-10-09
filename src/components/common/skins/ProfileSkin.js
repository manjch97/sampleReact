import React, { Component } from "react";
import { connect } from "react-redux";
import {Row,Col,Button, Container,Tab,Tabs,Form} from 'react-bootstrap'
import People1 from '../../../assets/img/booths/people/1.jpg'
import './skins.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import RewardsSkins from './RewardsSkins';
const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({});
  class ProfileSkin extends Component {
    constructor() {
      super();
      this.state = {
        key: 1
      };
      this.handleSelect = this.handleSelect.bind(this);
    }
    componentDidMount() {
    }
  
    state = {
      show: true,
    }
  
    handleSelect(key) {
      this.setState({ key: key });
    }
    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
    
    render(){
            
        return (
            <React.Fragment>
                <Col md={{ span: 8, offset: 2 }}  className="py-3">
          <Container className="">
            <div className="skinsProfile mt-3 ">
              <div>
                <Row className="mobileSkins">
                  <figure className="e3-skins-img p-3">
                      <img src={People1}  alt="loading.." />
                  </figure>
                  <div className="p-1"> 
                    <p className="profileName">Anna Smith</p>
                    
                      <p className="profileSubtitle">Gold Tier</p>
                    
                  </div>
                  <div className="d-flex align-items-center">
                  <button variant="secondary" className="ml-0 btns" size="">
                    <span className="p-2">300Pts</span>
                  </button>
                 </div>
                </Row>
              </div>
              <div className="mt-2">
                <Row>
                  <Button variant="primary" className='e3-button  avatarButton mb-2  ' size="sm">
                    <FontAwesomeIcon icon={faUser}/>
                    <span className="p-2">View My Avatar</span>
                  </Button>
                </Row>
              </div>
            </div>
            <Row>
              <Col className="customer-pref-skin">
                <Form>
                  <Tabs activeKey={this.state.key} onSelect={this.handleSelect} className="pt-4 ml-2 text-underline tabsSkins">
                    <Tab eventKey={1} title="Skins"><RewardsSkins/></Tab>
                    <Tab eventKey={2} title="History"></Tab>
                    <Tab eventKey={3} title="Stats"></Tab>
                  </Tabs>
                </Form>
              </Col>
            </Row>
            
          </Container>

        </Col>
        

            </React.Fragment>
        );
    }
  }
  export default ProfileSkin;