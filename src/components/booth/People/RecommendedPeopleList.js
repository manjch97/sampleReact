import React from "react"
import { Container, Col } from "react-bootstrap";
import { ActivePeopleItem } from '../../common/ActivePeopleItem/ActivePeopleItem';
import people1 from '../../../assets/img/booths/people/1.jpg';
import people2 from '../../../assets/img/booths/people/2.jpg';
import people3 from '../../../assets/img/booths/people/3.jpg';
import people4 from '../../../assets/img/booths/people/4.jpg';
import people5 from '../../../assets/img/booths/people/5.jpg';
import RecommendedActive from './RecommendedActive';

export const RecommendedPeopleList = (props) => {
    const activePeople = [{
        image: people1,
        name: 'Courtney Henry',
        tags: ['Fortnite', 'LOL']
    }, {
        image: people2,
        name: 'Jerome Bell',
        tags: ['Fortnite', 'LOL']
    }, {
        image: people3,
        name: 'Wade Warren',
        tags: ['Fortnite', 'LOL']
    }, {
        image: people4,
        name: 'Robert Fox',
        tags: ['Fortnite', 'LOL']
    }, {
        image: people5,
        name: 'Eleanor Pena',
        tags: ['Fortnite', 'LOL']
    },
    {
        image:people1,
        name:'Courtney Henry',
        tags:['Fortnite','LOL']
    },
    {
        image:people2,
        name:'Courtney Henry',
        tags:['Fortnite','LOL']
    }]
    return (
        <Container >
            <RecommendedActive activePeople={activePeople} />
        </Container>
    );
}
export default RecommendedPeopleList;