/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png"
  },

  gpa: {
    type: Sequelize.STRING,
  }
});

// Export the student model
module.exports = Student;