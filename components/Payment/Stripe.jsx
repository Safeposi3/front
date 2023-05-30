import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51Mu4D7KM3lYOgyCuO4vCG9uAyf6e2nvm2YZCjp5wF4twTOE88glabkXCihVwA2YCSXECgCj2FypjO1P2hUwynisb00zan9jIce"
);

function Stripe({ amount, reservationId, openStripe }) {
  return (
    <Elements stripe={stripePromise}>
      {/* Your component that includes the checkout form goes here */}
      <CheckoutForm
        amount={amount}
        reservationId={reservationId}
        openStripe={openStripe}
      />
    </Elements>
  );
}

export default Stripe;
