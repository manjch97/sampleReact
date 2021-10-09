import React from "react";
import ReactDOM from "react-dom"

const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

export default class PaypalComponent extends React.Component {
    createOrder(data, actions) {

        // var SETEC_URL = 'https://mystore.com/api/paypal/set-express-checkout';
        // return fetch(SETEC_URL).then(function(res) {
        //     return res.json();
        // }).then(function(data) {
        //     return data.token;
        // });
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "10.10",
                    },
                },
            ],
        });

    }

    onApprove(data, actions) {
        console.log("$$$$$$$$$$$$$--------Paypal transaction Approved...",data)
        //    return actions.order.capture();
    }

    onCancel(data, actions) {
        console.log("**************--------=======Paypal transaction cancelled...",data);
    }

    onError(data, actions) {
        console.log("###############--------Paypal transaction Error...",data)
    }

    render() {
        return (
            <PayPalButton
                createOrder={(data, actions) => this.createOrder(data, actions)}
                onApprove={(data, actions) => this.onApprove(data, actions)}
                onCancel={(data, actions) => this.onCancel(data, actions)}
                onError={(data, actions) => this.onError(data, actions)}
            />
        );
    }
}