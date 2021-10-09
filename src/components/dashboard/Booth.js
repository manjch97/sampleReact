import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo1 from "../../assets/img/dashboard/1.jpg";
import logo2 from "../../assets/img/dashboard/2.jpg";
import logo3 from "../../assets/img/dashboard/3.jpg";
import testuser from "../../assets/img/dashboard/testuser.svg";
import './Dashboard.scss'
export default class Booth extends Component {

    render() {
        const boothsobj = [{
            name: "xBox",
            image: logo1,
            userImg: testuser
        },
        {
            name: "Playstation",
            image: logo2,
            userImg: testuser
        },
        {
            name: "Nintendo",
            image: logo3,
            userImg: testuser
        },
        {
            name: "xBox",
            image: logo1,
            userImg: testuser
        }, {
            name: "Playstation",
            image: logo2,
            userImg: testuser
        }, {
            name: "Nintendo",
            image: logo3,
            userImg: testuser
        }]
        return (
            <React.Fragment>
                <Row className="px-3">
                    <Col className="pl-1 mb-2" xs={8}>
                        <h6 className="text-grey text-16">Booths that you are following</h6>
                    </Col>
                    <Col className="text-right pr-1" xs={4} >
                        <a className="text-grey3 text-xs" tabIndex="0">VIEW ALL</a>
                    </Col>

                </Row >
                <Row lg={4} xl={6} sm={4} xs={3} className="px-3">

                    {boothsobj.map((item, i) => {
                        return (

                            <Col className="p-1 booths" tabIndex="0">
                                <img src={item.userImg} className="avatar-img"/>
                                <img src={item.image} className="img"/>
                                <p>{item.name}</p>
                            </Col>
                        )
                    })}
                </Row>
            </React.Fragment>
        );
    }
}
