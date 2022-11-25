import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
  const payments = useLoaderData();
  const { model, price } = payments;
  console.log(payments);
  return (
    <div>
      <h2 className="text-3xl">Booking for {model}</h2>
      <p className="text-xl">
        Please pay <strong>{price}</strong> for your booking complete
      </p>
    </div>
  );
};

export default Payment;
