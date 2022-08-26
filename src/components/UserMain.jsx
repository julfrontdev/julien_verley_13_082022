import React from "react";
import { useSelector } from "react-redux";

const UserMain = () => {
  // const firstName = useSelector((state) => state.auth.user.firstName);
  // const lastName = useSelector((state) => state.auth.user.lastName);

  //////////////////////////////
  // const { user } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  console.log({ user });
  // Antoine, user s'affiche (console), mais pas possible d'avoir le rendu dynamique...
  //////////////////////////////

  return (
    <div className="user-main bg-dark">
      <div className="user-main-header">
        <h1>
          Welcome back <br />
          {/* dynamic datas */}
          {/* {user.firstName} */}
          {/* {user.lastName} */}
          {/* static datas */}
          static-firstName* static-lastName*
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="user-account">
        <div className="user-account-wrapper">
          <h3 className="user-account-title">Argent Bank Checking (x8349)</h3>
          <p className="user-account-amount">$2,082.79</p>
          <p className="user-account-amount-description">Available Balance</p>
        </div>
        <div className="user-account-content-wrapper cta">
          <button className="user-account-transaction-button">
            View transaction
          </button>
        </div>
      </section>
      <section className="user-account">
        <div className="user-account-wrapper">
          <h3 className="user-account-title">Argent Bank Savings(x6712)</h3>
          <p className="user-account-amount">$10,928.42</p>
          <p className="user-account-amount-description">Available Balance</p>
        </div>
        <div className="user-account-content-wrapper cta">
          <button className="user-account-transaction-button">
            View transaction
          </button>
        </div>
      </section>
      <section className="user-account">
        <div className="user-account-wrapper">
          <h3 className="user-account-title">
            Argent Bank Credit Carrd (x8349)
          </h3>
          <p className="user-account-amount">$184.30</p>
          <p className="user-account-amount-description">Current Balance</p>
        </div>
        <div className="user-account-content-wrapper cta">
          <button className="user-account-transaction-button">
            View transaction
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserMain;
