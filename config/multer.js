'use strict'

const path = require('path')

const multer = require('multer')

const { uploadsDir } = require('./index')

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadsDir)
	},
	filename: (req, file, cb) => {
		cb(null, `${ file.fieldname } - ${ Date.now() }`)
	}
})

function fileFilter(req, file, cb) {
	console.log('file', file)
	cb(null, false)
}

module.exports = {
	storage, fileFilter
}
