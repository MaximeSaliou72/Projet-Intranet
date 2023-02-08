const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('dotenv').config({path: './app/config/.env'})
const {checkUser, requireAuth} = require('./app/middleware/authmiddleware');
const app = express();

app.use(cors(
  {
    credentials: true, 
    origin: 'http://localhost:5173',
  }
));
// parse requests of content-type - application/json
app.use(express.json());
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./app/models");
const Role = db.role;

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome " });
// });
// db.sequelize.sync();

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
