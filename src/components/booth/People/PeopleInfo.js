import React, { Component } from "react";
import {Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import PeopleItem from './PeopleItem';
import './PeopleCard.scss';

const mapStateToProps = (state) => ({
    // Get data from Redux for topics unless cleared
    currentUser: state.auth.user,
  });
  
const mapDispatchToProps = (dispatch) => ({});

class PeopleInfo extends Component {
    constructor(props) {
        super(props);
        // React Ref is created here
        this.navRef = React.createRef();
        this.scrollWidth = 0;
      }
      handleNav = (direction) => {
        const width = this.navRef.current.offsetWidth;
        console.log(width)
        const scrollwidth = this.navRef.current.offsetWidth + this.scrollWidth;
        if (direction === 'left' && (this.scrollWidth > 0) ) {
          this.scrollWidth = this.scrollWidth - width;
          return this.navRef ? this.navRef.current.scroll({ left: this.scrollWidth, behavior: 'smooth' }) : null;
        } 
        if(direction === 'right' && (this.navRef.current.scrollWidth > scrollwidth)) {
          this.scrollWidth = this.scrollWidth + width;
          return this.navRef ? this.navRef.current.scroll({ left: this.scrollWidth, behavior: 'smooth' }) : null;
        }
      }
    render(){
        return (
            <React.Fragment>
                <Row>
                  <Col>
                    <div className="flexContainer marginsphead">
                    <div className="head">Some Dummy Headings</div>
                    <div type='button' className='e3-people-arrow-card-scroll d-block d-md-none'>
                      <div className="flexContainer">
                        <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon"
                        onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="scrollIcon"
                          onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                      </div>
                    </div>
                    <div className="filterPart" >
                        <div className="filterText">Filter By Type</div>
                        <select className="searchCard" defaultValue="" style={{border: '1px solid #979797'}}tabIndex="2">
                          <option value="" disabled className="selectOption">Select One</option>
                        </select>
                      </div>
                      </div>
                  </Col>
                </Row>
                <Container-fluid>
                    <Row className="scrollCard flex-sm-nowrap flex-md-wrap rowsmal-sp" ref={this.navRef}>
                      <PeopleItem getAllPeople={this.props.getAllPeople} 
                                 fetchMorePeople = {this.props.fetchMorePeople} 
                                 hasMore = {this.props.hasMore}
                                 page = {this.props.page}
                                 followButtonClickHandler = {this.props.followButtonClickHandler}
                                 cardLoading={this.props.cardLoading} />
                  </Row>
                </Container-fluid>
            </React.Fragment>
        );
    }
  }
  export default PeopleInfo;