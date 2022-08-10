import React from "react";
import ButtonsComp from "../../components/_admin/users/Buttons";
import UserListComp from "../../components/_admin/users/UserList";
import SearchComp from "../../components/_general/Search";

const UsersPage = () => {
  return (
    <>
      <ButtonsComp />
      <UserListComp />
      <SearchComp />
    </>
  );
};

export default UsersPage;
