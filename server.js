const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const compression = require('compression');
const morgan = require('morgan');
const config = require('./config/config').mongo
const validate = require('express-validation')
const http = require('http')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')

//===========================================================
const app = express()
const PORT = 3002
//===========================================================
const auth = require('./route/auth.routes') //register
const login = require('./route/login.routes') //login
// const logout = require('./route/logout.routes') //login
const api = require('./route/api.routes')
const api1 = require('./route/api1.routes')
const token = require('./route/token.routes')
const test = require('./route/test.routes')

//===========================================================

app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));


mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})
require('./config/passport')(passport);

//===========================================================

app.use('/api1', cors({ origin: 'http://localhost:3000' }))
// app.use('/api2', cors({ origin: 'http://localhost:3000' }))
app.use('/auth', cors({ origin: 'http://localhost:3000' }))
// app.use('/login', cors({ origin: 'http://localhost:3001' }))
// app.use('/logout', cors({ origin: 'http://localhost:3001' }))

//===========================================================
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

//===========================================================
app.use('/auth', auth) //register
app.use('/login', login) //login
app.use('/api' , api)
app.use('/api1' , api1)
app.use('/token', token)
app.use('/test', test)



app.get('/', (req, res) => {
  res.end(" Welcome :) ")
})


//===========================================================
app.listen(PORT, () => {
  console.log('localhost://3002')
})
