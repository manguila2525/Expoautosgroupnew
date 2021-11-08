
if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
const express = require('express')
const router = express.Router();
const cors = require('cors');
const morgan = require('morgan')
const app = express()
const path = require('path')
const multer = require('multer')
const { mongoose } = require('./database')
//SETTINGS
const port = 5000
app.set('port', process.env.PORT || port)
console.log(path.join(__dirname, '../Frontend/src/assets/img'))
//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
const storage = multer.diskStorage({
  // destination: path.join(__dirname, '../Frontend/public/img'),
  destination: path.join(__dirname, 'public/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }

})
app.use(multer({
  storage,
  // dest: path.join(__dirname, 'public/img/uploads')
}).single('file'));
app.use(express.json());
app.use(cors());
// app.use('/public', express.static(`${__dirname}/storage/imgs`))

//ROUTES
app.use('/', router.get('/', (req,res) =>{
  res.json({status: "good"})
}))
app.use('/api/autos', require('./routes/autos.routes'))
app.use('/api/promotores', require('./routes/promotores.routes'))
app.use('/api/history', require('./routes/history.routes'))
//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))

//SERVER LISTEN
app.listen(app.get('port'), () => console.log(`Example app listening on port port! ${port}`))