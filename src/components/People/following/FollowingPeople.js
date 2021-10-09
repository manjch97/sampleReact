import React, { Component } from "react";
import { Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import People from "./People";
import FilterButton from "./FilterButton";
import './FollowingPeople.scss';

class FollowingPeople extends Component {
    constructor(props) {
        super(props);
        // React Ref is created here
        this.navRef = React.createRef();
      }
      handleNav = (direction) => {
        const width = this.navRef.current.offsetWidth;
        if (direction === 'left' && this.navRef) {
            this.navRef.current.scrollLeft -= width;
        } else if(this.navRef){
            this.navRef.current.scrollLeft += width;
        }
      }
    render(){
        return (
            <React.Fragment>
                <div className="justify-content-between flexContainer">
                    <h6 >PEOPLE I AM <span className="following-people">FOLLWOING </span></h6>
                    {/* <FilterButton/> */}
                    <div type='button' className='e3-people-arrow-card-scroll d-block d-md-none'>
                    <div>
                        <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon" onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                        &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="scrollIcon" onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                    </div>
                    </div>
                </div>
                <People refe={this.navRef}/>
            </React.Fragment>
        );
    }
  }
  export default FollowingPeople;