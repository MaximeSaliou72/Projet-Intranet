module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      gender: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING,
      },
      birthdate: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      }
      
  
    });
  
    return User;
  };