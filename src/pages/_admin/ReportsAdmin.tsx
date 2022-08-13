import React from "react";
import CommentsComp from "../../components/_admin/reports/Comments";
import CommunicationsComp from "../../components/_admin/reports/Communications";
import FormComp from "../../components/_admin/reports/Form";
import UserComunicateComp from "../../components/_admin/reports/UserComunicate";
import useDocTitle from "../../lib/customHooks";

const ReportsAdminPage = () => {
  useDocTitle("وامک ادمین | گزارشات");
  return (
    <>
      <CommunicationsComp />
      <UserComunicateComp />
      <FormComp />
      <CommentsComp />
    </>
  );
};

export default ReportsAdminPage;
