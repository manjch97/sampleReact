import React from "react";
import { Modal, Form } from "react-bootstrap";
import { Row, Col, Button, Badge } from 'react-bootstrap';
import { Eye, ThreeDotsVertical, CheckCircleFill } from "react-bootstrap-icons";
import close from "../../../../assets/img/booths/Vector9.svg";
import Lockicon from '../../../../assets/img/gamedemos/Lockicon.svg';
import dollar from '../../../../assets/img/gamedemos/dollar.svg';
import Playstationicon from '../../../../assets/img/gamedemos/Playstationicon.svg';
import file from "../../../../assets/img/shop/Trending1.jpg";

import '../../../GameDemos/navtabs/listDemos/ListDemos.scss';

export const OtherGameDemos = (props) => {

    return (
        
      <Modal size="md" centered className="confirmationPopup" show={props.show} onHide={props.onHide} >
          <Modal.Header className="font-weight-light border-0 py-3" closeButton />
          <Modal.Body className="pt-0"> 
            <Col className="px-md-4 pb-4 pt-4">
            <Row>
              <Col xl={12} xs={12} className="text-center mb-4">
                <h5 className="title text-uppercase">other game demos</h5>
                <span className="sub-title text-md font-weight-400" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
              </Col>
            </Row>

            <Button variant="link" className="e3-listdemo-link p-0 mb-2" href="#">
              <div  className="d-flex flex-row justify-content-between  align-items-start  e3-listdemo-item">
                <figure className="position-relative e3-listdemo-img mb-0">
                  <img src={file} alt="image" className="h-95px w-112px" />
                    <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-listdemo-next">LIVE</Badge>
                  <Badge variant="light" className="position-absolute text-center px-1 e3-listdemo-views"><Eye /><span className="pl-1">988</span></Badge>
                </figure>
                <aside className="w-100 e3-listdemo-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-start">
                      <div>
                        <img src={Playstationicon} alt="playstationicon" className="pr-0" />
                      </div>
                      <div><p className="e3-listdemo-title mb-0 pl-2">gameConsole</p></div>
                    </div>
                    <div>
                                 {/* <Button variant="default" className='e3btn_pink p-1 e3-bu-align font-weight-500 w-70' size="sm">
                        <img src={Lockicon} alt="Lock" className="pr-1" />300<img src={dollar} alt="Lock" className="pl-1" />
                      </Button>
                          */}
                            
                              <Button variant="default" className="p-1 e3-accepted-status ml-4 w-70 white">Available</Button>
                          
                           
                    </div>
                  </div>
                  <div className="e3-listdemo-contentdata pl-0 spc_pad_grid">gameDescription </div>
                  <div className="e3-listbutton-tags">
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">SPIDERMAN</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">CODE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>


                  </div>
                </aside>
              </div>
            </Button>
            <Button variant="link" className="e3-listdemo-link p-0 mb-2" href="#">
              <div className="d-flex flex-row justify-content-between  align-items-start  e3-listdemo-item">
                <figure className="position-relative e3-listdemo-img mb-0">
                  <img src={file} alt="image" className="h-95px w-112px" />
                  <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-listdemo-next">LIVE</Badge>
                  <Badge variant="light" className="position-absolute text-center px-1 e3-listdemo-views"><Eye /><span className="pl-1">988</span></Badge>
                </figure>
                <aside className="w-100 e3-listdemo-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-start">
                      <div>
                        <img src={Playstationicon} alt="playstationicon" className="pr-0" />
                      </div>
                      <div><p className="e3-listdemo-title mb-0 pl-2">gameConsole</p></div>
                    </div>
                    <div>
                       <Button variant="default" className='e3btn_pink p-1 e3-bu-align font-weight-500 w-70' size="sm">
                        <img src={Lockicon} alt="Lock" className="pr-1" />300<img src={dollar} alt="Lock" className="pl-1" />
                      </Button>
                        
                    </div>
                  </div>
                  <div className="e3-listdemo-contentdata pl-0 spc_pad_grid">gameDescription </div>
                  <div className="e3-listbutton-tags">
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">SPIDERMAN</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">CODE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>


                  </div>
                </aside>
              </div>
            </Button>
            <Button variant="link" className="e3-listdemo-link p-0 mb-2" href="#">
              <div className="d-flex flex-row justify-content-between  align-items-start  e3-listdemo-item">
                <figure className="position-relative e3-listdemo-img mb-0">
                  <img src={file} alt="image" className="h-95px w-112px" />
                  <Badge variant="default" className="position-absolute text-center px-1 py-0 e3-listdemo-next">LIVE</Badge>
                  <Badge variant="light" className="position-absolute text-center px-1 e3-listdemo-views"><Eye /><span className="pl-1">988</span></Badge>
                </figure>
                <aside className="w-100 e3-listdemo-content">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-start">
                      <div>
                        <img src={Playstationicon} alt="playstationicon" className="pr-0" />
                      </div>
                      <div><p className="e3-listdemo-title mb-0 pl-2">gameConsole</p></div>
                    </div>
                    <div>
                   
                        
                      <Button variant="default" className="p-1 e3-accepted-status ml-4 w-70 white">Available</Button>


                    </div>
                  </div>
                  <div className="e3-listdemo-contentdata pl-0 spc_pad_grid">gameDescription </div>
                  <div className="e3-listbutton-tags">
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">SPIDERMAN</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">CODE</Badge>
                    <Badge tabIndex="0" pill variant="dark" className="btn-tags p-1 mr-1 font-weight-400">PRIVATE</Badge>


                  </div>
                </aside>
              </div>
            </Button>

            <div className="my-2 pt-3"></div>
         
            </Col>
          </Modal.Body>
        </Modal>
    )
}