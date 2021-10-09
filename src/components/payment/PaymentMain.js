import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import { CreditCardDetails, PaymentMethods, ProductDetails } from "./PaymentComponents";
import { connect } from "react-redux";
import { ValidatePaymentInfo, ValidateProductInfo, ValidateBillingInfo, ValidateTerms } from "./PaymentValidation";
import { Payment, Account } from "../../services/Api";
import { PaymentSuccessAlert } from "./PaymentSuccessAlert";
import Header from "../common/header/Header";
import { GetSmallSpinner, WebHeader } from "../../helper/CommonHelper";
import { fireClickEvent } from "../../helper/GTMHelper";
import { COUPON_APPLIED_MESSAGE, COUPON_INVALID_MESSAGE } from "../../constants/CommonConstants";
import {PopulateMetaTags} from "../../helper/CommonHelper";
const mapStateToProps = (state) => ({
  // Get data from Redux for topics unless cleared
  currentUser: state.auth.user,
});
const validateNumber = (str) =>{
  const regex =/^[0-9]+$/;
  return regex.test(str);
}
const mapDispatchToProps = (dispatch) => ({});

class PaymentMain extends Component {

  componentDidMount() {
    
  }

  state = {
    loading: true,
    cartId: '',
    termsloading: false,

    paymentMethod: {
      visa: { selected: true, activeClass: "nav-link active" },
      mastercard: { selected: false, activeClass: "nav-link" },
      paypal: { selected: false, activeClass: "nav-link" }
    },
    paymentInfo: {
      name: "",
      cardNumberSet1: "", cardNumberSet2: "", cardNumberSet3: "", cardNumberSet4: "",
      expiryDate: "",
      cvc: "",
      saveCard: false,
      errors: {}
    },
    billingInfo: {
      firstName: "", lastName: "",
      street: "", city: "", state: "", zipCode: "", country: "",
      email: "",
      phoneNumber: "",
      errors: {}
    },
    terms: { Agreed: false, readTermsOfServices: false, refundPolicy: "", termsOfServices: "", errors: {} },
    termsloading: false,
    productInfo: {
      discountCode: "",
      discountApplied: false,
      membershipTypeId: this.props.match?.params?.memId,
      price: this.props.match?.params?.price,
      membershipType: this.props.match?.params?.memType,
      sku: this.props.match?.params?.sku,
      membershipTypeDesc: (this.props.match?.params?.memType + " Membership"),
      discountPrice: "",
      discountMessage: "",
      currency: "$",
      validatedCode: "",
      errors: {}
    },
    response: { orderId: "", transactionId: "", status: "", orderTime: "", message: "" },
    showAlert: false,
    savedCards: [],
    useSavedCard : {},
  };
  paymentInfoHandler = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if (event.target.id.startsWith("cardNumberSet")) {
      value = value.trim();
      const { maxLength, id } = event.target;
      value = value.replace(/[^0-9]/g, "");
      const fieldIndex = id.substring(id.length - 1);
      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 4) {
          const nextSibling = document.querySelector(`input[id=cardNumberSet${parseInt(fieldIndex, 10) + 1}]`);
          if (nextSibling !== null) { nextSibling.focus(); }
        }
      }
    }
    if (event.target.id === "cvc") {
      value = value.trim();
      const { maxLength, id } = event.target;
      value = value.replace(/[^0-9]/g, "");
      if (value.length >= maxLength) {
        //value = value.substring(0,maxLength)
      }
    }
    if (event.target.id === "expiryDate") {
      value = value.trim();
      const { maxLength, id } = event.target;
      // value = value.replace(/[^0-9/]/g, "");
      if(value.length<=2){
        value = value.replace(/[^0-9]/g, "");
      }
      if(value.length===2&&validateNumber(value)){
        value=value.concat('/');
      }
    }
    this.setState((prevState) => ({
      paymentInfo: { ...prevState.paymentInfo, [event.target.id]: value }
    }));

  };

  billingInfoHandler = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      billingInfo: { ...prevState.billingInfo, [event.target.id]: event.target.value.trim() }
    }));
  };

  productInfoHandler = (event) => {
    event.preventDefault();
    let value = event.target.value;
    if ((/^[A-Za-z0-9_-]*$/.test(value)) && value.length <= 20) {
      this.setState((prevState) => ({
        productInfo: { ...prevState.productInfo, [event.target.id]: event.target.value.trim() }
      }));
    }
  };

  //This method is executed when the user clicks on payment type (i.e., Visa / Mastercard / Paypal)
  //This method helps to select the payment type when the user clicks on the payment icon
  cardClickHandler = (cardName) => {
    const inactiveCard = { selected: false, activeClass: "nav-link" };
    const activeCard = { selected: true, activeClass: "nav-link active" };

    const updatedPaymentMethod = { ...this.state.paymentMethod };
    const cardTypes = Object.keys(this.state.paymentMethod).map((card) => card);

    for (let card of cardTypes) {
      if (card === cardName) {
        updatedPaymentMethod[card] = activeCard;
      } else {
        updatedPaymentMethod[card] = inactiveCard;
      }
    }
    this.setState((prevState) => ({ ...this.state, paymentMethod: updatedPaymentMethod }));
  };

  //Once the user clicks on 'Confim' button on the payment page, this method will be executed
  paymentConfirmButtonHandler = () => {
    const paymentInfo = { ...this.state.paymentInfo };
    const productInfo = { ...this.state.productInfo };
    const billingInfo = { ...this.state.billingInfo };
    const terms = { ...this.state.terms };

    //Validate if there are any errors in the user entered info
    const paymentInfoErrors = ValidatePaymentInfo(paymentInfo);
    const productInfoErrors = ValidateProductInfo(productInfo);
    const billingInfoErrors = ValidateBillingInfo(billingInfo);
    const termsErrors = ValidateTerms(terms);

    this.setState((prevState) => ({
      paymentInfo: { ...prevState.paymentInfo, errors: paymentInfoErrors },
      productInfo: { ...prevState.productInfo, errors: productInfoErrors },
      billingInfo: { ...prevState.billingInfo, errors: billingInfoErrors },
      terms: { ...prevState.terms, errors: termsErrors }
    }));

    if ((paymentInfoErrors && Object.keys(paymentInfoErrors).length) ||
      (productInfoErrors && Object.keys(productInfoErrors).length) ||
      (billingInfoErrors && Object.keys(billingInfoErrors).length) ||
      (termsErrors && Object.keys(termsErrors).length)) {
      //If there are errors, then don't send card details to Payment Gateway
      return;
    } else {
      //If there are no errors, then only send card details to Payment Gateway
      this.sendCardDetailsToPaymentGW();
    }
  };

  sendCardDetailsToPaymentGW = async () => {
    //combine multiple parts of card number into single number
    const cardNumber = this.state.paymentInfo.cardNumberSet1 + this.state.paymentInfo.cardNumberSet2 +
      this.state.paymentInfo.cardNumberSet3 + this.state.paymentInfo.cardNumberSet4;

    //Card expiry date will be in MM/YYYY format. Spilt that into 2 fields (month & year)
    const [month, year] = this.state.paymentInfo.expiryDate.split("/");

    //construct the payload that needs to be sent to Payment Gateway
    const payLoad = {
      name: this.state.paymentInfo.name,
      couponcode: this.state.productInfo.discountCode,
      billAmount: this.state.productInfo.discountPrice,
      currencyCode: this.state.productInfo.currency,
      paymentInformation: {
        card: {
          cardNumber: cardNumber, expirationMonth: month, expirationYear: year, cvc: this.state.paymentInfo.cvc,
          saveCard: this.state.paymentInfo.saveCard
        },
      },
      billTo: {
        firstName: this.state.billingInfo.firstName,
        lastName: this.state.billingInfo.lastName,
        address1: this.state.billingInfo.street,
        locality: this.state.billingInfo.city,
        administrativeArea: this.state.billingInfo.state,
        postalCode: this.state.billingInfo.zipCode,
        country: this.state.billingInfo.country,
        email: this.state.billingInfo.email,
        phoneNumber: this.state.billingInfo.phoneNumber
      },
    };

    fireClickEvent({ id: this.props?.currentUser?.email }, this.props.history.location?.pathname, "payment_confirm_click", { userId: this.props?.currentUser?.email });
    //Sending Card details to payment gateway
    const response = await Payment.payment(payLoad);

    //If response code 200 is received from payment gateway
    if (response) {
      this.setState((prevState) => ({
        response: {
          orderId: response.orderId,
          transactionId: response.transactionId,
          status: response.status,
          orderTime: response.orderTime,
          message: response.message
        },
        //showAlert: true,
      }));
      this.resetCreditCardDetails();
      this.props.history.push("/profile/avatar");
    } else {
      //If response code 400 is received from payment gateway
      this.setState((prevState) => ({
        response: { orderId: "", transactionId: "", status: "", orderTime: "", message: "" },
        showAlert: false
      }));
    }
  };

  successAlertHandler = () => {
    this.setState({ showAlert: false });
  };

  resetCreditCardDetails = () => {
    this.setState((prevState) => ({
      productInfo: {
        ...prevState.productInfo,
        discountCode: "",
        discountApplied: false,
        discountPrice: "",
        discountMessage: ""
      },
      terms: { ...prevState.terms, Agreed: false, readTermsOfServices: false },
      paymentInfo: {
        name: "",
        cardNumberSet1: "", cardNumberSet2: "", cardNumberSet3: "", cardNumberSet4: "",
        expiryDate: "", cvc: "", saveCard: false, errors: {}
      },
      billingInfo: {
        firstName: "", lastName: "",
        street: "", city: "", state: "", zipCode: "", country: "",
        email: "",
        phoneNumber: "",
        errors: {}
      }
    }));
  };

  //Once the user completes entering the discount code and moved to next field, then this method will be executed
  discountValidationHandler = async (e) => {
    e.preventDefault();

    //If discount code is not available, then reset discount price and discount message
    if (!this.state.productInfo.discountCode) {
      this.setState((prevState) => ({
        productInfo: { ...prevState.productInfo, discountApplied: false, discountMessage: "", validatedCode: ""},
      }));
      return;
    }

    if(this.state.productInfo.discountCode === this.state.productInfo.validatedCode){
      //Discount Code Already Validated
      return;
    } 

    //If discount code is available, then prepare the payload and hit the API for discount code validation
    const response = await Payment.validateCoupon(this.state.cartId, this.state.productInfo.discountCode);

    if (response) {
      this.setState((prevState) => ({
        productInfo: {
          ...prevState.productInfo, discountApplied: response.success, validatedCode: this.state.productInfo.discountCode,
          //discountPrice: response.success ? response.discountedAmount : "",
          discountMessage: response.success ? COUPON_APPLIED_MESSAGE : COUPON_INVALID_MESSAGE
        }
      }));
    } else {
      this.setState((prevState) => ({
        productInfo: { ...prevState.productInfo, discountApplied: false, discountPrice: "", discountMessage: "", validatedCode: "" },
        discountMessage: COUPON_INVALID_MESSAGE
      }));
    }
  };

  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  };
  handleScroll = (event) => {
    const target = event.target;
    
    const val1 = Math.ceil(target.scrollHeight - target.scrollTop)+5;
    const val2 = Math.ceil(target.scrollHeight - target.scrollTop)-5;
    const val3 = target.clientHeight;
    if (val1 >= val3 && val2 <= val3) { // Adjust for Android as well
      //scroll to the bottom of Terms of Services
      this.setState((prevState) => ({terms: {...prevState.terms, readTermsOfServices: true}}));
  }};

  termsClickHandler = () => {
    this.setState((prevState) => ({terms: {...prevState.terms, Agreed: !this.state.terms.Agreed}}));
  };

  termsAgreedHanlder = () => {
     this.setState((prevState) => ({terms: {...prevState.terms, Agreed: true}}));
  };


  saveCardClickHandler = (event) => {
    this.setState((prevState) => ({
      paymentInfo: { ...prevState.paymentInfo, saveCard: !prevState.paymentInfo.saveCard }
    }));
  };

  getRefundPolicyHandler = async () => {
    this.setState({ termsloading: true });
    const response = await Payment.getRefundPolicy();

    if (response) {
      this.setState((prevState) => ({ terms: { ...prevState.terms, refundPolicy: response.refundPolicy } }));
      this.setState({ termsloading: false });
    } else {
      const policy = "Sorry! We are unable to fecth Refund Policy at this time. Please contact Admin";
      this.setState((prevState) => ({ terms: { ...prevState.terms, refundPolicy: policy } }));
    }
  }

  getTermsPolicyHandler = async () => {
    this.setState({ termsloading: true });
    const payLoad = { type: "payment" }
    this.setState({termsloading: true});
    const response = await Account.getTermsOfService(payLoad);
    const policy = { ...this.state.terms };
    if (response) {
      policy["termsOfServices"] = response.terms;
      this.setState({ termsloading: false });
      // this.setState((prevState) => ({ terms: { ...prevState.terms, termsOfServices: response.terms } }));
    } else {
      policy["termsOfServices"] = "Sorry! We are unable to fecth Terms of Services at this time. Please contact Admin";
    }
    this.setState((prevState) => ({ terms: { ...prevState.terms, termsOfServices: response.terms } }));
  }

  getCredentialObject = (cartId) => {
    return {
      "cartItem": {
        "sku": this.state.productInfo.sku,
        "qty": 1,
        "quote_id": cartId
      }
    }
  }

  getSavedCards = () => {
    new Promise((resolve, reject)=>{
      resolve(Payment.getSavedCards()) // get  Header
    }).then(result => {
        console.log("getSavedCards",result);
        this.setState({
          savedCards :result
        });
      }).catch(err=>{
          this.setState({
            loading :false
        });
      });
  }

  componentDidMount = async () => {
    const cartId = await Payment.createEmptyCart();
    if(cartId){
      this.getSavedCards();
      const addToCartResponse = await Payment.addToCart(this.getCredentialObject(cartId));
      if (addToCartResponse) {
        this.setState({
          productInfo: { ...this.state.productInfo, price: addToCartResponse.price },
          loading: false,
          cartId: cartId
        });
      } else {
        this.setState({
          loading: false
        })
      }
    }else{
      this.setState({
        loading: false
      })
    }
  }

  render() {
    let displayAlert = null;
    if (this.state.showAlert) {
      displayAlert = (
        <PaymentSuccessAlert response={this.state.response} showAlert={this.state.showAlert} />
      );
    }
    return (
      <React.Fragment> 
       <PopulateMetaTags  title={"E3 Expo Event-Payment"} description={"E3 Expo Event-Payment"}/>
        <WebHeader props={this.props} />
        {this.props.mobile ?
          <div className="my-3 pt-3"></div>
          : <div className="my-5 pt-3"></div>
        }
        <Container>
          <Col lg={{ span: 10, offset: 1 }}>
            <b className="cursor underline" onClick={(e) => this.goBack(e)}>
              <span className="text-lg pr-1">
                <ArrowLeft />
              </span>
                BACK
              </b>
          </Col>
          {displayAlert}
          <Row className="text-center justify-content-center align-items-center m-auto">
            <Col md="auto">
              <h4 className="text-xl text-uppercase mb-4 pb-1">
                ADD<span className="primaryColor"> PAYMENT </span>METHOD
              </h4>
            </Col>
          </Row>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="px-4">
              <PaymentMethods
                paymentMethod={this.state.paymentMethod}
                response={this.state.response}
                clickedCard={this.cardClickHandler}
                successAlertHandler={this.successAlertHandler}
                showAlert={this.state.showAlert}
              />

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="visa" role="tabpanel" aria-labelledby="visa">
                  <CreditCardDetails
                    paymentInfo={this.state.paymentInfo}
                    productInfo={this.state.productInfo}
                    paymentInfoHandler={this.paymentInfoHandler}
                    productInfoHandler={this.productInfoHandler}
                    discountValidationHandler={this.discountValidationHandler}
                  />
                </div>
                <div className="tab-pane fade" id="mastercard" role="tabpanel" aria-labelledby="mastercard">
                  ...
                </div>
                <div className="tab-pane fade" id="paypal" role="tabpanel" aria-labelledby="paypal">
                  ...
                </div>
              </div>
            </Col>
          </Row>
          {
            this.state.loading ? <Row className="text-center justify-content-center align-items-center"><GetSmallSpinner /></Row> :

              <ProductDetails
                confirmClickHandler={this.paymentConfirmButtonHandler}
                termsClickHandler={this.termsClickHandler}
                saveCardClickHandler={this.saveCardClickHandler}
                productInfo={this.state.productInfo}
                paymentInfo={this.state.paymentInfo}
                terms={this.state.terms}
                handleScroll={this.handleScroll}
                readTermsOfServices={this.state.terms.readTermsOfServices}
                termsAgreedHanlder={this.termsAgreedHanlder}
                getRefundPolicyHandler={this.getRefundPolicyHandler}
                getTermsPolicyHandler={this.getTermsPolicyHandler}
              />
          }
        </Container>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentMain));
