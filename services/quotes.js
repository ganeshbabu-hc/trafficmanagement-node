const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    'SELECT id, quote, author FROM quote OFFSET $1 LIMIT $2', 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

function validateCreate(quote, author) {
  let messages = [];



  if (!quote) {
    messages.push('Quote is empty');
  }

  if (!author) {
    messages.push('Author is empty');
  }

  if (quote && quote.length > 255) {
    messages.push('Quote cannot be longer than 255 characters');
  }

  if (author && author.length > 255) {
    messages.push('Author name cannot be longer than 255 characters');
  }

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

async function create(quote, author){
  validateCreate(quote, author);

  const result = await db.query(
    'INSERT INTO quote(quote, author) VALUES ($1, $2) RETURNING *',
    [quote, author]
  );
  let message = 'Error in creating quote';

  if (result.length) {
    message = 'Quote created successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create
}
