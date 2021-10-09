import React from "react";
import { Row, Col, Form, Image, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Visa from "../../assets/img/tabimg/visa.png";
import MasterCard from "../../assets/img/tabimg/mastercard.png";
import Paypal from "../../assets/img/tabimg/paypal.png";
import TermofService from "../../components/account/signup/Terms";
import RefundPolicy from "./RefundPolicy";
import './Payment.scss'
import { VISA, MASTERCARD, PAYPAL } from "../../constants/CommonConstants";
import { Scrollbars } from 'react-custom-scrollbars';

// Payment Methods
export const PaymentMethods = (props) => {
  return (
    <React.Fragment>
      <ul className="nav nav-tabs justify-content-center align-items-center " id="PaymentTab" role="tablist">
        <li className="nav-item">
          <Link
            className={props.paymentMethod.visa.activeClass}
            id={VISA}
            data-toggle="tab"
            role="tab"
            aria-controls={VISA}
            aria-selected={props.paymentMethod.visa.selected}
            to={() => {}}
            onClick={(e) => { e.preventDefault(); props.clickedCard(VISA); }}
          >
            <Image src={Visa} alt="Visa" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={props.paymentMethod.mastercard.activeClass}
            id={MASTERCARD}
            data-toggle="tab"
            role="tab"
            aria-controls={MASTERCARD}
            aria-selected={props.paymentMethod.mastercard.selected}
            to={() => {}}
            onClick={(e) => { e.preventDefault(); props.clickedCard(MASTERCARD); }}
          >
            <Image src={MasterCard} alt="MasterCard" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={props.paymentMethod.paypal.activeClass}
            id={PAYPAL}
            data-toggle="tab"
            role="tab"
            aria-controls={PAYPAL}
            aria-selected={props.paymentMethod.paypal.selected}
            to={() => {}}
            onClick={(e) => { e.preventDefault(); props.clickedCard(PAYPAL); }}
          >
            <Image src={Paypal} alt="Paypal" />
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

// Credit Card Details
export const CreditCardDetails = (props) => {
  
  return (
    <React.Fragment>
      <Form className="mt-5 paymentform_container">
        <Row xs={1} md={1} className="mb-2">
          <Col>
            <Form.Group controlId="name">
              <Form.Label className="text-muted text-16">Card Holder Name</Form.Label>
              {
                props.paymentInfo.errors.name && (<p className="text-danger payment-validation-msg">{props.paymentInfo.errors.name}</p>)
              }
              <Form.Control type="text" onChange={props.paymentInfoHandler} value={props.paymentInfo.name} placeholder=""/>
            </Form.Group>
          </Col>
        </Row>
        <Row xs={1} md={1} className="">
          <Col>
            <Form.Group>
              <Form.Label className="text-muted text-16">Card Number{" "}</Form.Label>
              {
                props.paymentInfo.errors.cardNumberSet1 && (<p className="text-danger payment-validation-msg">{props.paymentInfo.errors.cardNumberSet1}</p>)
              }
              <Row>
                <Col>
                  <Form.Control
                    id="cardNumberSet1"
                    type="text"
                    maxLength="4"
                    onChange={props.paymentInfoHandler}
                    placeholder="XXXX"
                    value={props.paymentInfo.cardNumberSet1}
                    onKeyDown={(evt) => (evt.key === "e" || evt.key === "." || evt.key === "-" || evt.key === "+") && evt.preventDefault()}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="cardNumberSet2"
                    type="text"
                    maxLength="4"
                    onChange={props.paymentInfoHandler}
                    placeholder="XXXX"
                    value={props.paymentInfo.cardNumberSet2}
                    onKeyDown={(evt) => (evt.key === "e" || evt.key === "." || evt.key === "-" || evt.key === "+") && evt.preventDefault()}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="cardNumberSet3"
                    type="text"
                    maxLength="4"
                    onChange={props.paymentInfoHandler}
                    placeholder="XXXX"
                    value={props.paymentInfo.cardNumberSet3}
                    onKeyDown={(evt) => (evt.key === "e" || evt.key === "." || evt.key === "-" || evt.key === "+") && evt.preventDefault()}
                  />
                </Col>
                <Col>
                  <Form.Control
                    id="cardNumberSet4"
                    type="text"
                    maxLength="4"
                    onChange={props.paymentInfoHandler}
                    placeholder="XXXX"
                    value={props.paymentInfo.cardNumberSet4}
                    onKeyDown={(evt) => (evt.key === "e" || evt.key === "." || evt.key === "-" || evt.key === "+") && evt.preventDefault()}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row xs={1} md={1} className="mb-2">
          <Col>
            <Form.Group>
              <Row>
                <Col>{
                    props.paymentInfo.errors.expiryDate && ( <p className="text-danger"> {props.paymentInfo.errors.expiryDate} </p>)
                    }
                </Col>
                <Col>
                  {
                    props.paymentInfo.errors.cvc && ( <p className="text-danger"> {props.paymentInfo.errors.cvc} </p>)
                  }
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="text-muted text-16">Expiry Date{" "}</Form.Label>
                  
                  <Form.Control
                    id="expiryDate"
                    type="text"
                    maxLength="7"
                    onChange={props.paymentInfoHandler}
                    value={props.paymentInfo.expiryDate}
                    placeholder="MM/YYYY"
                  />
                </Col>
                <Col>
                  <Form.Label className="text-muted text-16">CVC </Form.Label>
                  <Form.Control
                    id="cvc"
                    type="password"
                    onChange={props.paymentInfoHandler}
                    placeholder=""
                    maxLength="4"
                    value={props.paymentInfo.cvc}
                    onKeyDown={(evt) => (evt.key === "e" || evt.key === ".") &&  evt.preventDefault() }
                  />
                </Col>
              </Row>
            </Form.Group>
          </Col>
        </Row>
        <Row xs={1} md={1} className="mb-2">
        <Col>
            <Form.Group controlId="discountCode">
              <Row>
                <Col>
                  <Form.Label className="text-muted text-16">Discount Code</Form.Label>
                </Col>
                <Col xs="auto">
                  <small className="justify-content-end align-items-end">
                    <Form.Label className="text-muted ">{props.productInfo.discountMessage}</Form.Label>
                  </small>
                </Col>
              </Row>
              <Form.Control
                type="text"
                onChange={props.productInfoHandler}
                placeholder=""
                onBlur={props.discountValidationHandler}
                value={props.productInfo.discountCode}
              />
            </Form.Group>
          </Col>        
        </Row>
      </Form>
    </React.Fragment>
  );
};

// Product Details
export const ProductDetails = (props) => {
  return (
    <React.Fragment>
      <div className="text-center paymentInputs ">
        <Form.Group className="d-flex text-center justify-content-center align-items-center pspacebtm">
          <span className="pr-4 gray">Save card data for future payments</span>
          <Form.Switch id="saveCard" label="" onChange={props.saveCardClickHandler} onKeyPress={props.saveCardClickHandler} checked={props.paymentInfo.saveCard}/>
        </Form.Group>

        <h5 className="my-4 text-16 text-uppercase">
        <span className="pr-1">
          {props.productInfo.membershipTypeDesc} - </span>

            <React.Fragment>
                {' '}{props.productInfo.currency}{props.productInfo.price}
            </React.Fragment>

        </h5>

        
          <div className="savecard_wrapper">
            <div className="svcardcontainer">
            <Scrollbars autoHeight
                autoHeightMin={180}
                autoHeightMax={180}
                universal={true}
                renderView={props => <div style={{paddingRight: '15px', ...props.style}} />} >
            <h5 className="savecd_title">SAVE CARD</h5>
              
              <div className="svcard_item">
                <div className="svcardinline">
                    <div className="svcaredimg_sec"><Image  src={MasterCard} alt="MasterCard" /></div>
                  </div>
                <div className="svcardinline svcard_detailwr">
                  <div className="svcard_name">Master Card</div>
                  <div className="svcard_type">International Card</div>
                  <div className="svtrans_date">Last paid on 17th Mar.</div>
                </div>
                <div className="svcardinline svcardselectwr">
                <Form.Group controlId="saveCardSelect" className="checkbox checkbox-inline checkbox-warning checkbox-sm">
                  <Form.Check inline
                    className="pr-0 mr-0 checkbox checkbox_label_left"
                    type="checkbox"
                    id="savecard"
                    label=""
                  /></Form.Group>
                </div>
              </div>

              <div className="svcard_item">
                <div className="svcardinline">
                    <div className="svcaredimg_sec"><Image  src={MasterCard} alt="MasterCard" /></div>
                  </div>
                <div className="svcardinline svcard_detailwr">
                  <div className="svcard_name">Master Card</div>
                  <div className="svcard_type">International Card</div>
                  <div className="svtrans_date">Last paid on 17th Mar.</div>
                </div>
                <div className="svcardinline svcardselectwr">
                <Form.Group controlId="saveCardSelect" className="checkbox checkbox-inline checkbox-warning checkbox-sm">
                  <Form.Check inline
                    className="pr-0 mr-0 checkbox checkbox_label_left"
                    type="checkbox"
                    id="savecard"
                    label=""
                  /></Form.Group>
                </div>
              </div>

              <div className="svcard_item">
                <div className="svcardinline">
                    <div className="svcaredimg_sec"><Image  src={MasterCard} alt="MasterCard" /></div>
                  </div>
                <div className="svcardinline svcard_detailwr">
                  <div className="svcard_name">Master Card</div>
                  <div className="svcard_type">International Card</div>
                  <div className="svtrans_date">Last paid on 17th Mar.</div>
                </div>
                <div className="svcardinline svcardselectwr">
                <Form.Group controlId="saveCardSelect" className="checkbox checkbox-inline checkbox-warning checkbox-sm">
                  <Form.Check inline
                    className="pr-0 mr-0 checkbox checkbox_label_left"
                    type="checkbox"
                    label=""
                  /></Form.Group>
                </div>
              </div>
              </Scrollbars>
            </div>
        </div>
        <Form.Group controlId="Agreed" className="checkbox checkbox-inline checkbox-warning checkbox-sm svcard_term">
          <Form.Check inline disabled = {!props.readTermsOfServices}
            className="pr-0 mr-0 checkbox checkbox_label_left"
            type="checkbox"
            onChange={props.termsClickHandler}
            checked={props.terms.Agreed}
            label="I agree to the"
          />
          <TermofService  handleScroll={props.handleScroll}
                         readTermsOfServices={props.readTermsOfServices}
                         termsAgreedHanlder = {props.termsAgreedHanlder}
                         getTermsPolicyHandler = {props.getTermsPolicyHandler}
                         termsOfServices = {props.terms.termsOfServices}
                         className="payterm_link" />
          {
            props.terms.errors.Agreed && (<p className="text-danger">{props.terms.errors.Agreed}</p>)
          }
        </Form.Group>
        <div className="PrimaryBtn my-3">
          <Button variant="primary" className="my-2" size="sm" onClick={props.confirmClickHandler}>
            Confirm
          </Button>
        </div>
        <div className="paymt_bottomsec">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit{" "}
          <Link><RefundPolicy getRefundPolicyHandler = {props.getRefundPolicyHandler} refundPolicy = {props.terms.refundPolicy} /></Link>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};
