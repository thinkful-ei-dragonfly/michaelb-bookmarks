require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const validateBearerToken = require('./validate-bearer-token')
const errorHandler = require('./error-handler')
const bookmarkRouter = require('./bookmark/bookmark-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'common'
  : 'dev';

app.use(morgan(morganOption))
app.use(cors())
app.use(helmet())
app.use(express.json());
app.use(validateBearerToken)

app.use(bookmarkRouter)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use(errorHandler)

module.exports = app