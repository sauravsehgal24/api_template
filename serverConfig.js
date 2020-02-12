// Dependency imports
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

// Required middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Server imports
const api = require('./src/api/rootRouter')

// Enable all routes
app.use('/api',api)

module.exports = app
