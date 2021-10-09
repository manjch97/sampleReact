import React from "react";
import {Col} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './PeopleNetwork.scss'
import './People.scss'
import { GetSimpleAvatar } from "../../../helper/CommonHelper";
import {
    PEOPLENETWORK_EMPTY
  } from "../../../constants/CommonConstants";
export const PeopleNetworkItem = props => {

    let history = useHistory();

    const navigateToUserDetails = (customer) => {
      return history.push('/global/userdetails/'+ customer.customerId);
    };

    const {PeopleNetwork} = props;
    if(!PeopleNetwork || PeopleNetwork.length < 1){
        return (<div className="black text-24 font-weight-500">{PEOPLENETWORK_EMPTY}</div>)
      }
    return (
        <React.Fragment>
            <div className="d-flex mainPeopleNetwork">
            {PeopleNetwork.map((customer, i) => {
                return(
                    <Col key={`${customer.name}${i}`} className="e3-people-to-network">
                        <div className="figure_act" tabIndex="1">
                                <figure className="e3-people-to-network-img cursor" onClick = {()=> navigateToUserDetails(customer)}>
                                    <GetSimpleAvatar avatarUrl={customer.avatarUrl} avatarInitial={customer.avatarInitial}/>
                                </figure>
                                <p className="text-sm e3-people-name-network peopleNetwork py-3 pl-0" >{customer.name}</p>
                        </div>
                    </Col>
                )
            })}
            </div>
        </React.Fragment>
        
    )
}