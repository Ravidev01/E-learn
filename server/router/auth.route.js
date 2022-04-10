const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");

const bcryptSalt = 10;

const User = require("../module/user.model");
const { body, validationResult } = require("express-validator");

router.post(
  "/signup",
  [
    body("username")
      .isLength({ min: 5 })
      .withMessage("Name should have min 5 character.")
      .custom((value) => {
        return User.findOne({ username: value }).then((user) => {
          if (user) {
            return Promise.reject("The username already exist");
          }
        });
      }),
    body("email")
      .isEmail()
      .withMessage("Invalid email")
      .custom((value) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("E-mail already in use");
          }
        });
        // body('email').custom(value => {
        //     return User.findOne({value}).then(user => {
        //       if (user) {
        //         return Promise.reject('E-mail already in use');
        //       }
        //     });
      }),
    body("password")
      .isLength({ min: 4 })
      .withMessage("Password min 4 characters")
      .matches(/\d/)
      .withMessage("Password must contain a number"),
    body("role")
      .isIn(["Student", "Teacher"])
      .withMessage("YOu must choose a role"),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, email, role } = req.body;

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
      role,
    });

    newUser
      .save()
      .then(() => res.json("User added!"))
      .catch((err) => res.status(400).json("Error" + err));
  }
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: "Error authenticating user" });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) =>
      err
        ? res.status(500).json({ message: "Session Error" })
        : res.status(200).json(theUser)
    );
  })(req, res, next);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Logout Success!" });
});

router.get("/loggedIn", (req, res) =>
  req.isAuthenticated()
    ? res.status(200).json(req.user)
    : res.status(403).json({ message: "Unauthorized" })
);

module.exports = router;
