const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const compression = require('compression');
const morgan = require('morgan');
const config = require('./config').mongo
const validate = require('express-validation')
const http = require('http')
const cookieParser = require('cookie-parser')
const app = express()

const auth = require('./route/auth.routes')
const login = require('./route/login.routes')



mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/auth', auth)
app.use('/login', login)

app.get('/', (req, res) => {
  res.end("Welcome :)")
})

app.listen(3000, () => {
  console.log('ex port 3000')
})
