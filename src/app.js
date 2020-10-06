'use strict'

require('dotenv').config()
const express = require('express')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.set('port', process.env.PORT || 5000)

app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())
if (app.get('env') === 'development') {
	app.use(morgan('tiny'))
}

module.exports = app
