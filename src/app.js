'use strict'

require('dotenv').config()
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const databaseConfig = require('../config/database')

const app = express()
app.set('port', process.env.PORT || 5000)

app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())
if (app.get('env') === 'development') {
	app.use(morgan('tiny'))
}

mongoose.connect(databaseConfig.uri, databaseConfig.settings)
mongoose.connection.on('error', console.log)

app.use('*', async (req, res, next) => {
	res.status(404)
	next(new Error('endpoint not exists'))
})

app.use(async (err, req, res, next) => {
	const statusCode = res.statusCode || 500
	res
		.status(statusCode)
		.json({ error: err.message })
})

module.exports = app
