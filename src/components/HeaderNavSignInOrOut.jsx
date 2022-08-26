import React from "react";
import { useSelector } from "react-redux";
import HeaderNavSignIn from "./HeaderNavSignIn";
import HeaderNavSignOut from "./HeaderNavSignOut";

const HeaderNavSignInOrOut = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user); //

  return (
    <>
      {user ? (
        <>
          <HeaderNavSignOut />
        </>
      ) : (
        <>
          <HeaderNavSignIn />
        </>
      )}
    </>
  );
};

export default HeaderNavSignInOrOut;
