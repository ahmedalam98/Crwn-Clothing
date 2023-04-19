import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { FormContainer } from "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentButton, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
