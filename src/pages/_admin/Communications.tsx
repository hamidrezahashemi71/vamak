import React from "react";
import CommentsComp from "../../components/_admin/communications/Comments";
import FormComp from "../../components/_admin/communications/Form";
import UserComunicateComp from "../../components/_admin/communications/UserComunicate";
import useDocTitle from "../../lib/customHooks";

const ReportsAdminPage = () => {
  useDocTitle("وامک ادمین | گزارشات");
  return (
    <>
      <UserComunicateComp />
      <FormComp />
      <CommentsComp />
    </>
  );
};

export default ReportsAdminPage;
