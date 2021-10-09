import React,{Component} from "react"
import { Container, Col } from "react-bootstrap";
// import { ActivePeopleItem } from '../../common/ActivePeopleItem/ActivePeopleItem';
import {PeopleNetworkItem} from './PeopleNetworkItem'
import people1 from '../../../assets/img/booths/people/1.jpg';
import people2 from '../../../assets/img/booths/people/2.jpg';
import people3 from '../../../assets/img/booths/people/3.jpg';
import people4 from '../../../assets/img/booths/people/4.jpg';
import people5 from '../../../assets/img/booths/people/5.jpg';
import people6 from '../../../assets/img/forum/avatar1.jpg';
import people7 from '../../../assets/img/forum/avatar2.jpg';
const activePeople = [{
    id:1,
    image: people1,
    name: 'Courtney Henry',
    class:'liveDisplayGray'
    
}, {
    id:2,
    image: people2,
    name: 'Jerome Bell',
    class:'liveDisplayGray'
}, {
    id:3,
    image: people3,
    name: 'Wade Warren',
    class:'liveDisplayRed'
}, {
    id:4,
    image: people4,
    name: 'Robert Fox',
    class:'liveDisplayGray'
}, {
    id:5,
    image: people5,
    name: 'Eleanor Pena',
    class:'liveDisplayRed'
},
{
    id:6,
    image:people6,
    name:'Daniel elleste',
    class:'liveDisplayGray'
},
{
    id:7,
    image:people7,
    name:'Eleanor Pena',
    class:'liveDisplayGray'
},
{
    id:8,
    image: people2,
    name: 'Jerome Bell',
    class:'liveDisplayRed'
    
}, {
    id:9,
    image: people3,
    name: 'Wade Warren',
    class:'liveDisplayGray'
    
}]
class PeopleNetworkPeople extends Component{
    
    render(){
    return (
        <div className="scrollPeople" ref={this.props.refe}>
            <PeopleNetworkItem PeopleNetwork={activePeople} />
        </div>
    );
    }
}
export default PeopleNetworkPeople;