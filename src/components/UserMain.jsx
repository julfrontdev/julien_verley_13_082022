import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserMain = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const user = useSelector((state) => state.auth.user);
  console.log({ user }); //

  return (
    <div className="user-main bg-dark">
      <div className="user-main-header">
        {/* Vérifier que user pour récupérer les données dans Redux store via userSelector */}
        {user && !isEditMode && (
          <>
            <h1>
              Welcome back <br />
              {user.firstName} {user.lastName}
            </h1>
            {/* Après */}
            <button
              className="edit-button"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              Edit Name
            </button>
          </>
        )}
        {isEditMode && (
          <div>
            <h1>
              Welcome back <br />
            </h1>
            <input
              className="edit-input"
              type="text"
              name="firstname"
              placeholder="Firstname"
            />
            <input
              className="edit-input"
              type="text"
              name="lastname"
              placeholder="Lastname"
            />
            {/* Bouton sauvegarder => onclick API PUT + action redux updateUser */}
            {/* A revoir : */}
            {/* <br />
            <button className="edit-button">Cancel</button> */}
            {/* Après */}
            <button className="edit-button">Save</button>
            <button
              className="edit-button"
              onClick={() => setIsEditMode(!isEditMode)}
            >
              Edit Name
            </button>
          </div>
        )}
        {/* A faire : quand click, supprimer firstN lastN et remplacer par deux champs pour pouvoir éditer , bouton sauvegarder  */}
        {/* au clic sur sauvegarder, API PUT /user/profile : envoyer nouveaux first last, màj redux (nouvelle action updateUser, nouvelles données)  */}
        {/* Avant */}
        {/* <button
          className="edit-button"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          Edit Name
        </button> */}
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
