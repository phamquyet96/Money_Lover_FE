import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/UI/HomePage";
import Logout from "./components/UI/Logout";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
import ForgotPassword from "./components/UI/ForgotPassword";
import Dashboard from "./components/UI/Dashboard/Dashboard";
import UpdateProfile from "./components/UI/UpdateProfile";
import MyWallet from "./components/UI/Wallet/MyWallet";
import WalletDetail from "./components/UI/Wallet/WalletDetail";
import AccountModal from "./components/UI/Modal/AccountModal";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth/logout" element={<Logout/>}></Route>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/register" element={<Register/>}></Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
        <Route path="/update-profile" element={<UpdateProfile/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/my-wallet" element={<MyWallet/>}></Route>
        <Route path="/wallet-detail" element={<WalletDetail/>}></Route>
        <Route path="/account" element={<AccountModal/>}></Route>

      </Routes>
  );
}

export default App;
