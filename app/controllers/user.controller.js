const db = require("../models");
const UserModel = db.user;
// const userModel = require("../models/user.model");
// const config = require("../config/auth.config");

const Op = db.Sequelize.Op;

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.findAll({
    attributes: { exclude: ["password"] },
  });
  res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
  UserModel.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((id) => {
      if (!id) {
        return res.status(200).send({ errorsid: "id Not found." });
      }
      res.status(200).send({
        id: id.id,
        gender: id.gender,
        firstname: id.firstname,
        lastname: id.lastname,
        email: id.email,
        photo: id.photo,
        phone : id.phone,
        birthdate: id.birthdate,
        city: id.city,
        country:id.country,
        category:id.category
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

module.exports.updateUser = async (req, res) => {

  try{
    await UserModel.findByPk(req.params.id)
    
        if (UserModel != null) {
          UserModel.update(
            { gender: req.body.gender,
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              phone: req.body.phone,
              birthdate: req.body.birthdate,
              city: req.body.city,
              country: req.body.country,
              photo: req.body.photo,
              category: req.body.category
            },
            // { phone: req.body.phone },   
            { where: { id: req.params.id } }
            );  
            res.status(200).send({ 
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              // phone: req.body.phone
            });
            }    
        } catch (err) {
          console.log(err)
          res.status(500).send({ message: err });
    }
};

module.exports.getAllUsersRandom = async (req, res) => {
  const users = await UserModel.findAll({
    attributes: { exclude: ["password"] },
  });
  res.status(200).json(users);
};

module.exports.deleteUser = async (req, res) => {
  UserModel.destroy({
    where: {
      email: req.body.email
    },
  })
  .then((email) => {    
    if (!email) {
    return res.status(200).send({ errorsid: "email Not found." });
  }
    res.status(200).send({ email: "email delete." });
   })
    
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};