import React from "react"
import { Container, Col } from "react-bootstrap";
import { SideNavTitle } from './SideNavTitle';
import { ActivePeopleItem } from '../ActivePeopleItem/ActivePeopleItem';
import people1 from '../../../assets/img/booths/people/1.jpg';
import people2 from '../../../assets/img/booths/people/2.jpg';
import people3 from '../../../assets/img/booths/people/3.jpg';
import people4 from '../../../assets/img/booths/people/4.jpg';
import people5 from '../../../assets/img/booths/people/5.jpg';
import { GetSpinner } from "../../../helper/CommonHelper";

export const SideNavActivePeople = (props) => {
    const activePeopleData = props.data;
    if(activePeopleData.loading === true){
        return (<GetSpinner/>);
    }
    
    return (
        <Container className='e3-sideNav-activePeople d-none d-md-block'>
            <SideNavTitle text='Active People' link='/global/people/active' />
            <ActivePeopleItem activePeople={activePeopleData.data} />
        </Container>
    );
}