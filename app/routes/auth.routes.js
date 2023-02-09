const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const middleware = require("../middleware/authmiddleware.js");
module.exports = function(app) {
  

  app.post(
    "/app/auth/signup",
    [
      verifySignUp.checkDuplicateEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/app/auth/signin",middleware.headersTest, controller.signin);

  app.get("/logout", controller.logout);

};