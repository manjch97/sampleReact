import React from "react";
import { Button } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";


const GetPriceComponent=(basePrice,sellingPrice, currency)=>{
    return (                       
        <div><small className="pr-3"><del>{currency}{basePrice}</del></small>{currency}{sellingPrice}</div>
    );
}
const MemberCardHeading = (props) => {
    let key = props.divKey + "headkey";
    return (
        <React.Fragment key={key}>
            <div className="ribbon">{props.memberShip.promotionType}</div>
            <h4>{props.memberShip.membershipType}</h4>
            <h2 className="pt-2">{props.memberShip.basePrice <= 0 ? 'FREE' : (props.memberShip.sellingPrice > 0? GetPriceComponent(props.memberShip.basePrice,props.memberShip.sellingPrice,props.memberShip.currency) : <React.Fragment>{props.memberShip.currency}{props.memberShip.basePrice}</React.Fragment>)}</h2>
            <small className="text-sm font-weight-500">{props.memberShip.duration}</small>
        </React.Fragment>
    );
}

const MembershipButton = (props) => {
    let key = props.divKey + "buttonKey";
    const membership = props.memberShip;
    return (
        <React.Fragment key={key}>
            <Button variant="primary" onClick={()=>props.goToPayment(membership)} className="my-2" size="sm">
                Choose this pass
                </Button>
         </React.Fragment>
    );
}

const MembershipTerms = (props) => {
    return (
        <React.Fragment>
            {
                props.memberShip.terms.map((eachTerm, index) => {
                    let key = props.divKey + "listKey" + index;
                    return (
                        <React.Fragment key={key}>
                            <li>
                                <CheckCircleFill className="green text-md mb-4 mr-2 " />
                                {eachTerm}
                            </li>
                            {
                                index !== (props.memberShip.terms.length - 1) && <div className="dotted my-3"></div>
                            }

                        </React.Fragment>
                    );
                })
            }
        </React.Fragment>
    );
}

export { MemberCardHeading, MembershipButton, MembershipTerms };