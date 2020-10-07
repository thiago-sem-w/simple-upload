'use strict'

const path = require('path')

const databaseConfig = require('./database')
const multerConfig = require('./multer')

module.exports = {
	uploadsDir: path.resolve(__dirname, '..', 'uploads'),
	databaseConfig,
	multerConfig
}
