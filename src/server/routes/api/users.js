import { Router } from "express";
import UserService from "../../services/UserService";
import * as httpCodes from "../../utils/httpCodes";

const users = Router();
users.post("/create", (req, res) => {
  // TODO: write validation for req.body
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    passw: req.body.password
  };

  UserService.checkUserUnique(newUser).then(result => {
    if (result.isUsernameUnique && result.isEmailUnique) {
      UserService.createUser(result.user).then(user => {
        res.status(httpCodes.OK).json({ isValid: true });
      });
    } else {
      const errors = {};

      if (!result.isEmailUnique) {
        errors.email = "Email is already taken. Try again.";
      }
      if (!result.isUsernameUnique) {
        errors.username = "Username is already taken. Try again.";
      }

      const response = {
        isValid: false,
        errors
      };
      res.status(httpCodes.OK).json(response);
    }
  });
});

export default users;
