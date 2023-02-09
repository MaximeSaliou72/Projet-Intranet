const db = require("../models");

const { signUpErrors, signInErrors } = require("../utils/errors.utils");
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const maxAge = 3 * 60 * 24 * 60 * 1000;

const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    gender: req.body.gender,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    birthdate: req.body.birthdate,
    city: req.body.city,
    country: req.body.country,
    photo: req.body.photo,
    category: req.body.category,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch((err) => {
      const errors = signUpErrors(err);
      res.status(200).send({ errors });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(200).send({ errorsemail: "email Not found." });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(200).send({
          errorspassword: "Invalid Password!",
        });
      }

    
      const accessToken = generateAccessToken(user);
      const authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        
        res.send({
          accessToken,
        });
        //return res.status(200).json('auth_ok');
        // res.status(200).send({
        //   id: user.id,
        //   username: user.username,
        //   email: user.email,
        //   roles: authorities
        // });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.logout = (req, res) => {
  jwt.destroy(accessToken)
  res.redirect("/");
};
