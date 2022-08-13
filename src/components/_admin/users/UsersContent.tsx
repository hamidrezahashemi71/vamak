import React from "react";
import CheckoutReq from "./CheckoutReq";
import CreateUser from "./CreateUser";
import PaybackDelay from "./PaybackDelay";
import UserList from "./UserList";

interface Props {
  pagination: string;
}

const UsersContentComp: React.FC<Props> = ({pagination}) => {
  if (pagination === "0")
    return (
      <div className='w-full bg-white rounded-md h-full mt-6'>
        <UserList />
      </div>
    );

  if (pagination === "1")
    return (
      <div className='w-full bg-white rounded-md h-full mt-6'>
        <CreateUser />
      </div>
    );

  if (pagination === "2")
    return (
      <div className='w-full bg-white rounded-md h-full mt-6'>
        <CheckoutReq />
      </div>
    );

  if (pagination === "3")
    return (
      <div className='w-full bg-white rounded-md h-full mt-6'>
        <PaybackDelay />
      </div>
    );
  return <div></div>;
};

export default UsersContentComp;
