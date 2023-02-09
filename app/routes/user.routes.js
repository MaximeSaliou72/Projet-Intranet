const controller = require("../controllers/user.controller");
const middleware = require("../middleware/authmiddleware.js");
const uploadController = require("../controllers/upload.controller");
const multer = require("multer");
const upload = multer();

module.exports = function (app) {
  app.get("/app/user/:id", middleware.headersTest,controller.userInfo);
  app.get("/app/all",middleware.headersTest, controller.getAllUsers);
  app.post("/app/upload", upload.single("file"), uploadController.uploadProfil);
  app.put("/app/user/:id", controller.updateUser);
  app.delete("/app/user", controller.deleteUser)
  app.get("/app/allRandomUser", controller.getAllUsersRandom);
};