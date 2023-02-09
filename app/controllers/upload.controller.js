const db = require("../models");
const UserModel = db.user;
const sharp = require("sharp");
const { uploadErrors } = require("../utils/errors.utils");



module.exports.uploadProfil = async (req, res) => {
    //console.log(req.file);
    //renome le fichier avec extension .jpg
    const fileName = req.body.name +".jpg"; 
    try {
      if (
        req.file.mimetype != "image/jpg" &&
        req.file.mimetype != "image/png" &&
        req.file.mimetype != "image/jpeg"
      )
      throw Error("invalid file");

      if (req.file.size > 500000) throw Error("max size");
    } catch (err) {
      const errors = uploadErrors(err);
      return res.status(201).json({ errors });
    }
  
    try {
      await sharp(req.file.buffer)
        .resize({ width: 150, height: 150 }) 
        .toFile(`${__dirname}/../../client/public/uploads/profil/${fileName}`
        );
      res.status(200).send("Photo de profil chargé avec succés");
    } catch (err) {
      res.status(400).send(err);
    }
    try{
        await UserModel.findByPk(req.body.userId)
            if (UserModel != null) {
                UserModel.update(
                    {photo: "./uploads/profil/" + fileName},
                    { where: { id: req.body.userId }}
                    )
                }   
            } catch (err) {
              console.log(err);
        }
    };