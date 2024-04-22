import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import DashBoard from "./components/DashBoard";
import TransferMoney from "./components/TransferMoney";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import PageNotExists from "./components/PageNotExists";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          <Route path="/send" element={<PrivateRoute />}>
            <Route path="/send" element={<TransferMoney />} />
          </Route>
          <Route path="*" element={<PageNotExists />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
