import Promise from "bluebird";
import { User } from "../models";

function findById(id) {
  return User.find({ _id: id }).limit(1).exec().get(0);
}

function findByUsername(username) {
  return User.find({ username }).limit(1).exec().get(0);
}

function findByEmail(email) {
  return User.find({ email }).limit(1).exec().get(0);
}

function checkUserUnique(user) {
  return Promise.join(
    findByUsername(user.username),
    findByEmail(user.email),
    (userByUsername, userByEmail) => ({
      isUsernameUnique: userByUsername === undefined,
      isEmailUnique: userByEmail === undefined,
      user
    })
  );
}

function authentication(username, passw) {
  return findByUsername(username).then(user =>
    Promise.join(
      user && user.comparePassw(passw),
      user,
      (isAuthorized, _user) => (isAuthorized ? _user : undefined)
    )
  );
}

function findOne(user) {
  return User.find(user).limit(1).exec().then(users => users[0]);
}

function createUser(user) {
  // TODO: Write error handling
  return User.create(user);
}

export default {
  findOne,
  findById,
  findByUsername,
  findByEmail,
  authentication,
  createUser,
  checkUserUnique
};
