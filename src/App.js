import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/sign-in" element={<Signin/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
