import React from "react";
import LoginComp from "../../components/_general/Login";
import useDocTitle from "../../lib/customHooks";

const LoginUserPage = () => {
  useDocTitle("وامک | ورود کاربر");
  return <LoginComp />;
};

export default LoginUserPage;
 