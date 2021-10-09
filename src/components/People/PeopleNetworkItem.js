import React from "react";
import {Col} from "react-bootstrap";
import './PeopleNetwork.scss'
import './People.scss'

export const PeopleNetworkItem = (props) => {
    const {PeopleNetwork} = props;
    return (
        <React.Fragment>
            <div className="d-flex mainPeopleNetwork">
            {PeopleNetwork.map((item, i) => {
                return(
                    <ROW>
                        <Col key={`${item.name}${i}`} className="e3-people-item-network networkItem">
                            <figure className="e3-people-img-network networkImg">
                                <img src={item.image} alt='' />
                                <div className={`e3-people-video-network-normal recommendVideo ${item.class}`}>
                                    <p className="liveText">live</p>
                                </div>
                            </figure>
                            <p className="text-sm e3-people-name-network peopleNetwork" >{item.name}</p>
                        </Col>
                    </ROW>
                )
            })}
            </div>
        </React.Fragment>
        
    )
}