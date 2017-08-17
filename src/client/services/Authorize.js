import axios from "axios";

function authorize(username, password) {
  return axios
    .post("/auth/login", {
      username,
      password
    })
    .then(response => {
      switch (response.status) {
        case 200: {
          return {
            isAuthorized: true,
            user: {
              id: response.data.id,
              username: response.data.username
            }
          };
        }
        default:
          return {
            isAuthorized: false
          };
      }
    })
    .catch(error => {
      if (error.response) {
        return {
          isAuthorise: false
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
  authorize
};
