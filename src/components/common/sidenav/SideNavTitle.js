import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const SideNavTitle = (props) => {
    return (
        <Row className="mb-2">
            <Col className="px-0" xs={8}>
                <h6 className="e3-sideNav-section-header">{props.text}</h6>
            </Col>
            <Col className="px-0 text-right" xs={4}>
                <NavLink to={props.link} className="e3-sideNav-link">View All</NavLink>
            </Col>
        </Row>
    )
}