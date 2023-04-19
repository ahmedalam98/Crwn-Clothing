import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";

import { store, persistor } from "./store/store";
import { stripePromise } from "./utils/stripe/stripe.utils";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

// React App will convert Sass files into CSS
import "./index.scss";

// PersistGate delays the rendering of app UI until the persisted state has been retrieved and saved to the redux store
// setting loading to null, tell PersistGate to render nothing while the persisted state is being loaded
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
