require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASS,
    database: 'studentprojectdb',
    host: 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.PGUSERNAME,
    password: process.env.PGPASS,
    database: 'studentprojectdbtest',
    host: 'localhost',
    dialect: 'postgres',
    logging:false
  },
  production: {
    username: process.env,
    password: process.env,
    database: 'database_production',
    host: 'localhost',
    dialect: 'postgres'
  }
}
