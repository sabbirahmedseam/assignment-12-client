import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutFormOut from "./CheckOutFormOut";

const stripePromise = loadStripe(process.env.REACT_APP_PK);
const Payment = () => {
  const booking = useLoaderData();
  const { model, price } = booking;
  console.log(booking);
  return (
    <div>
      <h2 className="text-3xl">Booking for {model}</h2>
      <p className="text-xl">
        Please pay <strong>{price}</strong> for your booking complete
      </p>
      <div className="w-1/2 my-12">
        <Elements stripe={stripePromise}>
          <CheckOutFormOut booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
