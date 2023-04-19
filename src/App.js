import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component.jsx";

import { checkUserSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  // it's in app.js as the every other routes require the user-data
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  // Routes ---> allowing app to register root level components
  // Route --> when the URL matches / (empty param), render the <Home/> component
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* index ---> we have a parental component but also render whatever the **base** inside it  */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
