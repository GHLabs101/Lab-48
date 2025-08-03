const { Client } = require('pg');

(async () => {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'demo'
  });

  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Database connected successfully at:', res.rows[0].now);
    await client.end();
    process.exit(0);
  } catch (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
})();
