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
      connection.query("SELECT * FROM posts WHERE id = ?", id, (err, post) => {
        if (err) {
          reject(err);
        } else {
          resolve(post);
        }
      });
    });
  },
  deleteById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("DELETE FROM posts WHERE id = ?", id, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve("One row deleted");
        }
      });
    });
  },
  save: (post) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO posts (content, create_time) VALUES (?, ?)",
        [post.content, Date.now()],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve("One row added");
          }
        }
      );
    });
  },
  findAll: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM posts", (err, posts) => {
        if (err) {
          reject(err);
        } else {
          resolve(posts);
        }
      });
    });
  },
};

module.exports = connectionFunctions;
