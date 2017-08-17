import express from "express";
import passport from "passport";

const router = express.Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  const user = {
    username: req.user.username,
    id: req.user.id,
    created: req.user.created
  };

  res.send(JSON.stringify(user));
});

export default router;
