import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App = () => {
  // Routes ---> allowing app to register root level components
  // Route --> when the URL matches / (empty param), render the <Home/> component
  return (
    <Routes>
      {/* persistent navigation bar using Outlet + nesting routes */}
      <Route path="/" element={<Navigation />}>
        {/* index ---> we have a parental component but also render whatever the **base** inside it  */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
