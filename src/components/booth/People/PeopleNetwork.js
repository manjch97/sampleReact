import React, { Component } from "react";
import "./PeopleNetwork.scss";
import { Row, Col } from 'react-bootstrap';
import './People.scss'
import { faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PeopleNetworkItem } from "./PeopleNetworkItem";

class PeopleNetwork extends Component {
    constructor(props) {
        super(props);
        // React Ref is created here
        this.navRef = React.createRef();
        this.scrollWidth = 0;
      }
      handleNav = (direction) => {
          const scrollwidth = this.navRef.current.offsetWidth + this.scrollWidth;
          console.log(this.scrollWidth)
          if (direction === 'left' && (this.scrollWidth > 0) ) {
            console.log(this.scrollWidth)
              this.scrollWidth =  this.scrollWidth - 200;
              this.navRef ? this.navRef.current.scroll({ left: this.scrollWidth, behavior: 'smooth' }) : null;
          } 
         if(direction === 'right' && (this.navRef.current.scrollWidth > scrollwidth)) {
              this.scrollWidth = this.scrollWidth + 200;
              this.navRef ? this.navRef.current.scroll({ left: this.scrollWidth, behavior: 'smooth' }) : null;
         }
      }
    
    render(){
            
        return (
            <React.Fragment>
                <div className="e3-booth-header e3-people-header">
                  <Row>
                    <Col>
                      <div className="flexContainer">
                        <p className="head">Find People to network</p>
                        <div type='button' className='e3-people-arrow-scroll d-block d-md-none' tabIndex="1" >
                            <div className="flexContainer">
                                <FontAwesomeIcon icon={faAngleLeft} className="scrollIcon"
                                  onClick={() => this.handleNav('left')}></FontAwesomeIcon>
                                    &nbsp;&nbsp;&nbsp;
                                  <FontAwesomeIcon icon={faAngleRight} className="scrollIcon"
                                  onClick={() => this.handleNav('right')}></FontAwesomeIcon>
                              </div>
                          </div>
                      </div>
                    </Col>
                  </Row>
                  {/* <PeopleNetworkPeople refe={this.navRef}/> */}
                  <div className="scrollPeople" ref={this.navRef}>
                      <PeopleNetworkItem PeopleNetwork={this.props.peopleToNetwork} />
                  </div>
                </div>
            </React.Fragment>
        );
    }
  }
  export default PeopleNetwork;