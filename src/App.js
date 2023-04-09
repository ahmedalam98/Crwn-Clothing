import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";

const App = () => {
  // Routes ---> allowing app to register root level components
  // Route --> when the URL matches / (empty param), render the <Home/> component
  return (
    <Routes>
      {/* persistent navigation bar using Outlet + nesting routes */}
      <Route path="/" element={<Navigation />}>
        {/* index ---> we have a parental component but also render whatever the **base** inside it  */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
