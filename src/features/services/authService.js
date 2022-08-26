// import axios from "axios";

// // TM
// // Service for http requests, send data back and sending any data in localStorage

// const API_URL = "http://localhost:3001/api/v1/user/";

// // login user
// const login = async (userData) => {
//   // userData (second argument) to send our data
//   const response = await axios.post(API_URL + "login", userData);
//   // axios puts the response in an object called data
//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }
//   return response.data;
// };

// ////////////////////////////////
// // Rien dans le loaclStorage...
// mais pourquoi sans cette fonction, l'user n'est pas effacé ?
// ////////////////////////////////
// logout user
const logout = () => {
  localStorage.removeItem("user");
};
// ////////////////////////////////

// const authService = { logout, login };
const authService = { logout };

export default authService;
