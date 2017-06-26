const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const compression = require('compression');
const morgan = require('morgan');
const config = require('./config').mongo
const validate = require('express-validation')
const http = require('http')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const API_KEY = '533a0476-6493-48e0-9c80-329dc76c6082';
const Aftership = require('./route/lib/aftership')(API_KEY);
// const session = require('cookie-session')
const app = express()

const auth = require('./route/auth.routes') //register
const login = require('./route/login.routes') //login
const logout = require('./route/logout.routes') //login
const api = require('./route/api.routes')

// app.use(cookieSession({
//   name: 'session',
//   keys: ['secret_key1'],['secret_key2']
// }));


mongoose.connect(`mongodb://${config.host}:${config.port}/${config.database}`, (err) => {
  if (err) console.log('connect fail')
  else console.log('connect success')
})
// app.use('/api'), cors({origin: 'http://localhost:3000' })
// app.use('/auth', cors({ origin: 'http://localhost:3000' }))
// app.use('/login', cors({ origin: 'http://localhost:3000' }))
// app.use('/logout', cors({ origin: 'http://localhost:3000' }))


app.use(bodyParser.json())
// app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))

// app.use(function(req,res,next){
// 	res.header('Access-Control-Allow-Origin',"*");
// 	res.header('Access-Control-Allow-Origin',"GET,PUT,POST,,DELETE");
// 	res.header('Access-Control-Allow-Origin','Content-Type');
// 	next();

// })
app.use('/auth', auth) //register
app.use('/login', login) //login
app.use('/api' , api)

app.get('/', (req, res) => {
  res.end("Welcome :)")
})

app.listen(3000, () => {
  console.log('localhost://3000')
})
