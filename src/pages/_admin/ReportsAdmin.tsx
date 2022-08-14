import React from "react";
import ReportsComp from "../../components/_user/reports/Reports";
import useDocTitle from "../../lib/customHooks";

const ReportsAdminPage = () => {
  useDocTitle("وامک ادمین | گزارشات ");
  return <ReportsComp />;
};

export default ReportsAdminPage;
