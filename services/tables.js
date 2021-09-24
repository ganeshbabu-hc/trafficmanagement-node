const db = require("./db");
const helper = require("../helper");
const config = require("../config");
var fs = require("fs");

async function createtables() {
  var sql = fs.readFileSync("db/createtables.sql").toString();
  const result = await db.query(sql);
  let message = "Error in creating tables";
  if (result) {
    message = "Quote created successfully";
  }
  return { message };
}

async function createdata() {
  var sql = fs.readFileSync("db/createdata.sql").toString();
  const result = await db.query(sql);
  let message = "Error in inserting data to tables";
  if (result) {
    message = "Data created successfully";
  }
  return { message };
}

async function droptables() {
    var sql = fs.readFileSync("db/droptables.sql").toString();
    const result = await db.query(sql);
    let message = "Error in inserting drop table";
    if (result) {
      message = "Table droped successfullly";
    }
    return { message };
}

async function cleardata() {
    var sql = fs.readFileSync("db/cleardata.sql").toString();
    const result = await db.query(sql);
    let message = "Error in clearing table data";
    if (result) {
      message = "Tables truncated successfullly";
    }
    return { message };
}

module.exports = {
  createtables,
  createdata,
  droptables,
  cleardata
};
