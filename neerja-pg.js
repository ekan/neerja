const { Client } = require('pg')
const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABAASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log('hello pg', res.rows[0].message) // Hello world!
// await client.end()
