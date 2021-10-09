import React from "react"
import {Col ,Row} from "react-bootstrap";

import PeopleItem from './PeopleItem';
import './PeopleCard.scss'

const PeopleItemPeople =(props) => {
    return (
        <Row className="rowsmal-sp">
            <Col>
                <Row className="scrollCard flex-sm-nowrap flex-md-wrap" ref={props.refe}>
                    <PeopleItem 
                        activePeople={props.activePeople} 
                        getAllActivePeople={props.getAllActivePeople}
                        hasMore={props.hasMore}
                        page={props.page}
                        followButtonClickHandler={props.followButtonClickHandler}
                        cardLoading={props.cardLoading}
                        />
                </Row>
            </Col>
        </Row>
    );
    
}

export default PeopleItemPeople;
