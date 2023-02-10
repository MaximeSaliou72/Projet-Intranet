
const jwt = require('jsonwebtoken');
const db = require("../models");
const UserModel = db.user;


module.exports.headersToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  //  onsole.log(req.headers)
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
    if (err) {
        res.locals.user = null;
        // res.cookies('jwt', '', { maxAge: 1});
        next();
    } else {
      
        const user = await UserModel.findByPk(decodedToken.id);
        res.locals.user = user.dataValues;

        console.log(res.locals.user);
        // console.log(res.locals.user);
        next();
    }
  });
}
    
module.exports.headersTokenAdmin = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  //  onsole.log(req.headers)
  jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
     user = await UserModel.findByPk(decodedToken.id)
     .then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            res.locals.user = user.dataValues;
            console.log(res.locals.user);
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Require Admin Role!"
        });
        return;
      }); 

  });   

  });
}
