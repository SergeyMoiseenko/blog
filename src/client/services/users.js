import axios from "axios";

function createUser(username, email, password) {
  return axios
    .post("/api/users/create", {
      username,
      email,
      password
    })
    .then(response => {
      if (response.data.isValid) {
        return {
          isCreated: true
        };
      }

      return {
        isCreated: false,
        usernameMessage: response.data.errors.username,
        emailMessage: response.data.errors.email
      };
    })
    .catch(error => {
      if (error.response) {
        return {
          isCreated: false
        };
      } else if (error.request) {
        // No response was received
      } else {
        throw error;
      }

      return undefined;
    });
}

export default {
  createUser
};
