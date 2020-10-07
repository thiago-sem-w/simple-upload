'use strict'

const { Router } = require('express')
const multer = require('multer')

const multerConfig = require('../config/multer')

const upload = multer(multerConfig)

const router = Router()

router.post('/', upload.single('image'), async (req, res) => {
	res.json({ message: 'successfully' })
})

module.exports = router
