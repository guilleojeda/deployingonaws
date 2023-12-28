const { db } = require('./db.js');
// Function to create the table if it does not exist
async function createTable() {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS data (
        ID SERIAL PRIMARY KEY,
        value TEXT NOT NULL
      );
    `;

    await db.query(createTableQuery);
    console.log("Table created successfully or already exists.");
  } catch (err) {
    console.error('Error creating table:', err);
  }
}

// Function to insert initial data
async function insertInitialData() {
  try {
    const initialDataCheck = await db.query('SELECT COUNT(*) FROM data');
    if (initialDataCheck.rows[0].count === '0') {
      // Insert initial data.
      const initialDataQuery1 = `
        INSERT INTO data (value)
        VALUES ('Thank you for viewing the course!');
      `;

      await db.query(initialDataQuery1);

      console.log("Initial data inserted successfully.");
      const checkInsertion = await db.query('SELECT COUNT(*) FROM data');
      console.log('Current number of rows: ' + checkInsertion.rows[0].count);
    } else {
      console.log("Initial data already present, skipping insertion.");
    }
  } catch (err) {
    console.error('Error inserting initial data:', err);
  }
}

createTable().then(insertInitialData);

