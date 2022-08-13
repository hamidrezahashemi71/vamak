import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NotFoundPage from "./pages/general/NotFound";
import ForgotPassPage from "./pages/general/ForgotPass";
import ConfirmCodePage from "./pages/general/ConfirmCode";

import AdminLayout from "./layouts/AdminLayout";
import FundPage from "./pages/_admin/Fund";
import LoansPage from "./pages/_admin/Loans";
import LoginAdminPage from "./pages/_admin/LoginAdmin";
import ReportsAdminPage from "./pages/_admin/ReportsAdmin";
import UsersPage from "./pages/_admin/Users";
import SingleLoan from "./pages/_user/SingleLoan";
import Messages from "./pages/_user/Messages";

import UserLayout from "./layouts/UserLayout";
import HomePage from "./pages/_user/Home";
import LoanPage from "./pages/_user/Loan";
import LoginUserPage from "./pages/_user/LoginUser";
import MyAccountPage from "./pages/_user/MyAccount";
import ProfilePage from "./pages/_user/Profile";
import ReportsPage from "./pages/_user/Reports";
import Communications from "./pages/_admin/Communications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginUserPage />} />
        <Route path='/forgotpassword' element={<ForgotPassPage />} />
        <Route path='/confirmcode' element={<ConfirmCodePage />} />
        <Route path='/user/' element={<UserLayout />}>
          <Route path='home' element={<HomePage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='myaccount' element={<MyAccountPage />} />
          <Route path='loan' element={<LoanPage />} />
          <Route path='loan/:id' element={<SingleLoan />} />
          <Route path='userreports' element={<ReportsPage />} />
          <Route path='usermessages' element={<Messages />} />
        </Route>
        <Route path='/adminlogin' element={<LoginAdminPage />} />
        <Route path='/admin/' element={<AdminLayout />}>
          <Route path='fund' element={<FundPage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='loans' element={<LoansPage />} />
          <Route path='adminreports' element={<ReportsAdminPage />} />
          <Route path='communications' element={<Communications />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
