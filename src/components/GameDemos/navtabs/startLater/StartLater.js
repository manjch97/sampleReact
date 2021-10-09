import React from "react";
import { Row, Col, Badge } from 'react-bootstrap';
import './startLater.scss';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Button } from 'react-bootstrap';
import Tooltip from "react-bootstrap/Tooltip";
import { Scrollbars } from 'react-custom-scrollbars';
import {
    STARTLATER_EMPTY
  } from "../../../../constants/CommonConstants";
export const StartLater = (props) => {

    function renderTooltip(props) {
        let message = ""
        //Sometimes, props.popper.state is undefined. 
        //It runs this function enough times that state gets a value 
        if (props.popper.state) {
            message = props.popper.state.options.data
        }

        return (
            <Tooltip id="button-tooltip" {...props}>
                {message}
            </Tooltip>
        );
    }
    if(!props.startlater || props.startlater.length < 1){
        return (<div className="black text-24 font-weight-500">{STARTLATER_EMPTY}</div>)
      }
    return (
        <Col className="p-0">
            <Row className="w-100 m-0 line-height_medium marginspce16">
                <Col className="px-0" xs={8}>
                    <h6 className="e3-startLater-section-header1  m-0">Starting in next few hours</h6>
                </Col>
                <Col className="px-0 text-right" xs={4}>
                    <Button variant="link" href={props.link} className="e3-startLater-link1 m-0">View All</Button>
                </Col>
            </Row>
            
            <Scrollbars autoHeight
                autoHeightMin={450}
                autoHeightMax={450}
                universal={true}
                renderView={props => <div style={{paddingRight: '10px', ...props.style}} />} >
                {props.startlater.map((item, i) => {
                    return (
                        <div key={item.gameId}>
                            <Button variant="link" href="#" className="e3-start-later-link">
                            <Row className="w-100 m-0 my-1 d-flex align-items-center" >
                                <Col style={{ maxWidth: "70%" }} className="pl-0">
                                    <Row className="d-flex align-items-center">
                                        <Col style={{ maxWidth: 100 }} className="pr-0">
                                            <div className="startLaterimg">
                                                <figure className="position-relative mb-0">
                                                    <img src={item.imageUrl} alt="win" className="h-50px w-70px" />
                                                    {item.isLive === "true" ?
                                                        <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-startLater-next">LIVE</Badge>
                                                        : null}
                                                </figure>
                                            </div>
                                        </Col>
                                        <Col className="hideClass1" >
                                            <OverlayTrigger placement="top" overlay={renderTooltip} popperConfig={{ data: item.gameDescription }}>
                                                <Button
                                                    variant="default"
                                                    className="e3-startLater-title widthClass font-weight-bold mb-0 p-0"
                                                >
                                                    <span className="start_desc_sty">{item.gameDescription}</span>
                                                </Button>
                                            </OverlayTrigger>

                                            <Badge tabIndex="0" pill variant="default" className="badge_lightbg pl-1 d-flex align-items-start startalign " style={{ maxWidth: 85 }}>
                                                <div className="square_block"></div>
                                                <p className=" font-weight-400 text-xs text-white pl-1 w-85 mb-0 e3-startLater-tag-text">{item.gameTitle}</p>
                                            </Badge>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="d-flex justify-content-end align-items-end flex-column pr-0 pt-1 hideClass2" style={{ maxWidth: "30%" }}>
                                    <div className="e3-startLater-startContent font-weight-bold line-height12 start_txt_sty">Starting at</div>
                                    <div className=" e3-startLater-time mt-1 line-height12 start_time_style"> {item.startingAt}</div>
                                </Col>
                            </Row>
                            </Button>
                            <div className="bottom-line"></div>
                        </div>

                    )
                })}
            </Scrollbars>
        </Col>
    );
}