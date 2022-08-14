import React from "react";
import CommentsComp from "../../components/_admin/communications/Comments";
import FormComp from "../../components/_admin/communications/Form";
import Header from "../../components/_admin/communications/Header";
import UserComunicateComp from "../../components/_admin/communications/UserComunicate";
import useDocTitle from "../../lib/customHooks";

const ReportsAdminPage = () => {
  useDocTitle("وامک ادمین | ارتباطات");
  return (
    <>
      <Header />
      <div className='flex mt-3 gap-3'>
        <UserComunicateComp />
        <FormComp />
      </div>
    </>
  );
};

export default ReportsAdminPage;
