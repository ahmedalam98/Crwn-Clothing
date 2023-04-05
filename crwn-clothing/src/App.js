import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const App = () => {
  // Routes ---> allowing app to register root level components
  // Route --> When the URL matches / (empty param), render the <Home/> component
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
};

export default App;
