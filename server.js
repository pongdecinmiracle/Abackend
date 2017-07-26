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
const omise = require('omise')

//===========================================================
const app = express()
const PORT = 3002
//===========================================================
const register = require('./route/register.routes') //register
const login = require('./route/login.routes') //login
const addtracking = require('./route/addtracking.routes')
const trackno = require('./route/trackno.routes')
const test = require('./route/test.routes')
const users = require('./route/user.routes')
const logout = require('./route/logout.routes')
const information = require('./route/information.routes')
const order = require('./route/order.routes')
const logistic = require('./route/logistic.routes')
const booking = require('./route/booking.routes')
const waiting = require('./route/waiting.routes')
// const Omise = require('./route/omise.routes')

//===========================================================

app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));


mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})


//===========================================================

app.use('/trackno', cors({ origin: 'http://localhost:3000' }))
app.use('/register', cors({ origin: 'http://localhost:3000' }))
app.use('/login', cors({ origin: 'http://localhost:3000' }))
app.use('/test', cors({ origin: 'http://localhost:3000' }))
app.use('/information', cors({ origin: 'http://localhost:3000' }))
app.use('/users', cors({ origin: 'http://localhost:3000' }))
app.use('/order', cors({ origin: 'http://localhost:3000' }))
app.use('/logistic', cors({ origin: 'http://localhost:3000' }))
app.use('/waiting', cors({ origin: 'http://localhost:3000' }))
app.use('/booking', cors({ origin: 'http://localhost:3000' }))
// app.use('/omise', cors({ origin: 'http://localhost:3000' }))

//===========================================================
// app.use('/api2', cors({ origin: 'http://localhost:3000' }))
// app.use('/logout', cors({ origin: 'http://localhost:3000' }))

//===========================================================
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());

//========================Routes===================================
app.use('/register', register) //@register
app.use('/login', login) //@login
app.use('/users', users) //@view profile
app.use('/addtracking' , addtracking) //@add tracknumber
app.use('/trackno' , trackno) //@tracking number
app.use('/logout', logout)
//=========================New==================================
app.use('/information', information)
app.use('/order', order)
app.use('/logistic', logistic)
app.use('/booking', booking)
app.use('/waiting' , waiting)
// app.use('/Omise', Omise)

//========================Test==================================
app.use('/test', test)
// app.use('/addtrack',addtrack)




app.get('/', (req, res) => {
  res.end(" Welcome :) ")
})


//===========================================================
app.listen(PORT, () => {
  console.log('localhost://3002')
})
