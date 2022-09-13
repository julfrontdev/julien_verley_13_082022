import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../feature/authSlice";
import { useEffect } from "react";
import UserAccount from "./UserAccount";

const UserMain = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  // Edit name mode
  const [isEditMode, setIsEditMode] = useState(false);

  // Form default values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  // Set the form default values to the user's current values from redux store
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        lastName: user.lastName,
      });
    }
  }, [user]);

  const { firstName, lastName } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
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
      )
      .then((response) => {
        dispatch(setUser(response.data.body));
        setIsEditMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-main bg-dark">
      <div className="user-main-header">
        {user && !isEditMode && (
          <>
            <h1>
              Welcome back <br />
              {user.firstName} {user.lastName}
            </h1>
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
              <button className="edit-button" onClick={handleSubmit}>
                Save
              </button>
              <button
                className="edit-button"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                Cancel
              </button>
            </form>
          </>
        )}
      </div>
      <UserAccount />
    </div>
  );
};

export default UserMain;
