import React from "react";

const UserAccount = () => {
  return (
    <div>
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

export default UserAccount;
