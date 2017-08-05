const express = require('express')
const config = require('./config/config.main.js')
const path = require('path')

const app = express()
const PORT = config.port || 3000

/**
* Request that will listen
*/
app.use('/static', express.static('bundle'));

app.get('*', (req, res) => (
  res.sendFile(path.join(__dirname, '../', 'index.html'))
))

/**
* app start
*/

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`)
})
