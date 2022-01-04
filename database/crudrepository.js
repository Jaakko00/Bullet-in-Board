const mysql = require("mysql");
const Validator = require("jsonschema").Validator;
const validator = new Validator();
require("dotenv").config();

var connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
});

let connectionFunctions = {
  connect: () => {
    return new Promise((resolve, reject) => {
      connection.connect((err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  close: (callback) => {
    return new Promise((resolve, reject) => {
      connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve(callback);
        }
      });
    });
  },
  findById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM locations WHERE id = ?",
        id,
        (err, location) => {
          if (err) {
            reject(err);
          } else {
            resolve(location);
          }
        }
      );
    });
  },
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM locations WHERE id = ?",
        id,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve("One row deleted");
          }
        }
      );
    });
  },
  save: (location) => {
    return new Promise((resolve, reject) => {
      const Schema = {
        properties: {
          latitude: {
            type: "number",
            minimum: -90,
            maximum: 90,
          },
          longitude: {
            type: "number",
            minimum: -180,
            maximum: 180,
          },
        },
      };
      let validation = validator.validate(location, Schema);
      if (validation.errors.length > 0) {
        console.log(validation.errors);
      } else {
        connection.query(
          "INSERT INTO locations (latitude, longitude) VALUES (?, ?)",
          [location.latitude, location.longitude],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve("One row added");
            }
          }
        );
      }
    });
  },
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM locations", (err, locations) => {
        if (err) {
          reject(err);
        } else {
          resolve(locations);
        }
      });
    });
  },
};

module.exports = connectionFunctions;
