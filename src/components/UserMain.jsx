import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/slices/authSlice";
import { useEffect } from "react";
import UserAccount from "./UserAccount";

const UserMain = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  // user is the state from the redux store
  const user = useSelector((state) => state.auth.user);

  // Form default values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  // Destructuring formData
  const { firstName, lastName } = formData;

  // Initialize dispatch
  const dispatch = useDispatch();

  // Selecting what we need from the state
  const token = useSelector((state) => state.auth.token);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState, // keep the previous state
      [e.target.name]: e.target.value, // update the value of the input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",
        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ) //
      .then((response) => {
        console.log(response.data.body); //
        dispatch(setUser(response.data.body));
        setIsEditMode(false);
      });
  };
  ///////////////////////////////////////////////////////////////

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
          <>
            <h1>
              Welcome back <br />
            </h1>
            <form>
              <div>
                <input
                  className="edit-input"
                  placeholder="Firstname"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={onChange}
                />
                <input
                  className="edit-input"
                  placeholder="Lastname"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={onChange}
                />
              </div>
              {/* Bouton sauvegarder => onclick API PUT + action redux updateUser */}
              {/* A revoir : */}
              {/* <br />
            <button className="edit-button">Cancel</button> */}
              {/* Après */}
              <button className="edit-button" onClick={handleSubmit}>
                Save
              </button>
              {/* onClick=dispatch(updateUser()) */}

              <button
                className="edit-button"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                Cancel
              </button>
            </form>
          </>
        )}
        {/* A faire : quand click, supprimer firstN lastN et remplacer par deux champs pour pouvoir éditer, bouton sauvegarder // OK */}
        {/* au clic sur sauvegarder, API PUT /user/profile : envoyer nouveaux first last, màj redux (nouvelle action updateUser, nouvelles données) // En cours  */}
        {/*  */}
        {/* Composant à part */}
      </div>
      <UserAccount />
    </div>
  );
};

export default UserMain;
