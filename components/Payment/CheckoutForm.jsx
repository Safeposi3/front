import React, { useState, useEffect } from "react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CheckoutForm({ amount, reservationId, openStripe }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [cardType, setCardType] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (openStripe[0]) {
      setOpen(true);
    }
  }, [openStripe]);
  const handleClose = () => {
    setOpen(false);
  };
  const handleCardType = (e) => {
    setCardType(e.brand);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      const response = await fetch(
        "http://127.0.0.1:8000/api/create-payment/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethodId: paymentMethod.id,
            amount: amount, // amount in cents
            reservationId: reservationId,
          }),
        }
      );

      const data = await response.json();

      if (data.client_secret) {
        const confirm = await stripe.confirmCardPayment(data.client_secret);
        try {
          if (confirm.paymentIntent.status === "succeeded") {
            Swal.fire("Success!", "Payment confirmed!", "success");
            //router.push("/");
          } else {
            Swal.fire("Error!", "Payment failed!", "error");
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: confirm.error.message || "Payment failed.",
            customClass: {
              container: "sweetalert-container",
            },
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: data.error || "Payment failed.",
          customClass: {
            container: "sweetalert-container",
          },
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        customClass: {
          container: "sweetalert-container",
        },
      });
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true}>
        <DialogContent className="max-w bg-white shadow-md overflow-hidden p-0 relative">
          {cardType && (
            <img
              src={`/${cardType.toLowerCase()}-logo.png`}
              alt={cardType}
              className="card-type-logo"
            />
          )}
          <div className="px-6 py-4 bg-gray-900 text-white">
            <h1 className="text-lg font-bold">Credit Card</h1>
          </div>
          <div className="px-6 py-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>

            <div className="mb-4 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <CardNumberElement
                options={CARD_ELEMENT_OPTIONS}
                id="cardNumber"
                onChange={handleCardType}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="expiration-date"
              >
                Expiration Date
              </label>
              <div className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <div className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
              </div>
            </div>

            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              type="button"
              onClick={handleSubmit}
              disabled={!stripe}
            >
              Pay Now
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CheckoutForm;
