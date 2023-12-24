1. Open the db.js file
2. Find this text:
const pool = new Pool({
  user: 'your_database_user',
  host: 'your_database_endpoint',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432,
});
3. Replace it with this:
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});
