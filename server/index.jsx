import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import config from './config/config.main.js'

const app = express()
const PORT = config.port

/**
* Request that will listen
*/

app.get('/', (req, res) => (
  res.send('Hello world')
))

/**
* app start
*/

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`)
})
