const express = require('express');
const router = express.Router();
const tables = require('../services/tables');

/* GET create tables. */
router.get('/createtables', async function(req, res, next) {
  try {
    res.json(await tables.createtables());
  } catch (err) {
    console.error(`Error while getting createtables `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* GET create a dyummy data. */
router.get('/createdata', async function(req, res, next) {
  try {
    res.json(await tables.createdata());
  } catch (err) {
    console.error(`Error while getting createtables `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* GET drop all tables. */
router.get('/droptables', async function(req, res, next) {
  try {
    res.json(await tables.droptables());
  } catch (err) {
    console.error(`Error while getting createtables `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* GET clear tables data. */
router.get('/cleardata', async function(req, res, next) {
  try {
    res.json(await tables.cleardata());
  } catch (err) {
    console.error(`Error while getting cleardata `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
