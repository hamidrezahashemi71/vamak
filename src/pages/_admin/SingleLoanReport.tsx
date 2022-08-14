import React from "react";
import Header from "../../components/_admin/singleloan/Header";
import SingleLoanForm from "../../components/_admin/singleloan/SingleLoanForm";
import SingleLoanStats from "../../components/_admin/singleloan/SingleLoanStats";

const SingleLoanReport = () => {
  return (
    <>
      <Header />
      <div className='flex gap-6 mt-8'>
        <SingleLoanForm />
        <SingleLoanStats />
      </div>
    </>
  );
};

export default SingleLoanReport;
