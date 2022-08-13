import React from "react";
import ProfileComp from "../../components/_user/profile/Profile";
import useDocTitle from "../../lib/customHooks";

const ProfilePage = () => {
  useDocTitle("وامک | پروفایل");
  return <ProfileComp />;
};

export default ProfilePage;
 