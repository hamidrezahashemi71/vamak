import React from "react";
import LoginComp from "../../components/_general/Login";
import useDocTitle from "../../lib/customHooks";

const LoginAdminPage = () => {
  useDocTitle("وامک | ورود ادمین");
  return <LoginComp />;
};

export default LoginAdminPage;
 