const {
  Pool
} = require('pg');
const db = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'SimpleAWSDB',
  password: 'veryverysecret',
  port: 5432,
});

exports.db = db;