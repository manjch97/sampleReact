import React, { Component } from "react"
import { Container, Col ,Row} from "react-bootstrap";
//import { ActivePeopleItem } from '../../common/ActivePeopleItem/ActivePeopleItem';
import {PeopleNetworkItem} from './PeopleNetworkItem'
import people1 from '../../../assets/img/booths/people/1.jpg';
import people2 from '../../../assets/img/booths/people/2.jpg';
import people3 from '../../../assets/img/booths/people/3.jpg';
import people4 from '../../../assets/img/booths/people/4.jpg';
import people5 from '../../../assets/img/booths/people/5.jpg';
import people6 from '../../../assets/img/forum/avatar1.jpg';
import people7 from '../../../assets/img/forum/avatar2.jpg';
import PeopleItem from './PeopleItem';
import './PeopleCard.scss'
const activePeople = [{
    image: people1,
    name: 'Courtney Henry',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
}, {
    image: people2,
    name: 'Jerome Bell',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
}, {
    image: people3,
    name: 'Wade Warren',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
}, {
    image: people4,
    name: 'Robert Fox',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
}, {
    image: people5,
    name: 'Eleanor Pena',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
},
{
    image: people7,
    name: 'Eleanor Pena',
    tags: ['Fortnite', 'LOL'],
    info:'Work for Bethesda for 5 years, overseeing Doom Franchise and Marketing Strategy for Domestic release'
}]
class PeopleItemPeople extends Component {
    render(){
        return (
            <Container-fluid>
            <Row className="scrollCard flex-sm-nowrap flex-md-wrap rowsmal-sp" ref={this.props.refe}>
                <PeopleItem activePeople={activePeople} />
            </Row>
            </Container-fluid>
        );
    }
}
export default PeopleItemPeople;