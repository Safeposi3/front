import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./UI/CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51Mu4D7KM3lYOgyCuO4vCG9uAyf6e2nvm2YZCjp5wF4twTOE88glabkXCihVwA2YCSXECgCj2FypjO1P2hUwynisb00zan9jIce"
);

function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      {/* Your component that includes the checkout form goes here */}
      <CheckoutForm />
    </Elements>
  );
}

export default Stripe;
