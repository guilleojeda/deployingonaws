1. Open the db.js file
2. Find this text:
const pool = new Pool({
  user: 'your_database_user',
  host: '127.0.0.1',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432,
});
3. Replace "127.0.0.1" with the RDS endpoint