import React, {useState} from "react";
import ButtonsComp from "../../components/_admin/users/Buttons";
import UsersContentComp from "../../components/_admin/users/UsersContent";

import useDocTitle from "../../lib/customHooks";

const UsersPage = () => {
  const [pagination, setpagination] = useState("0");
  useDocTitle("وامک ادمین | کاربران");
  return (
    <>
      <ButtonsComp pagination={pagination} setpagination={setpagination} />
      <UsersContentComp pagination={pagination} />
    </>
  );
};

export default UsersPage;
