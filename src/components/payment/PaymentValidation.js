import trim from "validator/lib/trim";
import isEmpty from "validator/lib/isEmpty";

const NAME_LENGTH = 3;
const NAME_MAX_LENGTH=30;

const validateCvvRegex = (cvv) => {
  const regex = /^\d{3}$/; // american express cvv is 4 digits. All other cards cvv is 3 digits
  return regex.test(cvv);
};

const validateCreditCardRegex = (cardNumber, cardType) => {
  const acceptedCreditCards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    //americanExpress: /^3[47][0-9]{13}$/,
    discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  };

  let accepted = false;

  // loop through the keys (visa, mastercard, etc.)
  Object.keys(acceptedCreditCards).forEach((key) => {
    const regex = acceptedCreditCards[key];

    if (!accepted && regex.test(cardNumber)) {
      accepted = true;
    }
  });
  return accepted;
};

const validateExpiryDate = (expiryDate) => {
  // Check 2/4 digits (MM/YYYY)
  if (!/\d\d\/\d\d\d\d/.test(expiryDate)) {
    return 1;
  }

  // Check month is 1 to 12 inclusive
  const [month, year] = expiryDate.split("/");
  var da = new Date();
  var n = da.getFullYear();
  const Yearexpiry=n+15;
  if (month < 1 || month > 12) {
    return 2;
  }
  //Check year
  if(year>Yearexpiry){
    return 4;
  }

  // Check is this month or later
  const d = new Date();
  if (new Date(year, month, 1) < d) {
    return 3;
  }

  return 0;
};

const validateNameRegex = (name) => {
  const regex = /^[-\w ]+$/;
  return regex.test(name);
};
const validateCreditCardNameRegex = (name) =>{
  const regex =/^[A-Za-z_ ]+$/;
  return regex.test(name);
}

export const ValidatePaymentInfo = (paymentInfo) => {
  let errors = {};
  Object.keys(paymentInfo).map((fieldname) => {
    switch (fieldname) {
      case "name":
        if (isEmpty(trim(paymentInfo[fieldname]))) {
          errors[fieldname] = "Please enter Card Holder Name";
          break;
        }

        if (!validateCreditCardNameRegex(paymentInfo[fieldname].trim())) {
          errors[fieldname] = "Special characters and Numbers are not allowed";
        }

        if (paymentInfo[fieldname].trim().length < NAME_LENGTH) {
          errors[fieldname] =
            "Name must be at least " + NAME_LENGTH + " characters";
        }
        if (paymentInfo[fieldname].trim().length > NAME_MAX_LENGTH) {
          errors[fieldname] =
            "Name must be less than " + NAME_MAX_LENGTH + " characters";
        }
        break;

      case "expiryDate":
        if (isEmpty(trim(paymentInfo[fieldname]))) {
          errors[fieldname] = "Please enter Expiry Date";
          break;
        }

        if (validateExpiryDate(paymentInfo[fieldname].trim()) === 1) {
          errors[fieldname] = "Expiry Date format must be MM/YYYY";
          break;
        }
        if (validateExpiryDate(paymentInfo[fieldname].trim()) === 2) {
          errors[fieldname] = "Expiry Month must be from 01 to 12";
          break;
        }
        if (validateExpiryDate(paymentInfo[fieldname].trim()) === 3) {
          errors[fieldname] = "Expiry Date must be this month or later";
          break;
        }
        if (validateExpiryDate(paymentInfo[fieldname].trim()) === 4) {
          errors[fieldname] = "Expiry Date must be valid";
          break;
        }

        break;
      case "cvc":
        if (isEmpty(trim(paymentInfo[fieldname]))) {
          errors[fieldname] = "Please enter CVC";
          break;
        }

        if (!validateCvvRegex(paymentInfo[fieldname].trim())) {
          errors[fieldname] = "Invalid CVC";
          break;
        }
        break;
      case "cardNumberSet1":
        const creditCardNumber =
          paymentInfo["cardNumberSet1"] +
          paymentInfo["cardNumberSet2"] +
          paymentInfo["cardNumberSet3"] +
          paymentInfo["cardNumberSet4"];
        if (isEmpty(trim(creditCardNumber))) {
          errors[fieldname] = "Please enter Credit Card Number";
          break;
        }
        if (!validateCreditCardRegex(creditCardNumber.trim())) {
          errors[fieldname] = "Invalid Credit Card Number";
          break;
        }
        break;
    }
  });

  return errors;
};

export const ValidateProductInfo = (productInfo) => {
  let errors = {};

  Object.keys(productInfo).map((fieldname) => {});
  return errors;
};
export const ValidateBillingInfo = (billingInfo) => {
  let errors = {};
  Object.keys(billingInfo).map((fieldname) => {});
  return errors;
};
export const ValidateTerms = (terms) => {
  let errors = {};

  if (!terms["Agreed"]) {
    errors["Agreed"] = "Please accept Terms of Services";
  }
  return errors;
};
