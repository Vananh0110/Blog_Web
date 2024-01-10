const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "250802",
    host: "localhost",
    database: "db_blog"
});

module.exports = pool;
