const SequelizeMock = require('sequelize-mock');
const config = require('../config/config.js')['test'];

const dbMock = new SequelizeMock(config.database, config.username, config.password, config)

dbMock.import('../models/user');
dbMock.import('../models/userprojects');
dbMock.import('../models/project');

module.exports = dbMock;