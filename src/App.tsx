import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import { handleRegister } from "./features/auth/authHandlers";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp onSubmit={handleRegister} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
