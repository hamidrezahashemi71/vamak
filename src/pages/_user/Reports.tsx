import React from "react";
import ReportsComp from "../../components/_user/reports/Reports";
import useDocTitle from "../../lib/customHooks";

const ReportsPage = () => {
  useDocTitle("وامک | گزارشات");
  return (
    <>
      <ReportsComp />
    </>
  );
};

export default ReportsPage;
 