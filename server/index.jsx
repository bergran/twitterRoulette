// const express = require('express')
import express from 'express'
import React from 'react'
import ReactDom, { renderToString } from 'react-dom'

const helloWorld = () => (<div>Hello World</div>)

const app = express()

app.get('/', (req, res) => (res.send('Hello world')))
app.get('/about/:id', (req, res) => {
  console.dir(req)
  return res.send(renderToString(<helloWorld/>))
})

app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
