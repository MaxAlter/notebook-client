import axios from "axios";


// get all comments
export const getAllUser = () =>
  axios
    .get("https://pacific-sands-02730.herokuapp.com/api/all")
    .then((res) => res.data);

    
//  write a new comment
export const postNewUser = (user) =>
  axios.post("https://pacific-sands-02730.herokuapp.com/api/new", user);
