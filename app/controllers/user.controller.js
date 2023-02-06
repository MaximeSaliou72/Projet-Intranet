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
        username: id.username,
        email: id.email,
        picture: id.picture,
        bio: id.bio,
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
            { bio: req.body.bio }, 
            { where: { id: req.params.id } }
            );  
            }    
        } catch (err) {
          console.log(err)
          res.status(500).send({ message: err });
    }
};