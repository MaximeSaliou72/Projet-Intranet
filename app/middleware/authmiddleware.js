
const jwt = require('jsonwebtoken');
const db = require("../models");
const UserModel = db.user;


module.exports.headersTest = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
   console.log(req.headers)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
    if (err) {
        res.locals.user = null;
        // res.cookies('jwt', '', { maxAge: 1});
        next();
    } else {

        const user = await UserModel.findOne(decodedToken);
        res.locals.user = user.dataValues;

        console.log(res.locals.user);
        // console.log(res.locals.user);
        next();
    }
  });
}
    

